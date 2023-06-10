import { SunIcon } from "@heroicons/react/solid";
function loading() {
  return <div className="min-h-screen flex items-center justify-center flex-col text-slate-500 bg-gradient-to-br from-[#394F68] to-[#183B7E]">
    <SunIcon 
    className="h-24 w-24 animate-bounce text-yellow-500"
    color="yellow"/>
    <h1 className="text-6xl text-center mb-10 animate-pulse">Loading City Weather Information</h1>
    <h1 className="text-xl font-bold text-center mb-10 animate-pulse">Hold on! Geting Weather Information And Generating Summary From Chat GPT</h1>
  </div>;
}

export default loading;
