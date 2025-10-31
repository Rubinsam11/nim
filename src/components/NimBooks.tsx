import { Button } from "@/components/ui/button";
import nimbooksImg from "@/assets/nimbooks-desktop.jpg";

const NimBooks = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-primary">
              NimBooks – Smart accounting, simplified for every business.
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              NimBooks is more than accounting software—it's a business growth partner. By turning
              numbers into clear insights, it transforms invoices, expenses, and reports into a
              bigger picture: your business journey. With NimBooks, accounting becomes a story of
              clarity, progress, and smarter decisions.
            </p>
            <Button variant="default" size="lg">
              Access NimBooks →
            </Button>
          </div>
          <div>
            <img
              src={nimbooksImg}
              alt="NimBooks Dashboard"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NimBooks;
