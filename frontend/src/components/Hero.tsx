import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url("/hero-bg.jpg")' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="mb-6">Welcome to Our Hostel</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience comfort and community in the heart of the city. Book your stay today and create unforgettable memories.
          </p>
          <div className="space-x-4">
            <button className="btn bg-white text-primary hover:bg-bg-light">
              Book Now
            </button>
            <button className="btn border-2 border-white bg-transparent hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 