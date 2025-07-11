
import { 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud,
  GitBranch,
  Terminal,
  Brain,
  FileCode,
  HardDrive,
  Settings,
  Monitor
} from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code className="h-8 w-8" />,
      skills: ['React','Angular']
    },
    {
      title: 'Backend',
      icon: <Database className="h-8 w-8" />,
      skills: ['Node.js','Express', 'Flask']
    },
    {
      title: 'AI/ML',
      icon: <Brain className="h-8 w-8" />,
      skills: ['TensorFlow', 'PyTorch',  'Scikit-learn' , 'Keras']
    },
    {
      title: 'Programming Languages',
      icon: <FileCode className="h-8 w-8" />,
      skills: ['Python', 'Java']
    },
    {
      title: 'Database Technologies',
      icon: <HardDrive className="h-8 w-8" />,
      skills: ['MongoDB', 'MySQL']
    },
    {
      title: 'Development',
      icon: <Settings className="h-8 w-8" />,
      skills: ['Git', 'Vite']
    },
    {
      title: 'Web Technologies',
      icon: <Monitor className="h-8 w-8" />,
      skills: ['HTML5', 'CSS3']
    },
    {
      title: 'Tools',
      icon: <GitBranch className="h-8 w-8" />,
      skills: ['VS Code','GitHub']
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="group p-6 bg-background rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="px-3 py-2 bg-muted/50 rounded-lg text-center text-sm font-medium hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
