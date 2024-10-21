import React from "react";

function EcommerceFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 "> 

          <div className="md:col-span-2">
            <img src="/logoipsum-282.svg" alt="logo" className="w-18 h-auto filter invert py-4" />
            <p className="text-gray-400 mb-4">Temukan koleksi headset mutakhir kami <br />untuk suara imersif yang belum pernah ada sebelumnya</p>
          </div>

          <div className="flex justify-between md:col-span-1 space-x-8"> {/* Adjusted horizontal spacing */}
            <div className="space-y-4"> {/* Added vertical spacing */}
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <FooterLink href="#" text="Home" />
                <FooterLink href="#" text="Products" />
                <FooterLink href="#" text="About Us" />
                <FooterLink href="#" text="Contact" />
                <FooterLink href="#" text="Blog" />
              </ul>
            </div>

            <div className="space-y-4"> {/* Added vertical spacing */}
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <FooterLink href="#" text="FAQ" />
                <FooterLink href="#" text="Shipping & Returns" />
                <FooterLink href="#" text="Terms & Conditions" />
                <FooterLink href="#" text="Privacy Policy" />
                <FooterLink href="#" text="Track Order" />
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4"> {/* Added vertical spacing */}
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <FooterLink href="https://facebook.com" text="Facebook" />
                <FooterLink href="https://twitter.com" text="Twitter" />
                <FooterLink href="https://instagram.com" text="Instagram" />
                <FooterLink href="https://linkedin.com" text="LinkedIn" />
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024. All rights reserved.</p> 
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, text }) {
  return (
    <li>
      <a href={href} className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
        {text}
      </a>
    </li>
  );
}

export default EcommerceFooter;
