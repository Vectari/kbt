import { BrowserRouter, Routes, Route } from "react-router-dom";

import KeyboardTester from "./KeyboardTester";
import SeoContent from "./SeoContent";
import About from "./About";
// import Contact from "./Contact";
// import PrivacyPolicy from "./PrivacyPolicy";
// import Terms from "./Terms";
import Footer from "./Footer";

function Home() {
  return (
    <>
      {" "}
      <KeyboardTester /> <SeoContent />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/privacy" element={<PrivacyPolicy />} /> */}
        {/* <Route path="/terms" element={<Terms />} />{" "} */}
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
