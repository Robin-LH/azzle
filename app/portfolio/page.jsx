import Breadcrumb from "../_sections/Breadcrumb";
import Portfolio from "../_sections/Portfolio";

function PortfolioPage() {
  return (
    <main className="main-wrapper relative overflow-hidden">
      <Breadcrumb title={"Our Portfolio"} />
      <Portfolio />
    </main>
  );
}

export default PortfolioPage;
