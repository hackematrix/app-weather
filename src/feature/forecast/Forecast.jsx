

import { useForecastWeather } from "../../hooks/useForecastWeather";

import AppNav from './AppNav';

import ForecastList from "./ForecastList";




function Forecast({setIsHome,position}) {

  const {isLoading,weatherForecastList}=useForecastWeather(position);

  function formatDay(dateStr) {
    return new Intl.DateTimeFormat("en", {
      weekday: "short",
    }).format(new Date(dateStr));
  }

  

  return (
    <>
    {!isLoading&&<>
     <AppNav setIsHome={setIsHome}/>

    <ForecastList weatherForecastList={weatherForecastList}/>
    </>}
    </>
  );
}
export default Forecast;


