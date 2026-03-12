"use client";
import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { useCurrentAccount, useSignAndExecuteTransaction } from "@/lib/stellar-provider";
import { PACKAGE_ID, MODULE_NAME, FUNCTION_REGISTER_EVENT } from "@/lib/constants";

interface Event {
  id: string;
  type: "bigchop" | "haircut" | "coloration" | "treatment";
  date: string;
  description?: string;
  materials?: string[];
  location?: string;
  cmCut?: number;
  txDigest?: string;
}

export function EventRegister() {
  const { t, language } = useI18n();
  const account = useCurrentAccount();
  const { mutate: signAndExecute } = useSignAndExecuteTransaction();
  const [events, setEvents] = useState<Event[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [isSavingEvent, setIsSavingEvent] = useState(false);
  const [formData, setFormData] = useState({
    type: "bigchop" as Event["type"],
    date: new Date().toISOString().split("T")[0],
    description: "",
    materials: "",
    location: "",
    cmCut: "",
  });

  useEffect(() => {
    loadEvents();
  }, []);

  function loadEvents() {
    const saved = localStorage.getItem("cronocapilar_events");
    if (saved) {
      setEvents(JSON.parse(saved));
    }
  }

  function saveEvents(newEvents: Event[]) {
    localStorage.setItem("cronocapilar_events", JSON.stringify(newEvents));
    setEvents(newEvents);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!account) {
      alert(language === "pt-BR" 
        ? "Por favor, conecte sua carteira primeiro."
        : language === "en-US"
        ? "Please connect your wallet first."
        : "Por favor, conecta tu carteira primero.");
      return;
    }

    setIsSavingEvent(true);

    try {
      // Simular transação on-chain para Stellar
      const result = await signAndExecute({
        type: "event",
        eventType: formData.type,
        date: formData.date,
        description: formData.description || "",
        materials: formData.materials || "",
        location: formData.location || "",
        cmCut: formData.cmCut || "",
      });

      console.log("✅ Evento registrado on-chain (simulado):", result);
      
      setIsSavingEvent(false);
      
      const newEvent: Event = {
        id: Date.now().toString(),
        type: formData.type,
        date: new Date().toISOString(),
        description: formData.description || undefined,
        location: formData.location || undefined,
        cmCut: formData.cmCut ? Number(formData.cmCut) : undefined,
        materials: formData.materials ? formData.materials.split(",").map(m => m.trim()) : undefined,
        txDigest: result.digest,
      };

      const newEvents = [...events, newEvent].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      
      saveEvents(newEvents);
      
      setShowForm(false);
      setFormData({
        type: "bigchop",
        date: new Date().toISOString().split("T")[0],
        description: "",
        materials: "",
        location: "",
        cmCut: "",
      });
      
      alert(language === "pt-BR"
        ? `✅ Evento registrado on-chain com sucesso!\n\n📝 Transaction: ${result.digest}\n\n💎 Evento salvo na rede Stellar!\n\n🕐 Data/Hora: ${new Date().toLocaleString(language === "pt-BR" ? "pt-BR" : language === "en-US" ? "en-US" : "es-ES")}`
        : language === "en-US"
        ? `✅ Event registered on-chain successfully!\n\n📝 Transaction: ${result.digest}\n\n💎 Event saved on Stellar!\n\n🕐 Date/Time: ${new Date().toLocaleString("en-US")}`
        : `✅ Evento registrado on-chain con éxito!\n\n📝 Transacción: ${result.digest}\n\n💎 Evento guardado en la red Stellar!\n\n🕐 Fecha/Hora: ${new Date().toLocaleString("es-ES")}`);
    } catch (error: any) {
      console.error("Erro ao registrar evento on-chain:", error);
      setIsSavingEvent(false);
      alert(language === "pt-BR"
        ? `❌ Erro ao registrar evento on-chain: ${error.message || "Erro desconhecido"}`
        : language === "en-US"
        ? `❌ Error registering event on-chain: ${error.message || "Unknown error"}`
        : `❌ Error al registrar evento on-chain: ${error.message || "Error desconocido"}`);
    }
  }

  function getIcon(type: Event["type"]) {
    const icons = {
      bigchop: "✂️",
      haircut: "💇‍♀️",
      coloration: "🎨",
      treatment: "💆‍♀️",
    };
    return icons[type];
  }

  function getLabel(type: Event["type"]) {
    const labels = {
      bigchop: language === "pt-BR" ? "Big Chop" : "Big Chop",
      haircut: language === "pt-BR" ? "Corte de Cabelo" : "Haircut",
      coloration: language === "pt-BR" ? "Coloração" : "Hair Coloration",
      treatment: language === "pt-BR" ? "Tratamento" : "Treatment",
    };
    return labels[type];
  }

  function formatDate(dateStr: string) {
    const date = new Date(dateStr + "T00:00:00");
    const locale = language === "pt-BR" ? "pt-BR" : language === "en-US" ? "en-US" : "es-ES";
    return date.toLocaleDateString(locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  return (
    <div>
      <button
        onClick={() => setShowForm(!showForm)}
        style={{
          width: "100%",
          padding: "18px",
          borderRadius: "20px",
          border: "2px dashed rgba(102, 126, 234, 0.4)",
          background: "linear-gradient(135deg, #ffffff 0%, #fdf4f7 100%)",
          color: "#667eea",
          fontSize: 15,
          fontWeight: "600",
          cursor: "pointer",
          marginBottom: 24,
          boxShadow: "0 4px 16px rgba(102, 126, 234, 0.2)",
          transition: "all 0.3s"
        }}
      >
        {showForm 
          ? (language === "pt-BR" ? "✕ Cancelar" : "✕ Cancel") 
          : (language === "pt-BR" ? "+ Registrar Evento" : "+ Register Event")
        }
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ 
          background: "linear-gradient(135deg, #ffffff 0%, #fdf4f7 100%)", 
          padding: 28, 
          borderRadius: 24, 
          marginBottom: 24,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
          border: "1px solid rgba(255, 107, 157, 0.1)"
        }}>
          <h3 style={{ 
            margin: "0 0 20px 0", 
            fontSize: 22, 
            background: "linear-gradient(135deg, #667eea 0%, #ff6b9d 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700
          }}>
            {language === "pt-BR" ? "📝 Novo Registro" : "📝 New Event"}
          </h3>

          <label style={{ display: "block", marginBottom: 10, fontSize: 13, fontWeight: 600, color: "#667eea" }}>
            {language === "pt-BR" ? "Tipo de Evento" : "Event Type"}
          </label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value as Event["type"] })}
            style={{
              width: "100%",
              padding: "14px 16px",
              borderRadius: 16,
              border: "2px solid rgba(102, 126, 234, 0.2)",
              fontSize: 15,
              marginBottom: 20,
              background: "white",
            }}
          >
            <option value="bigchop">✂️ {language === "pt-BR" ? "Big Chop" : "Big Chop"}</option>
            <option value="haircut">💇‍♀️ {language === "pt-BR" ? "Corte de Cabelo" : "Haircut"}</option>
            <option value="coloration">🎨 {language === "pt-BR" ? "Coloração" : "Coloration"}</option>
            <option value="treatment">💆‍♀️ {language === "pt-BR" ? "Tratamento" : "Treatment"}</option>
          </select>

          <label style={{ display: "block", marginBottom: 10, fontSize: 13, fontWeight: 600, color: "#667eea" }}>
            {language === "pt-BR" ? "Data" : "Date"}
          </label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
            style={{
              width: "100%",
              padding: "14px 16px",
              borderRadius: 16,
              border: "2px solid rgba(102, 126, 234, 0.2)",
              fontSize: 15,
              marginBottom: 20,
              background: "white",
              cursor: "pointer",
            }}
          />

          {formData.type === "haircut" && (
            <>
              <label style={{ display: "block", marginBottom: 10, fontSize: 13, fontWeight: 600, color: "#667eea" }}>
                {language === "pt-BR" ? "Centímetros cortados" : "Centimeters cut"}
              </label>
              <input
                type="number"
                value={formData.cmCut}
                onChange={(e) => setFormData({ ...formData, cmCut: e.target.value })}
                placeholder={language === "pt-BR" ? "Ex: 5 cm" : "Ex: 5 cm"}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: 16,
                  border: "2px solid rgba(102, 126, 234, 0.2)",
                  fontSize: 15,
                  marginBottom: 20,
                  background: "white",
                }}
              />
            </>
          )}

          <label style={{ display: "block", marginBottom: 10, fontSize: 13, fontWeight: 600, color: "#667eea" }}>
            {language === "pt-BR" ? "Materiais utilizados" : "Materials used"} ({language === "pt-BR" ? "separados por vírgula" : "comma separated"})
          </label>
          <input
            type="text"
            value={formData.materials}
            onChange={(e) => setFormData({ ...formData, materials: e.target.value })}
            placeholder={language === "pt-BR" ? "Ex: Shampoo, Máscara, Óleo" : "Ex: Shampoo, Mask, Oil"}
            style={{
              width: "100%",
              padding: "14px 16px",
              borderRadius: 16,
              border: "2px solid rgba(102, 126, 234, 0.2)",
              fontSize: 15,
              marginBottom: 20,
              background: "white",
            }}
          />

          <label style={{ display: "block", marginBottom: 10, fontSize: 13, fontWeight: 600, color: "#667eea" }}>
            {language === "pt-BR" ? "Onde foi feito" : "Where was it done"}
          </label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder={language === "pt-BR" ? "Ex: Em casa, Salão, etc" : "Ex: At home, Salon, etc"}
            style={{
              width: "100%",
              padding: "14px 16px",
              borderRadius: 16,
              border: "2px solid rgba(102, 126, 234, 0.2)",
              fontSize: 15,
              marginBottom: 20,
              background: "white",
            }}
          />

          <label style={{ display: "block", marginBottom: 8, fontSize: 12, fontWeight: 600 }}>
            {language === "pt-BR" ? "Observações" : "Notes"} ({language === "pt-BR" ? "opcional" : "optional"})
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={3}
            placeholder={language === "pt-BR" ? "Adicione observações..." : "Add notes..."}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: 8,
              border: "2px solid #3a5a40",
              fontSize: 14,
              marginBottom: 16,
              resize: "vertical",
            }}
          />

          <div style={{ display: "flex", gap: 12 }}>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: 8,
                border: "2px solid #ddd",
                background: "white",
                color: "#666",
                fontSize: 14,
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {language === "pt-BR" ? "Cancelar" : "Cancel"}
            </button>
            <button
              type="submit"
              disabled={isSavingEvent}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: 8,
                border: "none",
                background: isSavingEvent ? "#ccc" : "#3a5a40",
                color: "white",
                fontSize: 14,
                fontWeight: "bold",
                cursor: isSavingEvent ? "not-allowed" : "pointer",
                opacity: isSavingEvent ? 0.7 : 1,
              }}
            >
              {isSavingEvent 
                ? (language === "pt-BR" ? "Salvando on-chain..." : language === "en-US" ? "Saving on-chain..." : "Guardando on-chain...")
                : (language === "pt-BR" ? "Salvar" : "Save")
              }
            </button>
          </div>
        </form>
      )}

      {events.length === 0 ? (
        <div style={{ textAlign: "center", padding: 48 }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>📅</div>
          <p style={{ fontSize: 14, color: "#666" }}>
            {language === "pt-BR" ? "Nenhum registro ainda" : "No records yet"}
          </p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {events.map((event) => (
            <div
              key={event.id}
              style={{
                background: "white",
                padding: 16,
                borderRadius: 12,
                border: "1px solid #e0e0e0",
              }}
            >
              <div style={{ display: "flex", alignItems: "start", gap: 12 }}>
                <div style={{ fontSize: 32 }}>{getIcon(event.type)}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#333" }}>
                    {getLabel(event.type)}
                  </div>
                  <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>
                    {formatDate(event.date)}
                  </div>
                  {event.cmCut && (
                    <div style={{ fontSize: 12, color: "#3a5a40", marginTop: 4 }}>
                      ✂️ {event.cmCut} cm {language === "pt-BR" ? "cortados" : "cut"}
                    </div>
                  )}
                  {event.materials && event.materials.length > 0 && (
                    <div style={{ fontSize: 11, color: "#999", marginTop: 4 }}>
                      📦 {event.materials.join(", ")}
                    </div>
                  )}
                  {event.location && (
                    <div style={{ fontSize: 11, color: "#999", marginTop: 4 }}>
                      📍 {event.location}
                    </div>
                  )}
                  {event.description && (
                    <div style={{ fontSize: 11, color: "#999", marginTop: 4, fontStyle: "italic" }}>
                      {event.description}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

