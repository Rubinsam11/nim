import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const NimAcademy = () => {
  const features = [
    "Hands-On Learning",
    "Expert Mentorship",
    "Career-Ready Skills",
    "Certification Pathways",
  ];

  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold mb-4 tracking-wider">Nim Academy</h3>
          <h2 className="text-4xl font-bold mb-6">Master IT Skills, Build Your Future With Nim Academy</h2>
          <p className="max-w-3xl mx-auto text-primary-foreground/90 leading-relaxed">
            Nim Academy is your gateway to mastering IT skills and building a successful future. We
            provide comprehensive, hands-on training in programming, web and app development, and
            modern technologies guided by industry experts. Our courses are designed to equip you
            with practical knowledge, real-world experience, and certifications that make you
            career-ready.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Built to Bridge Both Worlds</h3>
          <p className="text-center mb-8 text-primary-foreground/90">
            Whether you sell products or deliver services, Nim Books gives you:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="hero" size="lg" className="rounded-full">
              Get Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NimAcademy;
