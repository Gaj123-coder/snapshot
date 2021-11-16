import './App.css';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const images=[{original:"./2.jpg",thumbnail:"./2.jpg"}];
function App() {
  return (
    <ImageGallery items={images}/>
  );
}

export default App;
