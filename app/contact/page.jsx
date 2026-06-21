import Breadcrumb from "../_sections/Breadcrumb";
import ContactForm from "../_sections/ContactForm";
import LocationsMap from "../_sections/LocationsMap";

function ContactUsPage() {
  return (
    <main className="main-wrapper relative overflow-hidden">
      <Breadcrumb title={"Contact Us"} />
      <ContactForm />
      <LocationsMap />
    </main>
  );
}

export default ContactUsPage;
