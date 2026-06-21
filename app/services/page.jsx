import Breadcrumb from "../_sections/Breadcrumb";
import FAQ from "../_sections/FAQ";
import Services from "../_sections/Services";
import Testimonial from "../_sections/Testimonial";

function ServicePage() {
  return (
    <main className="main-wrapper relative overflow-hidden">
      <Breadcrumb title={"Our Services"} />
      <Services />
      <FAQ />
      <Testimonial />
    </main>
  );
}

export default ServicePage;
