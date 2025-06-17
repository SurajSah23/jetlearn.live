import React from 'react';

const teamMembers = [
  {
    name: 'Abhishek Bahl',
    title: 'Founder and CEO',
    description:
      'An alumnus of IIT Kharagpur and INSEAD, Abhishek has scaled Silicon Valley startups across the EU',
    bgColor: 'bg-purple-200',
    image: 'https://i.ibb.co/cKNL8dHh/Whats-App-Image-2025-06-14-at-7-48-18-PM.jpg',
    linkedin: 'https://linkedin.com/in/abhishekbahl',
  },
  {
    name: 'Jatin Luthra',
    title: 'Co-Founder',
    description:
      'An alumnus of IIT Kharagpur and ISB, Jatin has worked with brands like Zomato, Belong.co, JDA.',
    bgColor: 'bg-blue-200',
    image: 'https://i.ibb.co/3yQTF1XL/Whats-App-Image-2025-06-14-at-7-45-26-PM.jpg',
    linkedin: 'https://linkedin.com/in/jatinluthra',
  },
];

const TeamSection = () => {
  return (
    <section className="bg-[#e6f6ff] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center md:text-left">
          Meet the Team Driving <br /> Innovation in EdTech
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl text-center md:text-left mx-auto md:mx-0">
          Our team is the driving force behind JetLearn’s success. Meet the
          innovative minds leading the charge in education and technology.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-md border border-gray-200 p-6 pt-12 flex flex-col items-center text-center"
            >
              {/* Colored Shape Behind Image */}
              <div
                className={`absolute -top-8 w-32 h-32 rounded-full ${member.bgColor} -z-10`}
                style={{ left: '50%', transform: 'translateX(-50%)' }}
              ></div>

              {/* Image */}
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md relative z-10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Title */}
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-blue-600 font-medium">{member.title}</p>

              {/* LinkedIn Icon */}
              <div className="mt-1">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ibb.co/dJxNt28q/6709014f0e56894d0713f9ae-in-logo.png"
                    alt="LinkedIn"
                    className="w-4 h-4 hover:opacity-80 inline-block"
                  />
                </a>
              </div>

              {/* Description */}
              <p className="mt-3 text-sm text-gray-700">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
