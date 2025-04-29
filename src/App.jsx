import Container from "./ui/Container";
import Forecast from "./feature/forecast/Forecast";
import Home from "./feature/home/Home";
import { useEffect, useState } from "react";
import { useGeolocation } from "./hooks/useGeolocation";
import Loading from "./ui/Loading";

function App() {
  const {getCurrentLocation,isLoading,position}=useGeolocation();

  

  const [isHome,setIsHome]=useState(true);
 

 

  useEffect(()=>{
    getCurrentLocation();
  },[]);


  return (
    <Container>
      {isLoading?(<Loading/>):
      
        (isHome?(<Home setIsHome={setIsHome} position={position}/>):<Forecast setIsHome={setIsHome} position={position}/>)}
      
     
      
    </Container>
  );
}

export default App;
