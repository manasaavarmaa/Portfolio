import { Award, Briefcase, Calendar, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Experience = () => {
  const experiences = [
    {
      company: "Nuclear Fuel Complex (DAE, Govt. of India)",
      role: "Student Trainee – Computer Division",
      period: "Dec 2025 – Jan 2026",
      description:
        "Assisted in secure documentation, technical analysis, and workflow support within the Computer Division. Collaborated with technical officers on requirement analysis, structured problem-solving, and implementation activities.",
    },
    {
      company: "Viswam.AI",
      role: "AI Developer Intern",
      period: "May 2025 – Jul 2025",
      description:
        "Led technical initiatives as Tech Lead, contributing to AI feature development, model experimentation, testing, optimization, and AI workflow design while collaborating with cross-functional teams.",
    },
    {
      company: "CodeClause Pvt. Ltd.",
      role: "Data Science Intern",
      period: "Jun 2025 – Jul 2025",
      description:
        "Worked on data preprocessing, exploratory data analysis, visualization, and machine learning workflows using Python to derive meaningful insights and support data-driven decision-making.",
    },
    {
      company: "EY GDS",
      role: "Software Development Intern",
      period: "Feb 2025 – Mar 2025",
      description:
        "Developed scalable applications, optimized backend APIs, and enhanced application performance while improving overall user experience through full-stack development practices.",
    },
    {
      company: "AICTE EduSkills × Google for Developers",
      role: "Android Developer Virtual Intern",
      period: "Jul 2024 – Sep 2024",
      description:
        "Completed a virtual internship focused on Android application development, mobile UI design, Android fundamentals, and software engineering best practices.",
    },
  ];

  const achievements = [
    "Winner – Google Developer Group Gen AI Study Jams",
    "Appointed Tech Lead for AI Solutions in Low-Resource Telugu Language Modeling",
    "Presented AI-Driven Project at a National-Level Project Expo",
    "Selected for a National-Level AI Internship Focused on NLP and Emerging AI Technologies",  
    "Finalist – Innovation & Entrepreneurship Summit",
    "Led 5+ Technical Workshops as a Microsoft Learn Student Ambassador",
    "Completed NPTEL Certifications in Deep Learning & Java Programming",
    "Earned 60+ Microsoft Learn Badges",
    "Earned 15+ Google Cloud Skills Boost Badges",
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-background transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-4"></div>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional experiences, leadership roles, internships, and
            achievements that have shaped my journey in Artificial Intelligence,
            Machine Learning, Data Science, and Software Development.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <Briefcase className="h-7 w-7 text-primary" />
            <h3 className="text-3xl font-bold">Professional Experience</h3>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                      {exp.company}
                    </span>

                    <h4 className="text-2xl font-bold italic">
                      {exp.role}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-muted">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="mt-5 text-muted-foreground leading-relaxed">
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
            <h3 className="text-3xl font-bold">Key Achievements</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Award className="h-5 w-5 text-primary mb-3" />

                <p className="font-medium leading-relaxed">
                  {achievement}
                </p>
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

