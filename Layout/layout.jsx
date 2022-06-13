import { Header } from "./header";
import Head from "next/head";
import { useTranslate } from "../i18n/useTranslate";
import { useLocaleContext } from "../i18n/useLocaleContext";
import { Footer } from "./footer/footer";

export function Layout({ children }) {
  const { locale } = useLocaleContext();
  const { translate } = useTranslate();

  return (
    <>
      <Head>
        <title>{translate("title")}</title>
        <meta name="description" content={translate("description")} />

        <meta property="og:site_name" content={translate("title")} />
        <meta property="og:locale" content={locale} />
        <meta property="og:title" content={translate("title")} />
        <meta property="og:description" content={translate("description")} />
        <meta property="og:image" content={`/og-image-${locale}.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`/og-image-${locale}.png`} />

        <link rel="manifest" href={`/manifest-${locale}.json`} />
      </Head>

      <header>
        <Header />
      </header>

      <main className="flex flex-grow">{children}</main>

      <Footer />
    </>
  );
}
