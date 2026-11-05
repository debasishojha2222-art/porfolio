import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Linkedin, Instagram, Download, Send, Check, Copy, ExternalLink, MapPin } from 'lucide-react';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'YouTube Thumbnails',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const primaryEmail = 'debasishojha2244@gmail.com';
  const alternateEmail = 'debasishojha2222@gmail.com';
  const phone = '+91 7862040387';
  const whatsappUrl = 'https://wa.me/917862040387?text=Hi%20Debasish,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!';
  const linkedinUrl = 'https://linkedin.com/in/debasish-ojha-044519399';
  const behanceUrl = 'https://www.behance.net';
  const instagramUrl = 'https://instagram.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(primaryEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger mailto link with pre-filled content
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Debasish,\n\nMy name is ${formData.name} (${formData.email}).\n\nI am interested in your services for: ${formData.service}.\n\nProject Details:\n${formData.message}\n\nLooking forward to hearing from you!`
    );
    window.location.href = `mailto:${primaryEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <footer id="contact" className="bg-[#19351C] text-white pt-20 pb-12 relative overflow-hidden">
      
      {/* Subtle organic radial glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#356B3D]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-[#75A66B]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#A8D59F] uppercase">
            <span className="w-6 h-[2px] bg-[#75A66B]" />
            <span>Let's Create Together</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase leading-none">
            GET IN TOUCH
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/80 font-normal leading-relaxed pt-1">
            Have a project in mind, need high-converting thumbnails for your YouTube channel, or looking
            for a dedicated UI/UX designer and video editor? Let's connect.
          </p>
        </div>

        {/* 2-Column Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Left Column: Direct Channels & Socials */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Cards */}
            <div className="space-y-3.5">
              
              {/* Email Card */}
              <div className="p-3.5 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#356B3D] text-white shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] sm:text-xs font-medium text-emerald-300 uppercase tracking-wider">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${primaryEmail}`}
                      className="text-xs sm:text-base font-semibold text-white hover:text-emerald-200 transition-colors block mt-0.5 truncate"
                      title={primaryEmail}
                    >
                      {primaryEmail}
                    </a>
                    <span className="text-[10px] sm:text-xs text-emerald-100/60 block mt-0.5 truncate">
                      Alt: {alternateEmail}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0 flex items-center justify-center min-w-[38px] min-h-[38px] sm:min-w-[42px] sm:min-h-[42px] cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp & Phone Card */}
              <div className="p-3.5 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#356B3D] text-white shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] sm:text-xs font-medium text-emerald-300 uppercase tracking-wider">
                      Phone & WhatsApp
                    </div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-base font-semibold text-white hover:text-emerald-200 transition-colors block mt-0.5 truncate"
                    >
                      {phone}
                    </a>
                    <span className="text-[10px] sm:text-xs text-emerald-100/60 block mt-0.5">
                      Fastest response via WhatsApp
                    </span>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0 flex items-center justify-center min-w-[38px] min-h-[38px] sm:min-w-[42px] sm:min-h-[42px]"
                  title="Chat on WhatsApp"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-300" />
                </a>
              </div>

              {/* Location Card */}
              <div className="p-3.5 sm:p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#356B3D] text-white shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] sm:text-xs font-medium text-emerald-300 uppercase tracking-wider">
                    Location & Availability
                  </div>
                  <div className="text-xs sm:text-base font-semibold text-white mt-0.5 truncate">
                    Bhubaneswar, Odisha, India
                  </div>
                  <div className="text-[10px] sm:text-xs text-emerald-100/60 mt-0.5 truncate sm:whitespace-normal">
                    Open for Remote & Hybrid Opportunities
                  </div>
                </div>
              </div>

            </div>

            {/* Social Media & Resume Buttons as requested */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                Connect Across Platforms
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {/* LinkedIn */}
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-[#356B3D] border border-white/10 text-white text-xs font-semibold transition-all hover:scale-102"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-[#356B3D] border border-white/10 text-white text-xs font-semibold transition-all hover:scale-102"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                {/* Behance */}
                <a
                  href={behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-[#356B3D] border border-white/10 text-white text-xs font-semibold transition-all hover:scale-102"
                >
                  <span className="font-bold text-sm">Bē</span>
                  <span>Behance</span>
                </a>

                {/* Instagram */}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-[#356B3D] border border-white/10 text-white text-xs font-semibold transition-all hover:scale-102"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>

              {/* Download Resume Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white text-[#19351C] hover:bg-emerald-50 font-semibold text-sm transition-all shadow-md hover:shadow-lg"
                >
                  <Download className="w-4 h-4 text-[#356B3D]" />
                  <span>Download Debasish's Resume (PDF)</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Inquiry Message Form */}
          <div className="lg:col-span-7 bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10">
            <h3 className="font-heading text-2xl font-bold tracking-tight text-white uppercase mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-emerald-100/70 mb-6">
              Fill out this quick brief and I will get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="p-8 text-center rounded-2xl bg-white/10 border border-emerald-400/30 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#356B3D] text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-xl font-bold text-white">
                  Message Dispatched!
                </h4>
                <p className="text-sm text-emerald-100/80 max-w-sm mx-auto">
                  Your email client has been opened with your inquiry. You can also reach Debasish directly on WhatsApp at +91 7862040387.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 text-xs font-semibold bg-white text-[#1E3A24] rounded-lg hover:bg-emerald-50"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-200 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-emerald-100/40 text-sm focus:outline-hidden focus:border-[#75A66B] focus:bg-white/15 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-200 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-emerald-100/40 text-sm focus:outline-hidden focus:border-[#75A66B] focus:bg-white/15 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-200 mb-1.5">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1E3A24] border border-white/15 text-white text-sm focus:outline-hidden focus:border-[#75A66B] transition-all"
                  >
                    <option value="YouTube Thumbnails">YouTube Thumbnails & Channel Branding</option>
                    <option value="UI/UX Design">UI/UX Design & Prototyping (Figma)</option>
                    <option value="Graphic Design">Graphic Design & Marketing Creatives</option>
                    <option value="Video Editing">Long-Form or Short-Form Video Editing</option>
                    <option value="Full-Time / Contract">Full-Time / Contract Hiring Opportunity</option>
                    <option value="Other Project">Other Creative Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-200 mb-1.5">
                    Project Overview
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your channel, timeline, deliverables, or goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-emerald-100/40 text-sm focus:outline-hidden focus:border-[#75A66B] focus:bg-white/15 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#356B3D] hover:bg-[#2B5631] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message Directly</span>
                </button>
              </form>
            )}

          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/60">
          <div>
            © 2026 <strong className="text-white">Debasish Ojha</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>UI/UX Designer</span>
            <span aria-hidden="true">·</span>
            <span>Graphic Designer</span>
            <span aria-hidden="true">·</span>
            <span>Video Editor</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
