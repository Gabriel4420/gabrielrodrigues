/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Document() {
  useEffect(() => {
    const importTE = async () => {
      (await import("tw-elements")).default;
    };
    importTE();
  }, []);
  return (
    <Html lang="en">
      <Head />
      <body>
        <div
          data-tf-sidetab="wj9Makwv"
          data-tf-opacity="100"
          data-tf-iframe-props="title=Budget Form"
          data-tf-transitive-search-params
          data-tf-button-color="#3DDB80"
          data-tf-button-text="Quero orçar !"
          data-tf-medium="snippet"
        ></div>
        <script src="//embed.typeform.com/next/embed.js" />
        <Main />
        <NextScript />
        <a
          href="https://api.whatsapp.com/send?phone=5517992560812&text=Oi%21%20vi%20seu%20curriculum%20e%20gostaria%20de%20conversar%20com%20você"
          className="fixed w-14 h-14 bottom-9 right-9 bg-[#25d366] text-white rounded-full shadow-lg shadow-black/40  "
          target="_blank"
          title="whatsapp"
          rel="no-follow noopener"
        >
          <FaWhatsapp className="mt-3 ml-3" size={30} />
        </a>
      </body>
    </Html>
  );
}
