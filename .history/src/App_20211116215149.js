import React, { useEffect ,useState} from "react";
import { saveAs } from 'file-saver';
const App = () => {
  // const [search,setSearch]=useState("");
  // const [data,setData]=useState(null);
  // const download=()=>{
  //   var FileSaver=require('file-saver')
  //   FileSaver.saveAs("https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg","image")
  // }
  useEffect(()=>{
    const exe=async ()=>{
      const res=await fetch("https://snapshot-5e879-default-rtdb.firebaseio.com/images.json");
      if(!res){
        throw new Error();
      }

      const info=await res.json();
      console.log(info);
    }
    if(!search){
      exe();
    }
  },[search]);
  return (
    <React.Fragment>
      <input type="text">Enter the title of the photo to search</input>  
    </React.Fragment>
  );
};

export default App;
