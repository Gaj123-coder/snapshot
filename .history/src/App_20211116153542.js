import { useScreenshot } from 'use-react-screenshot'
const App=()=>{
  const { image, takeScreenshot } = useScreenshot();
  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={() => takeScreenshot()}>screenshot</button>
      {image && <img src={image} alt="Screenshot not dispalying..."/>}
    </div>
  );
  
}

export default App;
