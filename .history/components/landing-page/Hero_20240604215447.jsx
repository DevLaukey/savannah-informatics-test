import { HeroCards } from "./HeroCards";
import { buttonVariants } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center md:text-left space-y-6">
        <main className="text-3xl md:text-5xl font-bold">
          <h1 className="inline-block">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              A-Lib
            </span>
            An 
          </h1>
          Album
          <h2 className="inline-block">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              and User
            </span>
            Management System
          </h2>
        </main>

        <p className="text-lg text-muted-foreground md:w-10/12 mx-auto">
          An All in One Entry and Exit Management Solution
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <button
            type="button"
            className={`flex items-center justify-center w-full md:w-auto mt-3 text-white bg-black rounded-lg h-14 md:h-16 px-6 ${buttonVariants(
              {
                variant: "outline",
              }
            )}`}
          >
            <div className="mr-3">
              <svg viewBox="30 336.7 120.9 129.2" width="30">
                <path
                  fill="#FFD400"
                  d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                ></path>
                <path
                  fill="#FF3333"
                  d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                ></path>
                <path
                  fill="#48FF48"
                  d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                ></path>
                <path
                  fill="#3BCCFF"
                  d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                ></path>
              </svg>
            </div>
            <div>
              <div className="text-xs">GET IT ON</div>
              <div className="-mt-1 font-sans text-base md:text-xl font-semibold">
                Google Play
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};

export default Hero;
