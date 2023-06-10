"use client";
// using this because tremor 2.0 is not updated yet for sirver site rendring
import Image from "next/image";
import { Card, Text, Subtitle, Divider } from "@tremor/react";
import CityPicker from "@/components/CityPicker";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center items-center">
      <Card  className="max-w-4xl max-auto">
        <Text className="text-6xl text-center mb-10 font-bold">
          Weather Info By AI
        </Text>
        <Subtitle className="text-xl text-center">
          Powered By Open AI, Next Js 13.4 , Tailwind Css , Termor 2.0 + More!
        </Subtitle>
        <Divider className="my-10" />
        <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
          {/* city picker component */}
          <CityPicker />
          
        </Card>
      </Card>
      
    </div>
  );
}
