// you with the latest weather updates. Starting with the current temperature, it is [temperature] degrees Celsius. We can expect [weather condition] throughout the day.There is a [percentage] chance of precipitation.The wind speed is [wind speed] kilometers per hour.Humidity levels are [humidity level] percent. Visibility is [visibility distance] kilometers. Stay prepared for any weather changes and dress accordingly.Thats all for todays weather news. Stay tuned for more updates.
import openai from "../../../../openai";
import { NextRequest,NextResponse } from "next/server";

export async function POST(request:NextRequest){
const { weatherData } = await request.json();
const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature:0.7,
    n:1,
    stream:false,
    messages:[
        {
            role:'system',
            content:`Welcome to our weather news segment. Today, well be providing the weather information`
        },
        {
            role:'user',
            content:`Hi There! can I Get Summar of Todays Weather ${JSON.stringify(weatherData)}`,
        }
    ]
}) 
const {data} = response;

return (NextResponse.json(data.choices[0].message));

  
}





