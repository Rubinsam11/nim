import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import dataAnalysisImg from "@/assets/data-analysis.jpg";
import webDevImg from "@/assets/web-development.jpg";
import cyberSecurityImg from "@/assets/cybersecurity.jpg";

const Services = () => {
  const services = [
    {
      title: "Data Analysis",
      description:
        "Unlock actionable insights from your data through advanced analytics, visualization, and machine learning tools. We help transform raw data into strategic intelligence that drives business success.",
      image: dataAnalysisImg,
    },
    {
      title: "Web Development",
      description:
        "We craft modern, responsive, and high-performance websites tailored to your business needs using Django, React, and the latest web technologies. Our focus is on seamless performance and elegant design.",
      image: webDevImg,
    },
    {
      title: "Cybersecurity",
      description:
        "We provide comprehensive cybersecurity solutions to protect your digital assets from threats and vulnerabilities. Our services include risk assessment, threat detection, and incident response to ensure your business stays secure.",
      image: cyberSecurityImg,
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:shadow-lg transition-shadow">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <Button variant="link" className="p-0">
                  Explore →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
