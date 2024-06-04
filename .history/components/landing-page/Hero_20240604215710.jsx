import { ChevronRight } from "lucide-react";
import { HeroCards } from "./HeroCards";
import { Button, buttonVariants } from "@/components/ui/button";

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
          Built using Nextjs, Tailwind CSS.
        </p>

        <div className="">
          <Button
            type="button"
            className={buttonVariants({ variant: "primary" })}
          >
            
            Get Started
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
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
