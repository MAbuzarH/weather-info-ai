// City.getCitiesOfCountry(selectedCountry.value.icoCode)?.map(city=>(
//   {
//   value:{
//     latitude:city.latitude!,
//     longitude:city.longitude!,
//     countryCode:city.countryCode,
//     name:city.name,
  
//     stateCode:city.stateCode
   
// },
// label :city.name
// }
// ))??[]

"use client"
import React, { useState } from 'react'
import { Country , City , State} from 'country-state-city'
//used country state  to get information of country
import Select from 'react-select'
//in Next 13 we us navigation insterd of router
import { useRouter } from 'next/navigation';
import {GlobeIcon } from "@heroicons/react/solid";

//used react select to select country
type options={
  value:{
    latitude:string,
    longitude:string,
    icoCode:string,
   
},
label :string
}| null;
type cityOptions={
  value:{
    latitude:string ,
    longitude:string,
    icoCode:string,
    name:string
   
},
label :string
}| null;

const options = Country.getAllCountries().map(country =>({
    value:{
        latitude:country.latitude,
        longitude:country.longitude,
        icoCode:country.isoCode,
       
    },
    label :country.name
}));





function CityPicker() {
  const [selectedCountry, setSelectedCountry] = useState<options>(null); 
  const [selectedCity, setSelectedCity] = useState<cityOptions>(null);
  const router=useRouter();

  const  handelSelectedCountry =(option:options)=>{
      setSelectedCountry(option);
      setSelectedCity(null);
      
  };

  const handleSelectedCity =(option:cityOptions)=>{
      setSelectedCity(option);
      router.push(`/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`)
  };  
  const cityOptions = selectedCountry
  ? City.getCitiesOfCountry(selectedCountry?.value.icoCode || "")?.map((city) => ({
      value: {
        latitude: city.latitude!,
        longitude: city.longitude!,
        icoCode: city.countryCode,
        countryCode: city.countryCode,
        name: city.name,
        stateCode: city.stateCode,
      },
      label: city.name,
    }))||[]
  : [];

  return (
    <div className='space-y-4'>
      <div className='space-y-2'>
      <div className='flex items-center  space-x-2 text-white/80'>
      <GlobeIcon className='h-5 w-5 text-white' />
        <label htmlFor="country">
        
          Country</label>
      </div>
        <Select 
        className='text-black'
        value={selectedCountry}
        onChange={handelSelectedCountry}
        options={options} />
    </div>
    {selectedCountry &&
    <div className='space-y-2'>
      <div className='flex items-center  space-x-2 text-white/80'>
      <GlobeIcon className='h-5 w-5 text-white' />
        <label htmlFor="city">
        
          City</label>
      </div>
        <Select 
        className='text-black'
        value={selectedCity}
        onChange={handleSelectedCity}
        options={cityOptions} />
    </div> 
    }
    
    </div>
  )

}

export default CityPicker