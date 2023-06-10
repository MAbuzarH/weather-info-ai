import { Country, City, State } from "country-state-city";
import Image from "next/image";
import CityPicker from "./CityPicker";
import { MoonIcon, SunIcon, CloudIcon } from "@heroicons/react/solid";
import WeatherCodeToString from "../../lib/WeatherCodeToS";

type Props = {
  city: string;
  lat: number;
  long: number;
  result: Root;
};

function InformationPanal({ city, lat, long, result }: Props) {
  return (
    <div className="bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 text-white">
      <div className="pb-5">
        <h1 className="text-5xl font-bold text-white pb-2">{decodeURI(city)}</h1>
        <p className="text-xs text-gray-100">
          Long/Lat : {long},{lat}
        </p>
      </div>
      <CityPicker />
      <hr className="my-10" />
      <div className="mt-5 flex items-center justify-between space-x-10 mb-5">
        <div>
          <p className="text-xl">
            {new Date().toLocaleString("en-GB", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="font-extralight">
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>
        <div>
          <p className="text-xl font-bold uppercase">
            {new Date().toLocaleString("en-GB", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </p>
        </div>
      </div>
      <hr className="my-10" />
      <div className="flex items-center justify-between">
        <div>
          {/* img */}
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${
              WeatherCodeToString[result.current_weather.weathercode].icon
            }.png`}
            alt={WeatherCodeToString[result.current_weather.weathercode].label}
            width={75}
            height={75}
          />
          <div className="flex items-center justify-between space-x-10">
            <p className="text-5xl text-semibold">
              {result.current_weather.temperature.toFixed(1)} °C
            </p>
            <p className="font-extralight text-right text-lg">
              {" "}
              {
                WeatherCodeToString[result.current_weather.weathercode].label
              }{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-2 py-5">
        <div className="flex items-center space-x-2 px-4 py-3 border  rounded-md border-[#6F90CD] bg-[#405885]">
          <SunIcon className="h-10 w-10 text-gray-400" />
          <div className="flex flex-1 items-center justify-between">
            <p className="font-extralight">Sunrise</p>
            <p className="uppercase text-2xl">
              {new Date(result.daily.sunrise[0]).toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 px-4 py-3 border  rounded-md border-[#6F90CD] bg-[#405885]">
          <MoonIcon className="h-10 w-10 text-gray-400" />
          <div className="flex flex-1 items-center justify-between">
            <p className="font-extralight">Sunset</p>
            <p className="uppercase text-2xl">
              {new Date(result.daily.sunset[0]).toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationPanal;
