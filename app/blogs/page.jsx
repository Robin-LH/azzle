import Breadcrumb from "../_sections/Breadcrumb";
import BlogListing from "../_sections/BlogListing";

function BlogsPage() {
  return (
    <main className="main-wrapper relative overflow-hidden">
      <Breadcrumb title={"Our Blogs"} />
      <BlogListing />
    </main>
  );
}

export default BlogsPage;
