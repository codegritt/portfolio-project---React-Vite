import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import EducationProjects from "./components/EducationProjects";
import ContactMe from "./components/ContactMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Profile />}></Route>
            <Route path="/work" element={<WorkExperience />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/education" element={<EducationProjects />}></Route>
            <Route path="/contact" element={<ContactMe />}></Route>
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
