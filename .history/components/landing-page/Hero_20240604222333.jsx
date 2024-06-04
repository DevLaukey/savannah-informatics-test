const Hero = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden py-2 lg:py-6">
        <div className="container">
          <div className="max-w-2xl text-center mx-auto">
            <main className="text-3xl md:text-5xl font-bold">
              <h1 className="inline-block">
                <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
                  A-Lib
                </span>
                An
              </h1>
              Album and
              <h2 className="inline-block">
                <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                  User Management
                </span>
                System
              </h2>
            </main>

            <p className="mt-3 text-xl text-muted-foreground">
              Application is developed using Nextjs and Tailwind CSS
            </p>
          </div>
          <div className="mt-10 relative max-w-5xl mx-auto">
            <img
              src="https://placehold.co/1024x480"
              className="rounded-xl"
              alt="Image Description"
            />
            <div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-primary-foreground via-primary-foreground to-background p-px rounded-lg">
              <div className="w-48 h-48 rounded-lg bg-background/10" />
            </div>
            <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full">
              <div className="w-48 h-48 rounded-full bg-background/10" />
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
};

export default Hero;
