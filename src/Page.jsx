import Footer from "./components/Footer";
import Navbar from "./components/header/Navbar";
import NewsContainer from "./components/news/NewsContainer";

const Page = () => {
  return (
    <div>
      <Navbar />
      <NewsContainer />
      <Footer />
    </div>
  );
};

export default Page;
