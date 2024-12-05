import { Route, Routes } from "react-router";
import Home from "./components/home";
import Cart from "./pages/cart";
import Header from "./components/header";

const App = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-[30px] px-[20px]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
