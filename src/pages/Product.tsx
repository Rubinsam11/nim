import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import nimbooksImg from "@/assets/nimbooks-desktop.jpg";
import { CheckCircle } from "lucide-react";

const Product = () => {
  const productFeatures = [
    "Retailers & Wholesalers – Manage daily sales, track stock, and generate instant GST-ready invoices.",
    "Manufacturers – Simplify purchase orders, production costing, and supplier payments.",
    "Distributors & Dealers – Handle multi-location sales, credit limits, and cash flow tracking effortlessly.",
    "E-commerce & Traders – Sync online orders, manage payments, and track profits in real time.",
  ];

  const serviceFeatures = [
    "Consultants & Agencies – Bill clients across geographies with customizable invoices and multi-currency support.",
    "IT & SaaS Companies – Track subscriptions, recurring invoices, and global compliance in one place.",
    "Freelancers & Professionals – Manage projects, expenses, and tax filings with ease.",
    "Healthcare, Education & Hospitality – Automate payments, manage expenses, and maintain transparent financials.",
  ];

  const bridgeFeatures = [
    "Centralized accounting",
    "Insightful analytics",
    "Compliance confidence",
    "Secure scalability",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-accent">Comprehensive</span> accounting software for growing businesses
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Send invoices, generate 1099 reports, and manage expenses, projects, & inventory. Simplify
            sales tax management with Nim Books.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" className="rounded-full">
              Access Nim Books
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Request a demo
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Image */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto">
          <img
            src={nimbooksImg}
            alt="NimBooks Dashboard"
            className="rounded-lg shadow-2xl w-full max-w-5xl mx-auto"
          />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary">
            Trusted by businesses and accountants worldwide
          </h2>
          <div className="bg-background p-8 rounded-lg shadow-lg">
            <p className="text-xl italic mb-6 text-foreground">
              "Nim Books streamlined what QuickBooks couldn't, saving us hours. Now we are able to
              manage our financial structure better."
            </p>
            <div className="text-primary font-bold">Suruthi</div>
            <div className="text-muted-foreground">CEO & Founder, Nim Books</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent mb-4">USER FAVORITES</p>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Features that your accounting software must have!
            </h2>
            <p className="text-xl text-muted-foreground">
              "Smart Accounting for Smarter Businesses."
            </p>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Nim Books is a modern accounting solution crafted for businesses worldwide. Manage your
              finances effortlessly with a software.
            </p>
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Designed for Every Business. Perfected for Yours.
          </h2>
          <p className="text-center mb-16 text-lg">
            No matter your sector, Nim Books adapts to your workflows and scales with your growth —
            making finance simpler, smarter, and globally compliant.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">For Product-Based Businesses</h3>
              <ul className="space-y-4">
                {productFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">For Service-Based Businesses</h3>
              <ul className="space-y-4">
                {serviceFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-primary-foreground/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Built to Bridge Both Worlds</h3>
            <p className="text-center mb-6">
              Whether you sell products or deliver services, Nim Books gives you:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bridgeFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <CheckCircle className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="font-semibold">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
