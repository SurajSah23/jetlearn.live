import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import RegistrationForm from './components/RegistrationForm';
import ScheduleTable from './components/ScheduleTable';
import TeamSection from './components/TeamSection';
import AiEdTechSection from './components/AiEdTechSection';
import AffiliationsSection from './components/AffiliationsSection';
import TrustedBySection from './components/TrustedBySection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero + Registration Section */}
      <main className="flex flex-col lg:flex-row gap-8 px-4 sm:px-6 md:px-10 lg:px-20 py-10">
        {/* Hero Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <HeroSection />
        </div>

        {/* Registration Form */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <RegistrationForm />
        </div>
      </main>

      {/* Schedule Table */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-6">
        <ScheduleTable />
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-10 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="mb-10">
          <TrustedBySection />
        </div>

        <div className="mb-10">
          <AffiliationsSection />
        </div>

        <div className="mb-10">
          <AiEdTechSection />
        </div>

        <div>
          <TeamSection />
        </div>
      </footer>
    </div>
  );
}

export default App;
