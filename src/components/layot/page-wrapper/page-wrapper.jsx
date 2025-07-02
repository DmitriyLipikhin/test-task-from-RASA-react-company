import "./page-wrapper.scss";
import Header from "../header/header";
import Hero from "../../blocks/hero/hero";
import Catalog from "../../blocks/catalog/catalog";
import catalogAuto from "../../../mocks/catalog-auto";
import catalogBest from "../../../mocks/catalog-best";
import Conditions from "../../blocks/conditions/conditions";
import Faq from "../../blocks/faq/faq";
import Footer from "../footer/footer";

function PageWrapper() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Catalog catalogAuto={catalogAuto} catalogBest={catalogBest} />
        <Conditions />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
