import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar";
import NewsBoard from "./components/NewsBoard";
import NewsContextProvider from "./context/newsContext";

function App() {
  return (
    <>
      <NewsContextProvider>
        <Navbar />
        <NewsBoard />
      </NewsContextProvider>
      <Footer />
    </>
  );
}

export default App;
