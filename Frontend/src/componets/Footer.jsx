import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-8">
        {/* Company Info */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-white">PrepZone</h2>
          <p className="max-w-sm">
            PrepZone helps you ace your interviews with practice tests, mock
            interviews, and certifications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Tests
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white transition text-2xl"
            >
              <i className="fab fa-facebook-f">📘</i>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white transition text-2xl"
            >
              <i className="fab fa-twitter">🐦</i>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-white transition text-2xl"
            >
              <i className="fab fa-linkedin-in">🔗</i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white transition text-2xl"
            >
              <i className="fab fa-instagram">📸</i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PrepZone. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
