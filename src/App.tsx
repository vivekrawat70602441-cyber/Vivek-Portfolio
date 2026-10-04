import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer";

function App() {
    return (
        <div className="min-h-screen bg-[#050b14]">
            <Navbar />

            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Education />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;