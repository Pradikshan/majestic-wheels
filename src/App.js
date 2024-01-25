import { AboutUsSection } from "./components/AboutUsSection";
import BookingForm from "./components/BookingForm";
import FAQSection from "./components/FAQSection";
import FleetSection from "./components/FleetSection";
import { HeroImage } from "./components/HeroImage";
import { HeroText } from "./components/HeroText";
import { InfoSection } from "./components/InfoSection";
import Navbar from "./components/Navbar";
import SplitScreen from "./components/SplitScreen";
import { TestimonialSection } from "./components/TestimonialSection";

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-background-image bg-cover bg-center">
        <div className="bg-hero-bg bg-cover bg-center">
          <SplitScreen>
            <HeroImage />
            <HeroText />
          </SplitScreen>
        </div>

        <InfoSection />

        <FleetSection />

        <BookingForm />

        <AboutUsSection />

        <TestimonialSection />

        <FAQSection />

        

      </div>
      

    </div>
  );
}

export default App;
