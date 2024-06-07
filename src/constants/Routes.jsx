import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { appLinks } from "./Links";
import Navbar from "../layouts/Navbar";

const Landing = React.lazy(() => import("../pages/Landing"));
const About = React.lazy(() => import("../pages/About"));
const Contact = React.lazy(() => import("../pages/Contact"));

function BaseRouter() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Routes>
            <Route exact path={appLinks?.Landing} element={<Landing />} />
            <Route path={appLinks?.About} element={<About/>} />
            <Route path={appLinks?.Contact} element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default BaseRouter;
