import { AboutVisiCard } from "./VisiMisiCard";
import { AboutMisiCard } from "./VisiMisiCard";
import { WelcomePage } from "./WelcomePage"; 


// This component is the actual About page content.
export function AboutPage() {
  return (
    <>
      <main className="container mx-auto px-6 py-16">

        <WelcomePage />
        <div className="mb-10 h-full max-w-3xls grid grid-cols-2 gap-4 " >
        <AboutVisiCard />
        <AboutMisiCard />
        </div>
      </main>
    </>
  );
}
   
