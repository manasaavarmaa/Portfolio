import { Award, Briefcase, Calendar, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Experience = () => {
  const experiences = [
    {
      role: "Student Trainee - Computer Division",
      company: "Nuclear Fuel Complex (DAE, Govt. of India)",
      period: "Dec 2025 - Jan 2026",
      description:
        "Assisted in secure documentation, technical analysis, and workflow support within the Computer Division while collaborating with technical officers on requirement analysis and implementation activities.",
    },
    {
      role: "AI Developer Intern",
      company: "Viswam.AI",
      period: "May 2025 - Jul 2025",
      description:
        "Led technical development initiatives as Tech Lead, contributing to AI feature development, model experimentation, testing, optimization, and AI workflow design.",
    },
    {
      role: "Data Science Intern",
      company: "CodeClause Pvt. Ltd.",
      period: "Jun 2025 - Jul 2025",
      description:
        "Worked on data preprocessing, exploratory data analysis, visualization, and machine learning workflows using Python to derive meaningful insights from data.",
    },
    {
      role: "Software Development Intern",
      company: "EY GDS",
      period: "Feb 2025 - Mar 2025",
      description:
        "Developed scalable applications, optimized backend APIs, and improved overall application performance and user experience.",
    },
    {
      role: "Android Developer Virtual Intern",
      company: "AICTE EduSkills × Google for Developers",
      period: "Jul 2024 - Sep 2024",
      description:
        "Completed a 10-week virtual internship focused on Android application development, mobile UI design, and software engineering best practices.",
    },
  ];

  const achievements = [
    "Winner - Google Developer Group Gen AI Study Jams",
    "Tech Lead for AI Solutions in Low-Resource Telugu Language Modeling",
    "Presented AI Project at National-Level Project Expo",
    "Finalist - Innovation & Entrepreneurship Summit",
    "Led 5+ Technical Workshops as Microsoft Learn Student Ambassador",
    "Completed NPTEL Certifications (Deep Learning & Java Programming)",
    "Earned 60+ Microsoft Learn Badges",
    "Earned 15+ Google Cloud Skills Boost Badges",
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-background transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Professional Experience & Highlights
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-4"></div>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A journey of internships, leadership experiences, technical
            achievements, and continuous learning in AI, Machine Learning,
            Data Science, and Software Development.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <Briefcase className="h-7 w-7 text-primary" />
            <h3 className="text-3xl font-bold">
              Experience
            </h3>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group border border-border bg-card rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h4 className="text-xl font-semibold mb-1">
                      {exp.role}
                    </h4>

                    <p className="text-primary font-medium">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {exp.period}
                  </div>
                </div>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <Award className="h-7 w-7 text-primary" />
            <h3 className="text-3xl font-bold">
              Key Achievements
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-primary mt-1" />
                  <p className="font-medium leading-relaxed">
                    {achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LinkedIn CTA */}
        <div className="text-center mt-16">
          <a
            href="https://www.linkedin.com/in/smanasavarma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">
              <Linkedin className="mr-2 h-5 w-5" />
              Explore More on LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
