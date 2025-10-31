import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";

const Careers = () => {
  const jobs = [
    {
      title: "Business Development Executive (BDE)",
      department: "Sales / Business Development",
      location: "Nagercoil, TamilNadu",
      posted: "Posted 23-Oct-2025",
      qualifications: "Bachelor's degree in Business Administration, Marketing, or a related field.",
      experience: "(1–3 years) in sales, business development, or a similar role.",
      skills: "Excellent communication, negotiation, and interpersonal skills.",
    },
    {
      title: "Customer Relationship Officer (CRO)",
      department: "Student Services / Customer",
      location: "Nagercoil, TamilNadu",
      posted: "Posted 23-Oct-2025",
      qualifications: "Bachelor's degree in Business, Information Technology, Education, or a related field preferred.",
      experience: "(1-3 years) in customer service, student relations, or client management, ideally in education or IT training.",
      skills: "Strong communication and interpersonal skills with a friendly and professional demeanor.",
    },
    {
      title: "Junior Python Full-Stack Developer",
      department: "Software Development",
      location: "Nagercoil, TamilNadu",
      posted: "Posted 29-Oct-2025",
      qualifications: "Bachelor's degree in Computer Science, Information Technology, Software Engineering, or a related field.",
      experience: "(1-2 years)",
      skills: "Develop, test, and maintain clean and efficient code using Python Django, Flask, or FastAPI",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Smarter Takes You</h1>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8">
            <p className="text-muted-foreground">Showing 1-{jobs.length} of {jobs.length} jobs</p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-primary mb-2">{job.title}</h2>
                      <p className="text-muted-foreground mb-2">{job.department}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {job.posted}
                        </div>
                      </div>
                    </div>
                    <Button variant="default">APPLY</Button>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-bold text-foreground">Qualifications:</span>{" "}
                      <span className="text-muted-foreground">{job.qualifications}</span>
                    </div>
                    <div>
                      <span className="font-bold text-foreground">Experience:</span>{" "}
                      <span className="text-muted-foreground">{job.experience}</span>
                    </div>
                    <div>
                      <span className="font-bold text-foreground">Skills:</span>{" "}
                      <span className="text-muted-foreground">{job.skills}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
