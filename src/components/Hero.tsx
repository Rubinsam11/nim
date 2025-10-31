import { Button } from "@/components/ui/button";
import knightImage from "@/assets/knight-illustration.png";

const Hero = () => {
  return (
    <section className="bg-primary text-primary-foreground pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold mb-4 tracking-wider">DRIVING INNOVATIONS</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Providing your <span className="text-accent">business</span> with the best of digital{" "}
              <span className="text-accent">solutions.</span>
              <br />
              The Knights, Code Of Service
            </h1>
            <Button variant="hero" size="lg" className="rounded-full">
              Explore Services
            </Button>
          </div>
          <div className="flex justify-center">
            <img
              src={knightImage}
              alt="Knight Illustration"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
