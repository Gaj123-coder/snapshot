import './App.css';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const images=[];
function App() {
  return (
    <ImageGallery items={images}/>
  );
}

export default App;
