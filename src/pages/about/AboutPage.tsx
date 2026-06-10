import { AboutVisiCard } from "./VisiMisiCard";
import { AboutMisiCard } from "./VisiMisiCard";
import { WelcomePage } from "./WelcomePage"; 


// This component is the actual About page content.
export function AboutPage() {
  return (
    <>
      <main>
        <WelcomePage />
      <div className="relative text-center ">
          <p className="text-5xl font-semibold uppercase text-primary font-noto-serif tracking-wide sm:px-11 sm:pt-9 lg:px-10 lg:pt-1">
            WHAT DRIVE US
          </p>
          <p className="mt-2 mx-auto max-w-2xl text-2xl leading-tight text-primary/90 sm:text-3xl lg:text-3xl font-dancing-script">
            VISION & MISSION
          </p>
      </div> 
        <div className="relative mb-9 inset-x-0 top-0 z-10 sm:px-110 sm:pt-9 lg:px-39 lg:pt-10 grid grid-cols-2 gap-4 " >
        <AboutVisiCard />
        <AboutMisiCard />
        </div>
      </main>
    </>
  );
}
   
