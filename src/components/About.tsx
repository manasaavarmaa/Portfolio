import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const About = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Manasa_Resume.pdf";
    link.download = "MANASA.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              I am a final-year B.Tech student specializing in Computer Science and Engineering, with
              a focus on Artificial Intelligence and Machine Learning. I have gained hands-on experience
              through academic projects and internships in areas such as machine learning, full-stack development,
              and data analysis. I am passionate about building scalable AI solutions and intuitive web applications.
              Actively involved in technical communities and study jams, I continuously seek to expand my knowledge
              and contribute to impactful tech initiatives.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>

            {/* Stats Boxes */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Internship Experience</div>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="pt-4">
              <Button
                variant="ghost"
                onClick={downloadResume}
                className="hover:scale-110 transition-all duration-200 text-white hover:bg-white/10 border border-white/20 flex items-center gap-2 px-4 py-2"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-full mx-auto flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                <img
                  src="/me.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
