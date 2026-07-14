import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "@/components";
import { PreferencesProvider } from "@/contexts/PreferencesContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PreferencesProvider>
      <Navbar />
      <Component {...pageProps} />
    </PreferencesProvider>
  );
}
