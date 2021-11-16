import React, { useRef,useEffect ,useState} from "react";
import "./App.css";
const App = () => {
  const [search,setSearch]=useState("");
  const [data,setData]=useState(null);
  const [err,setErr]=useState("");
  const ref=useRef();
  useEffect(()=>{
    const exe=async ()=>{
      try{
        const res=await fetch("https://snapshot-5e879-default-rtdb.firebaseio.com/images.json");
        if(!res){
          throw new Error();
        }

        const info=await res.json();
        setData(info);
      }catch(error){
        setErr("Something went wrong");
      }
    }
    exe();
  },[search]);
  const submitHandler=(event)=>{
    event.preventDefault();
    const res=ref.current.value;
    if(res>=0 && res<=5){
    setSearch(res);
    setErr("");
    }else{
      setErr("Please Enter The Valid Title!! The title should be in between 0 and 5 inclusive");
    }
  }
  const getSnapshot=(event)=>{
    const mid=event.target.id;
    var FileSaver=require("file-saver");
    FileSaver.saveAs(mid,"png");
  }
  return (
    <React.Fragment>
      <p className="input-class style">Enter the title of the photo to search</p>
      <input ref={ref} className="input-class" type="text"/>
      <button onClick={submitHandler} className="input-class" type="submit">submit</button>
      <div className="grid">
        {data && !search && !err && data.map((val)=>{
          return <div key={val} id={val} onClick={getSnapshot}>
            <img src={val} width="300px" height="200px" alt="err"/>
            </div>
        })}
        {data && search && !err && <div onClick={getSnapshot} key={search} id={search}>
          <img src={data[search]} width="300px" height="200px" alt="err"/>
          </div>}
        {err && <p className="err">{err}</p>}
      </div>
    </React.Fragment>
  );
};

export default App;
