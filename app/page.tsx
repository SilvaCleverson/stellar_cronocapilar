"use client";
import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import LanguageSelector from "@/components/LanguageSelector";
import HairTreatmentCard from "@/components/HairTreatmentCard";
import TreatmentCheckIn from "@/components/TreatmentCheckIn";
import StreakCard from "@/components/StreakCard";
import { Tabs } from "@/components/Tabs";
import { Timeline } from "@/components/Timeline";
import { EventRegister } from "@/components/EventRegister";
import LoginModal from "@/components/LoginModal";
import { useCurrentAccount, useDisconnectWallet, useSignAndExecuteTransaction } from "@/lib/stellar-provider";
import { PACKAGE_ID, MODULE_NAME, FUNCTION_CREATE_PROFILE, FUNCTION_REGISTER_TREATMENT } from "@/lib/constants";

function formatAddress(address: string): string {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

type TreatmentType = "hydration" | "nutrition" | "reconstruction";

export default function Page() {
  const { t, language } = useI18n();
  const account = useCurrentAccount();
  const { mutate: disconnect } = useDisconnectWallet();
  const { mutate: signAndExecute } = useSignAndExecuteTransaction();
  
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("profile");
  const [isSavingOnChain, setIsSavingOnChain] = useState(false);
  const [onChainSaved, setOnChainSaved] = useState(false);
  const [isSavingTreatment, setIsSavingTreatment] = useState(false);
  
  // Estado do perfil
  const [hairType, setHairType] = useState<string>("");
  const [hairLength, setHairLength] = useState<string>("");
  const [hairTexture, setHairTexture] = useState<string>("");
  const [profileLoaded, setProfileLoaded] = useState(false);
  
  // Estado dos tratamentos
  const [treatments, setTreatments] = useState({
    hydration: { count: 0, lastDate: null as string | null },
    nutrition: { count: 0, lastDate: null as string | null },
    reconstruction: { count: 0, lastDate: null as string | null },
  });

  // Carregar perfil do localStorage
  useEffect(() => {
    if (!account) {
      setHairType("");
      setHairLength("");
      setHairTexture("");
      setOnChainSaved(false);
      setProfileLoaded(true);
      return;
    }

    const savedProfile = localStorage.getItem(`cronocapilar_profile_${account.address}`);
    if (savedProfile) {
      const profile = JSON.parse(savedProfile);
      setHairType(profile.hairType || "");
      setHairLength(profile.hairLength || "");
      setHairTexture(profile.hairTexture || "");
      setOnChainSaved(profile.onChain || false);
    }

    const savedTreatments = localStorage.getItem(`cronocapilar_treatments_${account.address}`);
    if (savedTreatments) {
      setTreatments(JSON.parse(savedTreatments));
    }
    
    setProfileLoaded(true);
  }, [account]);

  // Salvar perfil
  function saveProfile(type: string) {
    if (!account) return;
    setHairType(type);
    localStorage.setItem(`cronocapilar_profile_${account.address}`, JSON.stringify({ 
      hairType: type,
      hairLength,
      hairTexture,
      onChain: onChainSaved
    }));
  }

  function saveHairLength(cm: string) {
    if (!account) return;
    setHairLength(cm);
    localStorage.setItem(`cronocapilar_profile_${account.address}`, JSON.stringify({ 
      hairType, 
      hairLength: cm, 
      hairTexture,
      onChain: onChainSaved
    }));
  }

  function saveHairTexture(texture: string) {
    if (!account) return;
    setHairTexture(texture);
    localStorage.setItem(`cronocapilar_profile_${account.address}`, JSON.stringify({ 
      hairType, 
      hairLength, 
      hairTexture: texture,
      onChain: onChainSaved
    }));
  }

  // Salvar perfil on-chain
  async function saveProfileOnChain() {
    if (!account) {
      setIsLoginModalOpen(true);
      return;
    }

    setIsSavingOnChain(true);
    try {
      await signAndExecute({
        type: "profile",
        hairType,
        hairLength,
        hairTexture,
      });

      setOnChainSaved(true);
      const now = new Date().toISOString();
      localStorage.setItem(`cronocapilar_profile_${account.address}`, JSON.stringify({ 
        hairType, 
        hairLength, 
        hairTexture,
        onChain: true,
        savedAt: now
      }));

      alert(language === "pt-BR"
        ? "✅ Perfil salvo on-chain com sucesso!"
        : language === "en-US"
        ? "✅ Profile saved on-chain successfully!"
        : "✅ Perfil guardado on-chain con éxito!");
    } catch (error: any) {
      console.error("Erro ao salvar perfil on-chain:", error);
      alert(language === "pt-BR"
        ? `❌ Erro ao salvar perfil: ${error.message || "Erro desconhecido"}`
        : language === "en-US"
        ? `❌ Error saving profile: ${error.message || "Unknown error"}`
        : `❌ Error al guardar perfil: ${error.message || "Error desconocido"}`);
    } finally {
      setIsSavingOnChain(false);
    }
  }

  // Check-in de tratamento
  async function handleTreatmentCheckIn(type: TreatmentType) {
    if (!account) {
      setIsLoginModalOpen(true);
      return;
    }

    setIsSavingTreatment(true);
    try {
      await signAndExecute({
        type: "treatment",
        treatmentType: type,
      });

      const now = new Date().toISOString();
      const updatedTreatments = {
        ...treatments,
        [type]: {
          count: treatments[type].count + 1,
          lastDate: now,
        },
      };

      setTreatments(updatedTreatments);
      localStorage.setItem(`cronocapilar_treatments_${account.address}`, JSON.stringify(updatedTreatments));

      // Salvar na timeline
      const timeline = JSON.parse(localStorage.getItem(`cronocapilar_timeline_${account.address}`) || "[]");
      timeline.push({
        type,
        date: now,
      });
      localStorage.setItem(`cronocapilar_timeline_${account.address}`, JSON.stringify(timeline));

      alert(language === "pt-BR"
        ? `✅ Check-in registrado! Total: ${updatedTreatments[type].count}`
        : language === "en-US"
        ? `✅ Check-in registered! Total: ${updatedTreatments[type].count}`
        : `✅ Check-in registrado! Total: ${updatedTreatments[type].count}`);
    } catch (error: any) {
      console.error("Erro ao registrar check-in:", error);
      alert(language === "pt-BR"
        ? `❌ Erro ao registrar check-in: ${error.message || "Erro desconhecido"}`
        : language === "en-US"
        ? `❌ Error registering check-in: ${error.message || "Unknown error"}`
        : `❌ Error al registrar check-in: ${error.message || "Error desconocido"}`);
    } finally {
      setIsSavingTreatment(false);
    }
  }

  if (!profileLoaded) {
    return (
      <div style={{ textAlign: "center", padding: 48 }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>⏳</div>
        <p style={{ fontSize: 14, color: "#666" }}>
          {language === "pt-BR" ? "Carregando..." : "Loading..."}
        </p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
      {/* Header */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        marginBottom: 32,
        flexWrap: "wrap",
        gap: 16
      }}>
        <div>
          <h1 style={{ 
            margin: 0, 
            fontSize: 32, 
            background: "linear-gradient(135deg, #667eea 0%, #ff6b9d 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700
          }}>
            🚀 {t.app.title}
          </h1>
          <p style={{ margin: "8px 0 0 0", fontSize: 14, color: "#666" }}>
            {t.app.subtitle}
          </p>
        </div>
        
        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <LanguageSelector />
          {account ? (
            <>
              <button
                onClick={() => setIsLoginModalOpen(true)}
                style={{
                  padding: "10px 16px",
                  borderRadius: 12,
                  border: "2px solid rgba(102, 126, 234, 0.3)",
                  background: "rgba(102, 126, 234, 0.1)",
                  color: "#667eea",
                  fontWeight: 600,
                  fontSize: 13,
                  cursor: "pointer",
                }}
              >
                {formatAddress(account.address)}
              </button>
              <button
                onClick={() => disconnect()}
                style={{
                  padding: "10px 16px",
                  borderRadius: 12,
                  border: "2px solid rgba(255, 107, 157, 0.3)",
                  background: "rgba(255, 107, 157, 0.1)",
                  color: "#ff6b9d",
                  fontWeight: 600,
                  fontSize: 13,
                  cursor: "pointer",
                }}
              >
                {t.app.disconnect}
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsLoginModalOpen(true)}
              style={{
                padding: "12px 24px",
                borderRadius: 12,
                border: "none",
                background: "linear-gradient(135deg, #667eea 0%, #ff6b9d 100%)",
                color: "white",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              {t.app.walletConnect}
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <Tabs
        tabs={[
          {
            id: "profile",
            label: t.app.profileTab,
            icon: "👤",
            content: (
              <div>
                <div style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #fdf4f7 100%)",
                  borderRadius: 24,
                  padding: 28,
                  marginBottom: 24,
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
                  border: "1px solid rgba(255, 107, 157, 0.1)"
                }}>
                  <h2 style={{
                    margin: "0 0 24px 0",
                    fontSize: 24,
                    background: "linear-gradient(135deg, #667eea 0%, #ff6b9d 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 700
                  }}>
                    🚀 {t.profile.title}
                  </h2>

                  <button
                    onClick={saveProfileOnChain}
                    disabled={isSavingOnChain || !account}
                    style={{
                      width: "100%",
                      padding: "16px",
                      borderRadius: 16,
                      border: "none",
                      background: isSavingOnChain || !account ? "#ccc" : "linear-gradient(135deg, #667eea 0%, #ff6b9d 100%)",
                      color: "white",
                      fontWeight: 600,
                      fontSize: 15,
                      cursor: isSavingOnChain || !account ? "not-allowed" : "pointer",
                      marginBottom: 24,
                      boxShadow: isSavingOnChain || !account ? "none" : "0 8px 24px rgba(102, 126, 234, 0.4)",
                    }}
                  >
                    {isSavingOnChain
                      ? (language === "pt-BR" ? "Salvando on-chain..." : "Saving on-chain...")
                      : (language === "pt-BR" ? "🔗 Salvar Perfil On-Chain" : "🔗 Save Profile On-Chain")
                    }
                  </button>

                  <div style={{ marginBottom: 20 }}>
                    <label style={{ fontSize: 14, color: "#667eea", marginBottom: 10, display: "block", fontWeight: 600 }}>
                      {t.hairTypes.title}
                    </label>
                    <select
                      value={hairType}
                      onChange={(e) => saveProfile(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        borderRadius: 16,
                        border: "2px solid rgba(102, 126, 234, 0.2)",
                        fontSize: 15,
                        background: "white",
                      }}
                    >
                      <option value="">{t.hairTypes.escolha}</option>
                      <option value="liso">{t.hairTypes.liso}</option>
                      <option value="ondulado">{t.hairTypes.ondulado}</option>
                      <option value="cacheado">{t.hairTypes.cacheado}</option>
                      <option value="crespo">{t.hairTypes.crespo}</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <label style={{ fontSize: 14, color: "#667eea", marginBottom: 10, display: "block", fontWeight: 600 }}>
                      {t.hairLength.title}
                    </label>
                    <input
                      type="text"
                      value={hairLength}
                      onChange={(e) => saveHairLength(e.target.value)}
                      placeholder={t.hairLength.placeholder}
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        borderRadius: 16,
                        border: "2px solid rgba(102, 126, 234, 0.2)",
                        fontSize: 15,
                        background: "white",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: 14, color: "#667eea", marginBottom: 10, display: "block", fontWeight: 600 }}>
                      {t.hairTexture.title}
                    </label>
                    <select
                      value={hairTexture}
                      onChange={(e) => saveHairTexture(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        borderRadius: 16,
                        border: "2px solid rgba(102, 126, 234, 0.2)",
                        fontSize: 15,
                        background: "white",
                      }}
                    >
                      <option value="">{t.hairTexture.escolha}</option>
                      <option value="oleoso">{t.hairTexture.oleoso}</option>
                      <option value="seco">{t.hairTexture.seco}</option>
                      <option value="normal">{t.hairTexture.normal}</option>
                      <option value="misto">{t.hairTexture.misto}</option>
                    </select>
                  </div>
                </div>
              </div>
            ),
          },
          {
            id: "treatments",
            label: t.app.treatmentsTab,
            icon: "💆‍♀️",
            content: (
              <div>
                <StreakCard treatments={treatments} />
                <TreatmentCheckIn onCheckIn={handleTreatmentCheckIn} />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                  <HairTreatmentCard type="hydration" count={treatments.hydration.count} lastDate={treatments.hydration.lastDate} />
                  <HairTreatmentCard type="nutrition" count={treatments.nutrition.count} lastDate={treatments.nutrition.lastDate} />
                  <HairTreatmentCard type="reconstruction" count={treatments.reconstruction.count} lastDate={treatments.reconstruction.lastDate} />
                </div>
              </div>
            ),
          },
          {
            id: "timeline",
            label: t.app.timelineTab,
            icon: "📅",
            content: <Timeline />,
          },
          {
            id: "events",
            label: t.app.eventsTab,
            icon: "📝",
            content: <EventRegister />,
          },
        ]}
        defaultTab={activeTab}
        onTabChange={setActiveTab}
      />

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  );
}
