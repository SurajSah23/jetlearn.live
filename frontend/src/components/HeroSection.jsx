import React from 'react';
import { Rocket, Star, Users, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Badge + Heading */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-3 rounded-full text-sm md:text-lg font-semibold mb-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Star className="w-5 h-5 mr-2" />
            Don't let your child miss this great opportunity!
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
            Exclusive AI, Robotics & Coding
            <span className="block text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
              Experience at M3M Merlin
            </span>
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 mb-8 border border-gray-100">
          <div className="grid gap-8 md:grid-cols-3 text-center md:text-left">
            {/* Card 1 */}
            <div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 mx-auto md:mx-0 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">1:1 Personalized</h3>
              <p className="text-gray-600">Hyper-personalized live tutorials</p>
            </div>

            {/* Card 2 */}
            <div>
              <div className="bg-gradient-to-br from-green-500 to-teal-600 w-16 h-16 mx-auto md:mx-0 rounded-full flex items-center justify-center mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Gamified Learning</h3>
              <p className="text-gray-600">Fun-filled interactive workshops</p>
            </div>

            {/* Card 3 */}
            <div>
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 mx-auto md:mx-0 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Global Certification</h3>
              <p className="text-gray-600">Internationally accredited programs</p>
            </div>
          </div>

          {/* Description + CTA */}
          <div className="mt-8 text-center md:text-left">
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>JetLearn</strong> — the world's top-rated AI Academy for kids (Silicon Valley, USA) — brings an exclusive day-long AI, Robotics & Coding experience right here at M3M Merlin. With 1:1 hyper-personalized live tutorials, gamified workshops, and globally accredited programs, your child (ages 6–16) will explore cutting-edge future skills in a playful, fun-filled way.
            </p>

            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full inline-block text-lg font-bold shadow-lg animate-pulse">
              🔥 Seats are limited. Book your slot now! 🔥
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
