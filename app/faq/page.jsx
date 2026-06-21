import Breadcrumb from "../_sections/Breadcrumb";
import FAQ from "../_sections/FAQ";
import ContactInfo from "../_sections/ContactInfo";

const FaqPage = () => {
  return (
    <main className="main-wrapper relative overflow-hidden">
      <Breadcrumb title={"FAQs"} />
      <FAQ layout="list" />
      <ContactInfo />
    </main>
  );
};

export default FaqPage;
