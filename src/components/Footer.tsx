import { Instagram, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1D295D] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
               <img
              src="/RentimoLogo.png"
              alt="Rentimo Logo"
              className="h-8 w-auto"
            />
              <span className="text-xl font-semibold">Rentimo</span>
            </div>
            <p className="text-gray-300 mb-4">
              Making student housing simple, safe, and stress-free.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-[#FF480E] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#FF480E] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#FF480E]">Company</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#FF480E]">Contact</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-[#FF480E]" />
                <span>hello@rentimo.ng</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-[#FF480E]" />
                <span>+234 800 RENTIMO</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Rentimo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
