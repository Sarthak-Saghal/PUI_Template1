import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Menu from "./page/Menu";
import Shop from "./page/Shop";
import NotFound from "./Components/NotFound";
import OrderNow from "./page/OrderNow";
import { Contract } from "./page/Contract";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/menu" element={<Menu />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contract" element={<Contract />} />

        <Route path="*" element={<NotFound/>}></Route>
         <Route path="/ordernow" element={<OrderNow/>} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
