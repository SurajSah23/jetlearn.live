import React from 'react';

const AffiliationsSection = () => {
  const designedByLogos = [
    {
      alt: 'Google',
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    },
    {
      alt: 'Microsoft',
      src: 'https://i.ibb.co/5h8YNZ8M/66bc9472c37e18dbd80a238e-H-microsoft.png',
    },
    {
      alt: 'Stanford University',
      src: 'https://i.ibb.co/zVjCXvzC/6735f485d247a9f242ee8a08-stem1.png',
    },
    {
      alt: 'MIT',
      src: 'https://i.ibb.co/mVcCfS2Y/66bc9472dda1971d3bb4d27b-H-stanford.png',
    },
    {
      alt: 'STEM.org Accredited',
      src: 'https://i.ibb.co/qL7Hf2gb/66bc9472ff5944773a207162-H-harvard.png',
    },
  ];

  const accreditedByLogos = [
    {
      alt: 'Harvard University',
      src: 'https://i.ibb.co/TMdSF00r/66bc9472ca0a1f4b37506233-H-MIT.png',
    },
    {
      alt: 'Education Alliance Finland',
      src: 'https://i.ibb.co/ZRkX0xJx/6735f483cc5c11d5554cf9a0-education-finland1.png',
    },
    {
      alt: 'HolonIQ Top 200',
      src: 'https://i.ibb.co/tTGLkFTW/6735f41bed92cda8b8254de4-europe-edtech1.png',
    },
  ];

  return (
    <section className="bg-[#fdf6f2] rounded-2xl py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-12">
        {/* Designed By */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center md:text-left">
            Designed by Universities & Tech Giants
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6">
            {designedByLogos.map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.alt}
                className="h-12 sm:h-14 md:h-16 max-w-[140px] object-contain"
              />
            ))}
          </div>
        </div>

        {/* Accredited By */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center md:text-left">
            Accredited by
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6">
            {accreditedByLogos.map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.alt}
                className="h-12 sm:h-14 md:h-16 max-w-[140px] object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliationsSection;
