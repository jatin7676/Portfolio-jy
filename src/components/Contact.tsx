import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { url: 'https://github.com/jatin7676', label: 'GitHub' },
    { url: 'https://www.linkedin.com/in/jatin-yadav-380116248/', label: 'LinkedIn' },
    { url: 'https://leetcode.com/u/Yadavjatin/', label: 'LeetCode' },
    { url: 'https://www.geeksforgeeks.org/user/yadav200datt/', label: 'GFG' },
    { url: 'https://www.naukri.com/code360/profile/4c80d612-87f8-4e69-bcad-28d49cddcda3', label: 'Code360' }
  ];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'yadav2002jatin@email.com' },
    { icon: Phone, label: 'Phone', value: '+91 8882450049' },
    { icon: MapPin, label: 'Location', value: 'Delhi, India' }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or just have a chat about technology
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">
                  I'm always excited to discuss new opportunities, interesting projects, or potential
                  collaborations. Whether you're a recruiter, fellow developer, or someone with an
                  exciting idea, I'd love to hear from you!
                </p>
              </div>

              <div className="space-y-6 max-w-2xl mx-auto">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <item.icon size={20} className="text-teal-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex flex-wrap gap-4 justify-center">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="text-slate-400 hover:text-teal-400 transition-colors duration-300 border-b border-transparent hover:border-teal-400"
                      aria-label={social.label}
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;