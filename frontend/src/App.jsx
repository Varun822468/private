import { useEffect, useState } from "react";

function App() {

  const [data,setData] = useState(null);

  useEffect(()=>{
    fetch("http://localhost:5000/api/resume")
    .then(res=>res.json())
    .then(data=>setData(data));
  },[]);

  return (
    <div>
      <h1>{data?.name}</h1>
      <h2>{data?.role}</h2>
    </div>
  );
}

export default App;