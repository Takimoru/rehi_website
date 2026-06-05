import { AboutCard } from "./AboutCard";
import aboutImage from "../../assets/RATTAN1.jpg";

// This component is the actual About page content.
export function AboutPage() {
  return (
    <>
      <main className="container mx-auto px-6 py-16">
        <section className="relative mb-10 h-130 overflow-hidden rounded-2xl shadow-lg animate-image-reveal animation-delay-150">
          <img
            src={aboutImage}
            alt="REHI about photos"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/45 to-black/10" />

          <div className="absolute inset-x-0 top-0 z-10 px-6 pt-8 sm:px-10 sm:pt-10 lg:px-14 lg:pt-14">
            <div className="max-w-3xl text-white">

              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                About REHI
              </h1>

              <p className="mb-3 text-sm font-semibold uppercase text-[#f2d58f]">
                Rattan Export House Indonesia
              </p>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                REHI connects international buyers with high-quality rattan
                products, handcrafted by skilled Indonesian artisans and
                supported by a reliable production network.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                Inspired by Indonesia’s long tradition of craftsmanship, REHI
                preserves and promotes Indonesian rattan for modern homes,
                hospitality spaces, offices, villas, and commercial interiors
                around the world.
              </p>
            </div>
          </div>
        </section>

        <AboutCard />
      </main>
    </>
  );
}
   
