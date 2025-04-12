import Contact from "./components/contact";
import Feature from "./components/features";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import TaskManager from "./components/task-manager";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Feature />
      <TaskManager />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
