import { HeroImage } from "./components/HeroImage";
import { HeroText } from "./components/HeroText";
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
    </container>
  );
}

export default App;
