import { Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./context";
import Footer from "./pages/footer";
import MainNav from "./pages/nav/MainNav";
import Home from "./pages/home";
import Comment from "./pages/comments";
import AboutUs from "./pages/about us";
import Store from "./pages/store/Store";
import StartOfPage from "./location/StartOfPage";

function App() {
  return (
    
      <ShoppingCartProvider>
        <StartOfPage />
        <MainNav />
        <Routes>
          <Route path="/restaurant-app/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/Form" element={<Comment />} />
          <Route path="/store" element={<Store />} />
        </Routes>
        <Footer />
      </ShoppingCartProvider>
    
  );
}

export default App;
