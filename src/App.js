import React from "react";
import { BrowserRouter,Routes,Rout, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home/home";
import Tovar from "./pages/Tovar/tovar";
import Additional from "./pages/Additional/additional";
import Category from "./pages/category/category";
import Brends from "./pages/Brends/brends";
import Adress from "./pages/Adress/adress";
import Orders from "./pages/Orders/orders";
import Checked from "./pages/Orders/checked";
import Nochecked from "./pages/Orders/noChecked";
import Banner_uz from "./pages/Banner/bannerUz";
import Banner_ru from "./pages/Banner/bannerRu";
import Banner_eng from "./pages/Banner/bannerEng";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index path="/" element={<Home/>} />
            <Route path="/tovar" element={<Tovar/>} />
            <Route path="/banner" element={<Banner_uz/>} />
            <Route path="/additional" element={<Additional/>} />
            <Route path="/category" element={<Category/>} />
            <Route path="/brends" element={<Brends/>} />
            <Route path="/adress" element={<Adress/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/checked" element={<Checked/>} />
            <Route path="/noCheck" element={<Nochecked/>} />
            <Route path="/ru" element={<Banner_ru/>} />
            <Route path="/eng" element={<Banner_eng/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
