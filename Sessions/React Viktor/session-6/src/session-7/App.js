import "./App.css";
import Carousel from "./components/Carousel/Carousel";

const ImageArray = [
  "Image 1",
  "Image 2",
  "Image 3",
  "Image 4",
];

function App() {
  return (
    <>
      <div className="App">
        <Carousel images={ImageArray} />
      </div>
    </>
  );
}

export default App;
