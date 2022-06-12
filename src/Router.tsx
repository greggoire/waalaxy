import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Product from "./views/Product";
import ProductView from "./views/ProductView";
import _404 from "./views/_404";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductView />} />
        <Route path="/product/:productId/edit" element={<Product />} />
        <Route path="*" element={<_404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
