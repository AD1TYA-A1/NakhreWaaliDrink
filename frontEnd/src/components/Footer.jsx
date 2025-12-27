import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br mt-20 from-blue-50 via-purple-50 to-pink-50 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-slate-800 text-lg font-semibold mb-4">Nakhre-Wali Drinks</h3>
            <p className="text-sm text-slate-600">Building amazing Drinks for the modern World.</p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Tutorials
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Support
                </a>
                <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">New</span>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-sm space-y-2">
              <p>XXX XXXX, Floor 4</p>
              <p>San Francisco, CA</p>
              <a 
                href="mailto:contact@company.com" 
                className="block hover:text-white transition-colors"
              >
                contact@company.com
              </a>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-200 mt-8 pt-8 text-sm text-center text-slate-600">
          <p>© Copyright 2020. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;