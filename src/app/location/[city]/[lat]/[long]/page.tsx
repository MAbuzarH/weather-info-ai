// {
//   "current_weather": "true",
//   "daily": "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max",
//   "hourly": "temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,uv_index,uv_index_clear_sky,rain,is_day,precipitation,showers,snowfall",
// "latitude": 30.72,
//   "longitude": -86.12607,
//   "timezone": "America/Chicago"
//71.53333000
//36.68333000/
// }

import CallOutCard from "@/components/callOutCart";
import { getClient } from "../../../../../../apolo-client";
import fetchWeatherQuery from "../../../../../../graphql/quires/fetchWeatherQuery";
import StateCard from "@/components/StateCard";
import InformationPanal from "@/components/InformationPanal";
import TempChart from "@/components/TempChart";
import RainChart from "@/components/RainChart";
import HumadityChart from "@/components/HumadityChart";
import getBasePath from "../../../../../../lib/getBasePath";
import cleanData from "../../../../../../lib/CleanData";
import { json } from "stream/consumers";
// console.log("Weather")
export const revalidate = 60; 
type Props = {
  params: {
    city: string;
    lat: number;
    long: number;
  };
};
async function weatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      //       latitude: 30.72,
      // longitude: -86.12607,
      //  timezone: "America/Chicago",
      // latitude: 36.68333000,
      // longitude:71.53333000,
      latitude: lat,
      longitude: long,
      timezone: "GMT",
      current_weather: "true",
    },
  });

  const result: Root = data.myQuery;
  // console.log(result);
  // const { daily } = result;
  // const dataToSend = cleanData(result,city);
 
  // const res = await fetch (`${getBasePath()}/api/getWeatherSummary`,{
  //   method:"POST",
  //   headers:{
       
  //   //  API_URL: "https://api.openai.com/v1/chat/completions",
  //   // Authorization:"Bearer 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",
  //     "Content_Type":"application/json"
  //   },
  //   body: JSON.stringify({
  //     weatherData:dataToSend
  //   })
      
  // });
  // const GPTdata = await res.json();
  // const {content} = GPTdata;
  // console.log(content.weatherData);
  // console.log(result.daily.uv_index_max[0])
  //  console.log(daily);
  //  console.log( result.hourly.uv_index[0]);
  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      {/* infor mation panal */}
      <InformationPanal city={city} result={result} lat={lat} long={long} />
      <div className="p-5 flex-1 lg:p-10">
        <div className="pb-5">
          <h2 className="text-xl font-bold">Today Overview</h2>
          <p className="text-small text-gray-400">
            Last Update at :{" "}
            {new Date(result.current_weather.time).toLocaleString()}(
            {result.timezone})
          </p>
        </div>
        <div className="mb-10 m-2">
          {/* call out card */}
          <CallOutCard massage="Here is Todays Weather info" />
        </div>
        <div className="grid grid-col-1 xl:grid-cols-2 gap-5 m-2">
          <StateCard
            title="Maxmum Temperature"
            matrics={` ${result.daily.temperature_2m_max[0].toFixed(1)} °C`}
            color="yellow"
          />
          <StateCard
            title="Minmum Temperature"
            matrics={` ${result.daily.temperature_2m_min[0].toFixed(1)} °C`}
            color="purple"
          />
          <div>
            <StateCard
              title="UV Index"
              matrics={` ${result.daily.uv_index_max[0].toFixed(1)}`}
              color="rose"
            />
           
            { 
            Number(result.daily.uv_index_max[0].toFixed(1)) > 5 && (
              <div className="mb-10 m-2">
                <CallOutCard
                  massage="The UV is High Be Safe , Be Shure To Wear SPR!"
                  warning
                />
              </div>
            )}
          </div>
          <div className="flex space-x-3">
            <StateCard
              title="Wind Speed"
              matrics={` ${result.current_weather.windspeed} m/s`}
              color="cyan"
            />
            <StateCard
              title="Wind Direction"
              matrics={` ${result.current_weather.winddirection.toFixed(1)} °`}
              color="red"
            />
          </div>
        </div>
        <hr className="mb-5 " />
      <div className="space-y-3">
        {/* temp cart */}
        <TempChart
        result={result}
        />

        {/* rain chart */}
        <RainChart
        result={result} />
        {/* humiditi chart */}
        <HumadityChart 
        result={result}
        />
      </div>
      </div>
    
    </div>
  );
}

export default weatherPage;
