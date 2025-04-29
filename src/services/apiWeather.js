const API_KEY="37c750125fb801f06200e9d8b18668d6";

export async function getCurrentWeather(lat,lon){
 try{
    const response=await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);

        return await response.json();
 }catch(error){
    throw new Error(error.message);
 }
}

export async function getForecastWeather(lat,lon){
   try{
      const response=await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
  
          return await response.json();
   }catch(error){
      throw new Error(error.message);
   }
  }