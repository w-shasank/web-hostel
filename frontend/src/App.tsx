import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';

function App() {
  return (
    <Layout>
      <Hero />
      <section className="section">
        <div className="container mx-auto">
          <h2 className="text-center mb-12">Our Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sample Room Cards */}
            {[1, 2, 3,4].map((room) => (
              <div key={room} className="card">
                <div className="aspect-w-16 aspect-h-9 bg-ui-gray rounded-lg mb-4"></div>
                <h3 className="font-sans text-xl mb-2">{room} Seater Room</h3>
                <p className="text-muted mb-4">Comfortable and spacious room with modern amenities.</p>
                <button className="btn w-full">Book Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default App;
