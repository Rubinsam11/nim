const Testimonial = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          What Our Clients Are Saying
        </h2>
        <div className="bg-background p-8 md:p-12 rounded-lg shadow-lg border-l-4 border-primary">
          <div className="text-accent text-6xl mb-4">"</div>
          <p className="text-lg md:text-xl mb-8 text-foreground leading-relaxed italic">
            Working with Nim Technologies has transformed our digital presence. Their innovative
            solutions and data-driven strategies helped us double our leads within 6 months. Truly a
            game-changer for our business.
          </p>
          <div>
            <div className="font-bold text-primary text-lg">Emma Johnson</div>
            <div className="text-muted-foreground">CEO, BrightWave Solutions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
