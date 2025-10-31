const WhyChooseUs = () => {
  const reasons = [
    {
      number: "01",
      title: "Result-Oriented Approach",
      description: "We focus on measurable outcomes to ensure every digital initiative contributes to tangible business growth.",
    },
    {
      number: "02",
      title: "Cutting-Edge Innovation",
      description: "Our team leverages the latest technologies to create forward-thinking solutions tailored for your brand.",
    },
    {
      number: "03",
      title: "AI-Powered Strategies",
      description: "Artificial Intelligence helps us analyze data faster and optimize your campaigns for maximum efficiency.",
    },
    {
      number: "04",
      title: "Real-Time Analytics",
      description: "Monitor performance with up-to-the-minute data insights to make informed business decisions instantly.",
    },
    {
      number: "05",
      title: "End-to-End Support",
      description: "From planning to execution, we provide full support across development, marketing, and post-launch optimization.",
    },
    {
      number: "06",
      title: "Proven Industry Expertise",
      description: "Our team has years of experience delivering scalable solutions across multiple B2B and B2C industries.",
    },
    {
      number: "07",
      title: "Dedicated Customer Success",
      description: "Your goals become ours. We ensure continuous guidance, training, and assistance for seamless operations.",
    },
    {
      number: "08",
      title: "Comprehensive Digital Solutions",
      description: "We combine strategy, technology, and creativity to offer holistic solutions for all your digital needs.",
    },
    {
      number: "09",
      title: "Sustainable Growth Focus",
      description: "Every project is designed with long-term impact in mind, helping businesses scale sustainably and profitably.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-muted-foreground mb-4">Why Choose Us?</h3>
          <h2 className="text-4xl font-bold text-primary max-w-4xl mx-auto">
            We empower your business through innovative digital solutions and measurable growth strategies
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="p-6 border-l-4 border-primary bg-secondary">
              <div className="text-4xl font-bold text-accent mb-4">{reason.number}</div>
              <h3 className="text-xl font-bold mb-3 text-primary">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
