import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RoomCard from './components/RoomCard';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold my-4">Our Rooms</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <RoomCard title="Deluxe Room" descriptiontel Management="Spacious and comfortable." />
          <RoomCard title="Standard Room" description="Cozy and convenient." />
          <RoomCard title="Budget Room" description="Affordable for everyone." />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
