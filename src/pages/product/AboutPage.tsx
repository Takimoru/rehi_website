import { ProductCard } from "./AboutCard";
import aboutImage from "../../assets/RATTAN1.jpg";

// This component is the actual About page content.
export function ProductPage() {
  return (
  <>
   <main className="container mx-auto px-6 py-16">
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-4">About REHI</h1>
      <p className="text-lg text-gray-700">
        REHI (Real Estate Health Index) is a comprehensive tool designed to provide insights into the health of the real estate market. Our mission is to empower investors, homeowners, and industry professionals with data-driven analysis and actionable insights to make informed decisions in the ever-evolving real estate landscape.
      </p>  
    </div>
    <div className="mb-8 h-137.5 overflow-hidden rounded-2xl shadow-lg animate-image-reveal animation-delay-150">
      <img 
        src={aboutImage}
        alt="REHI about photos" 
        className="w-full h-137.5 object-cover object-center "/> \\animate-[fadeInUp_0.3s_ease-in_both]\\
    </div>
    <ProductCard />
    </main>
  </>
  );
}
