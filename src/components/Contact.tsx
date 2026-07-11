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
    { icon: Mail, label: 'Email', value: 'yadav2002jatin@email.com', href: 'mailto:yadav2002jatin@email.com' },
    { icon: Phone, label: 'Phone', value: '+91 8882450049', href: 'tel:+918882450049' },
    { icon: MapPin, label: 'Location', value: 'Delhi, India', href: '#' }
  ];

  return (
    <section id="contact" className="py-16 border-t border-line">
      <div className="container mx-auto px-6">
        <div className="mb-14">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">Let's get in touch</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg text-muted leading-relaxed max-w-lg">
              I'm always excited to discuss new opportunities, interesting projects, or potential
              collaborations. Whether you're a recruiter, fellow developer, or someone with an
              exciting idea, I'd love to hear from you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-sm"
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="card flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl border border-line flex items-center justify-center shrink-0 group-hover:border-ink transition-colors">
                  <item.icon size={18} className="text-accent" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted">{item.label}</p>
                  <p className="text-ink font-medium">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;