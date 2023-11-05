import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const HomeOne = React.lazy(() => import("pages/HomeOne"));
const LoginScreen = React.lazy(() => import("pages/LoginScreen"));
const PropertyDetails = React.lazy(() => import("pages/PropertyDetails"));
const Properties = React.lazy(() => import("pages/Properties"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const Home1 = React.lazy(() => import("pages/Home1"));
const Contact = React.lazy(() => import("pages/Contact"));
const Search = React.lazy(() => import("pages/Search"));
const AIPlatform = React.lazy(() => import("pages/AIPlatform"));
const SignUpScreen = React.lazy(() => import("pages/SignUpScreen"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signupscreen" element={<SignUpScreen />} />
          <Route path="/aiplatform" element={<AIPlatform />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/propertydetails" element={<PropertyDetails />} />
          <Route path="/loginscreen" element={<LoginScreen />} />
          <Route path="/homeone" element={<HomeOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
