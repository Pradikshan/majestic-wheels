import { AboutUsSection } from "./components/AboutUsSection";
import BookingForm from "./components/BookingForm";
import FAQSection from "./components/FAQSection";
import FleetSection from "./components/FleetSection";
import Footer from "./components/Footer";
import { HeroImage } from "./components/HeroImage";
import { HeroText } from "./components/HeroText";
import { InfoSection } from "./components/InfoSection";
import Navbar from "./components/Navbar";
import ScrollAnimation from "./components/ScrollAnimation";
import SplitScreen from "./components/SplitScreen";
import { TestimonialSection } from "./components/TestimonialSection";



function App() {

  return (
    <div>
      <Navbar />
      <div className="bg-background-image bg-cover bg-center">
        <div id="home" className="bg-hero-bg bg-cover bg-center">
          <SplitScreen>
            <HeroImage />
            <HeroText />
          </SplitScreen>
        </div>

        <ScrollAnimation>
          <InfoSection />
        </ScrollAnimation>
          
        <ScrollAnimation>
          <FleetSection />
        </ScrollAnimation>

        <ScrollAnimation>
          <BookingForm />
        </ScrollAnimation>

        <ScrollAnimation>
          <AboutUsSection />
        </ScrollAnimation>

        <ScrollAnimation>
          <TestimonialSection />
        </ScrollAnimation>

        <ScrollAnimation>
          <FAQSection />
        </ScrollAnimation>

        <Footer />
      </div>
    </div>
  );
}

export default App;
