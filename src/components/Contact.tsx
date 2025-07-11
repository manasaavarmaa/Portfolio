import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const autoReplyMessage = `Hi ${formData.name},

Thank you for reaching out! I've received your message and really appreciate you taking the time to get in touch.

I'll review your inquiry and get back to you within 24-48 hours. In the meantime, feel free to check out my latest projects on GitHub or connect with me on LinkedIn.

Looking forward to our conversation!

Best regards,
Samanuri Sri Manasa Varma`;

    try {
      await emailjs.send(
        'service_rtfdi4p',      
        'template_in3xbnp',     
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'lQjX3EpuRl27YT_uE'     
      );

      setIsSubmitted(true);
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      console.log("Auto-reply sent:", autoReplyMessage);

      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to Send Message ❌",
        description: "Please try again later or contact via LinkedIn.",
        variant: "destructive"
      });
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'ssrimanasavarma@gmail.com',
      href: 'mailto:ssrimanasavarma@gmail.com'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      value: '+91 8688717421',
      href: 'tel:+918688717421'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      value: 'India',
      href: '#'
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-scale-in">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-green-500">Message Sent Successfully!</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Thank you for reaching out! I'll get back to you within 24-48 hours.
            </p>
            <div className="bg-muted/50 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="font-semibold mb-2">Auto-Reply Sent:</h3>
              <p className="text-sm text-muted-foreground">
                A confirmation email has been sent to your inbox with more details.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="flex items-center p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-semibold">{info.title}</div>
                    <div className="text-muted-foreground">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-lg">
              <h4 className="font-semibold mb-2">Quick Response Guarantee</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond to all inquiries within 24-48 hours. For urgent matters, 
                feel free to reach out via phone or LinkedIn for faster communication.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="transition-all duration-200 focus:scale-105"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="transition-all duration-200 focus:scale-105"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="transition-all duration-200 focus:scale-105"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="transition-all duration-200 focus:scale-105"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full group hover:scale-105 transition-all duration-200"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-4 pt-4">
                <Button 
                  type="button"
                  variant="outline" 
                  size="icon" 
                  onClick={() => window.open("https://github.com/manasaavarmaa")}
                  className="hover:scale-110 transition-all duration-200"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button 
                  type="button"
                  variant="outline" 
                  size="icon" 
                  onClick={() => window.open("https://www.linkedin.com/in/smanasavarma", "_blank")}
                  className="hover:scale-110 transition-all duration-200">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
