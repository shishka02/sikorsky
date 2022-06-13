import { LocaleProvider } from "../../i18n/LocaleProvider";
import { Main } from "./mainPage/main";
import { Layout } from "../../Layout/layout";

export default function ({ locale }) {
  return (
    <LocaleProvider locale={locale}>
      <Layout>
        <Main />
      </Layout>
    </LocaleProvider>
  );
}

export async function getStaticPaths() {
  // Add your logic to fetch all products by category

  return {
    paths: [
      // For each category/product combination you would have an entry like the following:
      {
        params: {
          locale: "ukr",
        },
      },
      {
        params: {
          locale: "pl",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: { locale: params.locale } };
}
