import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Download } from 'lucide-react';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = [
    'Student-AIML',
    'Full Stack Developer',
    'AI Enthusiast', 
    'Tech Explorer',
    'Problem Solver',
    'Open Source Contributor',
    'Creative Coder',
    'Lifelong Learner'
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (isTyping && !isDeleting && currentIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentRole[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (currentIndex >= currentRole.length && !isDeleting) {
      // Pause at the end before starting to delete
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
      }, 50);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next role
      setIsDeleting(false);
      setCurrentIndex(0);
      setCurrentRoleIndex(prev => (prev + 1) % roles.length);
    }
  }, [currentIndex, isTyping, isDeleting, displayText, currentRoleIndex, roles]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a temporary link to download resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume.pdf to the public folder
    link.download = 'MANASA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openGithub = () => {
    window.open('https://github.com/manasaavarmaa', '_blank');
  };

  const openLinkedin = () => {
    window.open('https://linkedin.com/in/smanasavarma', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Samanuri Sri Manasa Varma
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in h-16 flex items-center justify-center" style={{animationDelay: '0.2s'}}>
            <span className="inline-block">
              {displayText}
              <span className="inline-block w-0.5 h-6 bg-white ml-1 animate-pulse"></span>
            </span>
          </div>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            Crafting digital experiences with modern technologies and creative solutions. 
            Passionate about creating beautiful, functional, and user-friendly applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="group hover:scale-105 transition-all duration-200 bg-white text-black hover:bg-gray-200"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="hover:scale-105 transition-all duration-200 border-white text-white hover:bg-white hover:text-black"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => window.open("https://github.com/manasaavarmaa")}
              className="hover:scale-110 transition-all duration-200 text-white hover:bg-white/10 border border-white/20"
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => window.open("https://www.linkedin.com/in/smanasavarma", "_blank")}
              className="hover:scale-110 transition-all duration-200 text-white hover:bg-white/10 border border-white/20"
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => window.open("https://drive.google.com/file/d/1q2O4mK7B4sA20x6_PjNM1iw6A8rcXRPM/view?usp=drive_link", "_blank")}
              className="hover:scale-110 transition-all duration-200 text-white hover:bg-white/10 border border-white/20">
              <Download className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
