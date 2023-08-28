// import { useState } from "react";
// import "./App.css";

// const App = () => {
//   // const [name,setname] =useState("bilal")
//   // console.log(name)
//   // console.log(useState("ilal"))

//   const nameState = useState("bilal");
//   const name = nameState[0];
//   const setName = nameState[1];

//   // console.log(name);

//   const myfunct =()=>{
    
//     setName("burgur");
//     console.log(name)
//   }
//   console.log(name)
// console.log("sup")
// return(
//   <button onClick={myfunct}>{name}</button>
// )
// }

// export default App;


const App=()=>{
  const [name,setName] = useState(["bilal","notBilal","notme"])
  const clickHandler = (v1,v2,v3)=>{
    console.log(v1)
    if (!name.includes("oyes")) {
      setName([...name, "oyes"]); 

    }
   
  }
  return(
    <>
    <button onClick={()=>clickHandler(...name)}>Click</button>
    <div>{name}</div>
    </>
  )
}
export default App

import { useState } from "react";
import "./App.css"

// const App=()=>{
//   console.log("how are u");
//   const [data,setdata] = useState("u will click then its data will be changed")

//   const clickHandler = ()=>{
//     setdata("new data")
//   }
//   return(

//     <>
//     <button onClick={clickHandler}>{data}</button>
    
//     </>
//   )
// }
// export default App