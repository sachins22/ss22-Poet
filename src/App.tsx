import React from 'react';
import { Book, Facebook, Instagram, Mail, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/th.jpeg")',
          filter: 'brightness(0.3)'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative">
        {/* Hero Section with Image */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="w-48 h-48 md:w-64 md:h-64 relative transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/1741319651767.jpg"
                  alt="Sachin"
                  className="rounded-full shadow-xl object-cover w-full h-full ring-4 ring-white/20"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white mb-4 transform hover:translate-x-2 transition-transform duration-300">Sachin Saini</h1>
                <div className="space-y-2 mb-8">
                  {/* <p className="text-xl text-gray-200">Profession:</p> */}
                  <ul className="list-disc list-inside text-gray-200 ml-4 space-y-1">
                    <li>Poet</li>
                    <li>Student</li>
                    <li>Learner</li>
                  </ul>
                </div>
                
                {/* Social Links */}
                <div className="flex gap-6">
                  <a 
                    href="https://www.instagram.com/iam_premsakhi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors transform hover:-translate-y-1 duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>@creater_s01</span>
                  </a>
                  <a 
                    href="https://www.facebook.com/share/16JZwFCk68" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors transform hover:-translate-y-1 duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-black/30 backdrop-blur-lg rounded-2xl shadow-lg p-8 mb-12 transform hover:translate-y-[-4px] hover:shadow-2xl transition-all duration-300 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">About Me</h2>
              <p className="text-gray-200 leading-relaxed">
                I am a passionate poet and student, dedicated to expressing emotions and experiences through the written word. 
                My work explores various themes of life, love, and human nature.
              </p>
            </div>

            {/* Publications */}
            <div className="bg-black/30 backdrop-blur-lg rounded-2xl shadow-lg p-8 mb-12 transform hover:translate-y-[-4px] hover:shadow-2xl transition-all duration-300 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">My Book</h2>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-black/50 rounded-xl transform hover:rotate-6 transition-transform duration-300">
                  <Book className="w-12 h-12 text-gray-200" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">My Thoughts</h3>
                  <a 
                    href="/My Thoughts book1.pdf"
                    className="inline-block mt-2 px-4 py-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors transform hover:translate-x-1 duration-300"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-black/30 backdrop-blur-lg rounded-2xl shadow-lg p-8 transform hover:translate-y-[-4px] hover:shadow-2xl transition-all duration-300 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
              <div className="space-y-4">
                <a 
                  href="mailto:ss22poet@gmail.com"
                  className="flex items-center gap-3 text-gray-200 hover:text-white transition-colors group"
                >
                  <div className="p-2 bg-black/50 rounded-lg group-hover:bg-black/70 transition-colors transform group-hover:rotate-12 duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>ss22poet@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-gray-200">
                  <div className="p-2 bg-black/50 rounded-lg transform hover:rotate-12 transition-transform duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+91 8930443655</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;