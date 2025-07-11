import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'Crop Disease Detection',
      description: 'A modern web app that detects crop diseases from leaf images using a machine learning model, built with a fast frontend using Vite, Tailwind CSS, and TypeScript.',
      tech: ['Vite', 'Tailwind CSS', 'TypeScript', 'HTML', 'CSS', 'JavaScript'],
      gradient: 'from-blue-600 to-purple-600',
      code: 'https://github.com/manasaavarmaa/Crop_Disease_Identification',
      live: 'https://crop-disease-identification.vercel.pp/'
    },
    {
      title: 'Parkinson\'s Disease Detection',
      description: 'A modern web app built that predicts Parkinson’s disease from voice data using a machine learning model, featuring a fast frontend with Vite, Tailwind CSS, and TypeScript.',
      tech: ['Vite', 'Tailwind CSS', 'TypeScript','HTML', 'CSS', 'JavaScript'],
      gradient: 'from-green-600 to-blue-600',
      code: 'https://github.com/manasaavarmaa/Parkinson-s-Disease-Detection',
      live: 'https://parkinson-s-disease-detection-alpha.vercel.app/'
    },
    {
      title: 'Food Delivery App',
      description: 'A full-stack food delivery application with user authentication, restaurant listings, order management, and real-time tracking.',
      tech: ['React', 'Node.js', 'Express', 'HTML', 'CSS', 'JavaScript'],
      gradient: 'from-orange-600 to-red-600',
      code: 'https://github.com/manasaavarmaa/Food-Delivery-App',
      live: 'https://food-delivery-app-seven-beige.vercel.app/'
    },
    {
      title: 'AI Resume Builder',
      description: 'An AI-powered resume builder that generates personalized resumes based on user input, with templates and export options.',
      tech: ['Python', 'Flask', 'Jinja2', 'Bootstrap'],
      gradient: 'from-purple-600 to-pink-600',
      code: 'https://github.com/manasaavarmaa/AI-Based-Resume-Builder/tree/Manasa',
      live: 'https://ai-resume-builder-eight-mu.vercel.app/'
    },
    {
      title: 'Movie Recommendation System',
      description: 'A web application that recommends movies based on user preference using collaborative filtering and content-based filtering techniques.',
      tech: ['React', 'Node.js', 'Express', 'HTML', 'CSS', 'JavaScript'],
      gradient: 'from-teal-600 to-green-600',
      code: 'https://github.com/manasaavarmaa/Movie-Recommendation-System',
      live: 'https://movie-recommendation-system-one-rho.vercel.app/'
    },
    {
      title: 'Heart Disease Risk Assessment',
      description: 'A machine learning application that predicts the risk of heart disease based on user input, using logistic regression and data visualization.',
      tech: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      gradient: 'from-indigo-600 to-purple-600',
      code: 'https://github.com/manasaavarmaa/Heart-Disease-Risk-Assessment',
      live: 'https://heart-disease-risk-assessment.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="tt-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and projects that demonstrate my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-background rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.code, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.live, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
