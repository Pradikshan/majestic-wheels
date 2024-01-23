import BookingForm from "./components/BookingForm";
import FleetSection from "./components/FleetSection";
import { HeroImage } from "./components/HeroImage";
import { HeroText } from "./components/HeroText";
import { InfoSection } from "./components/InfoSection";
import Navbar from "./components/Navbar";
import SplitScreen from "./components/SplitScreen";

function App() {
  return (
    <container>
      <Navbar />

      <div className="bg-hero-bg bg-cover bg-center">
      <SplitScreen>
        <HeroImage />
        <HeroText />
      </SplitScreen>
      </div>


      <InfoSection />

      <FleetSection />

      <BookingForm />
    </container>
  );
}

export default App;
