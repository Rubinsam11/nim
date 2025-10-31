const Stats = () => {
  const stats = [
    { number: "100+", label: "Successful Projects" },
    { number: "100+", label: "Custom Applications" },
    { number: "20+", label: "Business Partnerships" },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-muted-foreground mb-4">About Us</h3>
          <h2 className="text-3xl font-bold text-primary max-w-3xl mx-auto">
            Our values make us who we are and why we stand successful in business for over five
            years now.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-secondary rounded-lg">
              <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
