import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-bg-light">
      {/* Navbar */}
      <nav className="h-navbar bg-bg-light border-b border-border-light">
        <div className="container mx-auto px-8 h-full flex items-center justify-between">
          <div className="font-serif text-2xl text-heading">Hostel</div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="nav-link">Home</a>
            <a href="/rooms" className="nav-link">Rooms</a>
            <a href="/bookings" className="nav-link">Bookings</a>
            <a href="/contact" className="nav-link">Contact</a>
          </div>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-heading text-white py-8">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl mb-4">Contact Us</h3>
              <p className="text-muted">Email: info@hostel.com</p>
              <p className="text-muted">Phone: +1 234 567 890</p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-muted hover:text-white transition-colors">About Us</a></li>
                <li><a href="/rooms" className="text-muted hover:text-white transition-colors">Rooms</a></li>
                <li><a href="/contact" className="text-muted hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-muted hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-muted hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-muted hover:text-white transition-colors">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 