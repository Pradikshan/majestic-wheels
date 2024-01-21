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

      <SplitScreen>
        <HeroImage />
        <HeroText />
      </SplitScreen>

      <InfoSection />

      <FleetSection />
    </container>
  );
}

export default App;
