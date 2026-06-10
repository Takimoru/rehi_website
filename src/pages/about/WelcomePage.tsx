import aboutImage from "../../assets/RATTAN1.jpg";

export function WelcomePage(){
    return(
        <section className="relative mb-10 h-130 overflow-hidden rounded-2xl shadow-lg animate-image-reveal animation-delay-150">
          <img
            src={aboutImage}
            alt="REHI about photos"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/60 to-primary/10" />

          <div className="absolute inset-x-0 top-0 z-10 sm:px-11 sm:pt-10 lg:px-64 lg:pt-32 ">
            <div className="max-w-3xl text-primary-foreground text-center">

              <h1 className="mb-3 font-bold leading-tight text-sm">
                OUR STORY
              </h1>

              <p className="text-5xl font-semibold uppercase text-secondary font-noto-serif tracking-wide sm:px-11 sm:pt-9 lg:px-10 lg:pt-1">
               BORN IN CIREBON
               BUILD FOR THE WORLD
              </p>

              <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/90 sm:text-lg sm:leading-8">
                REHI connects international buyers with high-quality rattan
                products, handcrafted by skilled Indonesian artisans and
                supported by a reliable production network.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-primary-foreground/75 sm:text-base sm:leading-7">
                Inspired by Indonesia’s long tradition of craftsmanship, REHI
                preserves and promotes Indonesian rattan for modern homes,
                hospitality spaces, offices, villas, and commercial interiors
                around the world.
              </p>
            </div>
          </div>
        </section>
    );
}