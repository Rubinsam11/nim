import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cpu, Shield, Cloud, Wifi, Network, Smartphone, Package, Palette, Globe, Server } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "DATA AND AI",
      description: "Empower your business with AI and analytics solutions that turn raw data into actionable insights, smarter decisions, and automation.",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "CYBER SECURITY",
      description: "Protect your digital assets with advanced cybersecurity services including risk assessment, penetration testing, and real-time monitoring.",
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "CLOUD SERVICES",
      description: "Leverage scalable and secure cloud solutions. Cloud migration, integration, and maintenance services for flexibility and collaboration.",
    },
    {
      icon: <Wifi className="w-12 h-12" />,
      title: "IOT SOLUTIONS",
      description: "Connect the physical and digital worlds with IoT innovations. Smart solutions for automation, monitoring, and efficiency across industries.",
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: "NETWORKING",
      description: "Reliable IT infrastructures. Design, implementation, and management of networks for uninterrupted connectivity and optimized performance.",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "APPLICATION DEVELOPMENT",
      description: "High-performing mobile and web applications tailored to your business needs, combining functionality with elegant design and smooth usability.",
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "PRODUCT DEVELOPMENT",
      description: "Full-cycle product development from research, prototyping to deployment and scaling. Innovation, reliability, and market readiness guaranteed.",
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI / UX DESIGN",
      description: "We design user-centered interfaces that blend creativity with functionality. Intuitive, visually engaging, and responsive experiences.",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "WEB DEVELOPMENT",
      description: "Dynamic, secure, high-performing websites with seamless integration, fast load times, and scalable architecture.",
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "WEB HOSTING",
      description: "Fast, reliable, secure hosting solutions with optimized uptime, robust security, and 24/7 support to keep your digital presence always online.",
    },
  ];

  const reasons = [
    "Custom strategies and designs specific to your vision",
    "Matching your company's need with the end-user experience",
    "Expert team of developers with over 5 years of experience",
    "Quality deliverables meeting deadlines way ahead of schedule",
    "Pay only for what we work, no setup fees",
    "Frequent supervision by technical leads to achieving perfection",
    "Project is backed by a 100% money-back guarantee",
    "Project management tools in use for extra transparency",
    "Client service at its best and we're here to hear you anytime",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nim Technologies Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Providing end-to-end digital, development, and IT solutions that transform your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-foreground">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-card text-card-foreground rounded-lg border-2 border-border hover:border-primary transition-all"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-6xl font-bold text-primary mb-2">15+</div>
              <div className="text-xl text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-6xl font-bold text-primary mb-2">5+</div>
              <div className="text-xl text-muted-foreground">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-primary">
            Technology Stack to cover all your needs
          </h2>
          <p className="text-center text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Being a leading web development company, we cover all advanced technologies to meet the
            diverse demands of customers in minimal time and deliver modern, scalable solutions.
            With a team of expert professionals and top-tier tools, we've got you covered.
          </p>
        </div>
      </section>

      {/* Why Nim Technologies */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Why Nim Technologies?</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-accent text-xl mt-1">✓</span>
                  <p className="text-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Discover your Business potential
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Growth is uncomfortable — but with the right investments and expert people on board, you
            can transform challenges into lasting success.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
