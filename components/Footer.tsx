import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-red-600">FIT</span>FORCE
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your body and mind with expert guidance, cutting-edge equipment, and a
              supportive community.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Personal Training</li>
              <li className="text-gray-400">Group Classes</li>
              <li className="text-gray-400">Performance Coaching</li>
              <li className="text-gray-400">Nutrition Guidance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <span className="block font-semibold text-white mb-1">Address:</span>
                123 Fitness Street<br />
                Wellness City, WC 12345
              </li>
              <li>
                <span className="block font-semibold text-white mb-1">Phone:</span>
                (555) 123-4567
              </li>
              <li>
                <span className="block font-semibold text-white mb-1">Email:</span>
                info@fitforce.com
              </li>
              <li>
                <span className="block font-semibold text-white mb-1">Hours:</span>
                24/7 Access
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} FitForce. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}