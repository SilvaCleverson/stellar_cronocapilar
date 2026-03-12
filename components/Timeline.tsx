"use client";
import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { useCurrentAccount } from "@/lib/stellar-provider";

interface TimelineEvent {
  id: string;
  type: "profile" | "treatment" | "event";
  subtype?: string;
  date: string;
  title: string;
  description?: string;
  icon: string;
  color: string;
}

export function Timeline() {
  const { t, language } = useI18n();
  const account = useCurrentAccount();
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (account) {
      loadTimeline();
    } else {
      setEvents([]);
    }
  }, [account]);

  async function loadTimeline() {
    if (!account) return;

    setLoading(true);
    try {
      const allEvents: TimelineEvent[] = [];

      // 1. Carregar perfil salvo on-chain
      const profileKey = `cronocapilar_profile_${account.address}`;
      const savedProfile = localStorage.getItem(profileKey);
      if (savedProfile) {
        const profile = JSON.parse(savedProfile);
        if (profile.onChain) {
          // Buscar quando foi salvo (usar timestamp se disponível, senão usar data atual)
          const profileDate = profile.savedAt || new Date().toISOString();
          allEvents.push({
            id: `profile-${account.address}`,
            type: "profile",
            date: profileDate,
            title: language === "pt-BR" ? "Perfil Criado" : language === "en-US" ? "Profile Created" : "Perfil Creado",
            description: profile.hairType 
              ? `${language === "pt-BR" ? "Tipo" : language === "en-US" ? "Type" : "Tipo"}: ${t.hairTypes[profile.hairType as keyof typeof t.hairTypes] || profile.hairType}`
              : undefined,
            icon: "👤",
            color: "#667eea",
          });
        }
      }

      // 2. Carregar tratamentos (check-ins)
      const treatmentsKey = `cronocapilar_treatments_${account.address}`;
      const savedTreatments = localStorage.getItem(treatmentsKey);
      if (savedTreatments) {
        const treatments = JSON.parse(savedTreatments);
        if (treatments.hydration?.lastDate) {
          allEvents.push({
            id: `treatment-hydration-${treatments.hydration.lastDate}`,
            type: "treatment",
            subtype: "hydration",
            date: treatments.hydration.lastDate,
            title: t.treatments.hydration,
            description: language === "pt-BR" ? "Check-in de tratamento" : "Treatment check-in",
            icon: "💧",
            color: "#3a5a40",
          });
        }
        if (treatments.nutrition?.lastDate) {
          allEvents.push({
            id: `treatment-nutrition-${treatments.nutrition.lastDate}`,
            type: "treatment",
            subtype: "nutrition",
            date: treatments.nutrition.lastDate,
            title: t.treatments.nutrition,
            description: language === "pt-BR" ? "Check-in de tratamento" : "Treatment check-in",
            icon: "🥑",
            color: "#d4af37",
          });
        }
        if (treatments.reconstruction?.lastDate) {
          allEvents.push({
            id: `treatment-reconstruction-${treatments.reconstruction.lastDate}`,
            type: "treatment",
            subtype: "reconstruction",
            date: treatments.reconstruction.lastDate,
            title: t.treatments.reconstruction,
            description: language === "pt-BR" ? "Check-in de tratamento" : "Treatment check-in",
            icon: "🧬",
            color: "#667eea",
          });
        }
      }

      // 3. Carregar eventos (bigchop, haircut, coloration, treatment)
      const eventsKey = `cronocapilar_events`;
      const savedEvents = localStorage.getItem(eventsKey);
      if (savedEvents) {
        const events = JSON.parse(savedEvents);
        events.forEach((event: any) => {
          const icons: Record<string, string> = {
            bigchop: "✂️",
            haircut: "💇‍♀️",
            coloration: "🎨",
            treatment: "💆‍♀️",
          };
          const titles: Record<string, string> = {
            bigchop: "Big Chop",
            haircut: language === "pt-BR" ? "Corte de Cabelo" : language === "en-US" ? "Haircut" : "Corte de Cabello",
            coloration: language === "pt-BR" ? "Coloração" : language === "en-US" ? "Coloration" : "Coloración",
            treatment: language === "pt-BR" ? "Tratamento" : language === "en-US" ? "Treatment" : "Tratamiento",
          };
          const colors: Record<string, string> = {
            bigchop: "#667eea",
            haircut: "#ff6b9d",
            coloration: "#d4af37",
            treatment: "#3a5a40",
          };

          allEvents.push({
            id: event.id || `event-${event.date}`,
            type: "event",
            subtype: event.type,
            date: event.date,
            title: titles[event.type] || event.type,
            description: event.description || event.location || event.materials?.join(", "),
            icon: icons[event.type] || "📅",
            color: colors[event.type] || "#667eea",
          });
        });
      }

      // Ordenar por data (mais recente primeiro)
      allEvents.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      setEvents(allEvents);
    } catch (error) {
      console.error("Erro ao carregar timeline:", error);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  }

  function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    const locale = language === "pt-BR" ? "pt-BR" : language === "en-US" ? "en-US" : "es-ES";
    const dateFormatted = date.toLocaleDateString(locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${dateFormatted}, ${hours}:${minutes}`;
  }

  if (!account) {
    return (
      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          borderRadius: 20,
          padding: 32,
          textAlign: "center",
          border: "1px solid #e0e0e0",
        }}
      >
        <div style={{ fontSize: 48, marginBottom: 16 }}>🔗</div>
        <h3 style={{ margin: 0, fontSize: 18, color: "#3a5a40", marginBottom: 8 }}>
          {language === "pt-BR" ? "Conecte sua Carteira" : "Connect Your Wallet"}
        </h3>
        <p style={{ fontSize: 14, color: "#666" }}>
          {language === "pt-BR" 
            ? "Conecte sua carteira para ver sua timeline on-chain" 
            : "Connect your wallet to see your on-chain timeline"}
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          borderRadius: 20,
          padding: 32,
          textAlign: "center",
          border: "1px solid #e0e0e0",
        }}
      >
        <div style={{ fontSize: 48, marginBottom: 16 }}>⏳</div>
        <h3 style={{ margin: 0, fontSize: 18, color: "#3a5a40", marginBottom: 8 }}>
          {language === "pt-BR" ? "Carregando..." : "Loading..."}
        </h3>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          borderRadius: 20,
          padding: 32,
          textAlign: "center",
          border: "1px solid #e0e0e0",
        }}
      >
        <div style={{ fontSize: 48, marginBottom: 16 }}>📅</div>
        <h3 style={{ margin: 0, fontSize: 18, color: "#3a5a40", marginBottom: 8 }}>
          {language === "pt-BR" ? "Nenhum registro on-chain ainda" : "No on-chain records yet"}
        </h3>
        <p style={{ fontSize: 14, color: "#666" }}>
          {language === "pt-BR" 
            ? "Comece criando seu perfil ou fazendo seu primeiro check-in!" 
            : "Start by creating your profile or making your first check-in!"}
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.95)",
        borderRadius: 20,
        padding: 24,
        border: "1px solid #e0e0e0",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <h3 style={{ margin: 0, fontSize: 18, color: "#3a5a40" }}>
          📅 {language === "pt-BR" ? "Timeline On-Chain" : "On-Chain Timeline"}
        </h3>
      </div>

      <div style={{ maxHeight: "500px", overflowY: "auto" }}>
        {events.map((event) => (
          <div
            key={event.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 0",
              borderBottom: "1px solid #f0f0f0",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: event.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                flexShrink: 0,
              }}
            >
              {event.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#333" }}>
                {event.title}
              </div>
              {event.description && (
                <div style={{ fontSize: 12, color: "#999", marginTop: 2 }}>
                  {event.description}
                </div>
              )}
              <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>{formatDate(event.date)}</div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 16,
          padding: 12,
          background: "#f8f9fa",
          borderRadius: 8,
          fontSize: 12,
          color: "#666",
          textAlign: "center",
        }}
      >
        📊 {events.length} {language === "pt-BR" ? "eventos on-chain registrados" : "on-chain events recorded"}
      </div>
    </div>
  );
}
