import React from 'react';

const TeamMemberCard = ({ name, role, isCEO = false }) => (
  <div className="text-center">
    <div className={`bg-gray-200 mx-auto ${isCEO ? 'w-48 h-48' : 'w-40 h-56'} mb-4 flex items-center justify-center`}>
      <span className="text-gray-500">Image</span>
    </div>
    <h3 className="font-bold text-lg text-spicy-red">{name}</h3>
    <p className="text-sm text-gray-600">{role}</p>
  </div>
);

const TeamSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-spicy-red text-center mb-12 font-serif">NUESTRO EQUIPO</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column: CEOs */}
          <div className="flex justify-around items-start">
            <TeamMemberCard name="FERNANDA ROMANI" role="CEO & Co-Founder" isCEO={true} />
            <TeamMemberCard name="ALY CISNEROS" role="CEO & Co-Founder" isCEO={true} />
          </div>

          {/* Right Column: Team */}
          <div className="flex flex-col space-y-8 justify-center">
            <TeamMemberCard name="GABRIEL FRANCO" role="Graphic Designer" />
            <TeamMemberCard name="JULIA TERRAZAS" role="Digital Marketing" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default TeamSection;