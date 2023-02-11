import React from "react";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import About from "./containers/About";
import Contact from "./containers/Contact";
import ListingDetail from "./containers/ListingDetail";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./hocs/Layout";
import "./sass/main.scss";
import Listings from "./containers/Listings";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/listings"} element={<Listings />} />
          <Route
            path={"/listings/:slug"}
            element={
              <PrivateRoute>
                <ListingDetail />
              </PrivateRoute>
            }
          />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

