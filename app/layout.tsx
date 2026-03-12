import "./globals.css";
import { StellarProvider } from "@/lib/stellar-provider";
import { I18nProvider } from "@/lib/i18n";
import StellarWatermark from "@/components/StellarWatermark";
import DemoBanner from "@/components/DemoBanner";

export const metadata = {
  title: "CronoCapilar — Transforma sua rotina capilar em prova on-chain",
  description: "Acompanhe seus cuidados capilares na rede Stellar.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>
          <StellarProvider>
            <DemoBanner />
            <div className="container" style={{ paddingTop: "40px" }}>
              {children}
            </div>
            <StellarWatermark />
          </StellarProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
