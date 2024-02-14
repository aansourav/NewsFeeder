

import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar";

import NewsBoard from "./components/NewsBoard";
import NewsContextProvider from "./context/newsContext";

function App() {
  return (
    <>
      <NewsContextProvider>
        <NavBar />
        <NewsBoard />
      </NewsContextProvider>
      <Footer/>
    </>
  );
}

export default App;
