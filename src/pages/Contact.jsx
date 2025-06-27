import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { contactDetails } from '../data/contact';

export default function Contact() {
  const whatsappNumber = contactDetails.whatsapp || '919960171727'; 
  const whatsappMsg = encodeURIComponent("Hi Akash, I found your portfolio and would like to connect!");
  const linkedinUrl = contactDetails.linkedin || 'https://www.linkedin.com/in/akashkendre/';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-indigo-900/80 via-indigo-800/70 to-purple-900/80">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-[5%]  animate-fade-in-up flex flex-col items-center min-h-[340px] justify-center">
          {/* Illustration removed, but min-height ensures consistent section height */}
          <div className="text-indigo-100 text-lg mt-2 text-center">
            <p className="mb-2 font-semibold">Let's build something great together!</p>
            <p className="opacity-80">Whether you have a question, want to collaborate, or just want to say hi, my inbox is always open. You can also reach out instantly via LinkedIn or WhatsApp below.</p>
            <div className="mt-4 flex flex-col gap-1 text-indigo-200 text-sm">
              <span><strong>Email:</strong> {contactDetails.email}</span>
              <span><strong>Location:</strong> {contactDetails.location}</span>
            </div>
          </div>
        </div>
        <div className="bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-16 animate-fade-in-up flex flex-col items-center justify-center gap-8">
          <h2 className="text-3xl font-bold mb-4 text-indigo-100 drop-shadow">Connect Instantly</h2>
          <div className="flex flex-col gap-6 w-full items-center">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-blue-700/80 hover:bg-blue-800/90 text-white rounded-full font-semibold text-lg shadow-lg border border-blue-300/30 transition-all duration-200 group"
            >
              <FaLinkedin className="text-2xl group-hover:scale-110 transition" />
              Connect on LinkedIn
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-green-600/80 hover:bg-green-700/90 text-white rounded-full font-semibold text-lg shadow-lg border border-green-300/30 transition-all duration-200 group"
            >
              <FaWhatsapp className="text-2xl group-hover:scale-110 transition" />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
