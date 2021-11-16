import { useScreenshot } from 'use-react-screenshot'
const App=()=>{
  const { image, takeScreenshot } = useScreenshot();
  const capture=()=>{
    takeScreenshot();
  }
  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={capture}>screenshot</button>
      {image && <img src={image} />}
    </div>
  );
  
}

export default App;
