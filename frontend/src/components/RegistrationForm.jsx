import React, { useState } from 'react';
import { Calendar, User, Phone, Mail, Baby, ChevronDown } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    event: 'All Events',
    parentName: '',
    mobile: '',
    email: '',
    kidName: '',
    kidAge: ''
  });

  const events = [
    'All Events',
    'Gaming Legends: From Pixels to Victory Royale!',
    'Origami Workshop',
    'AI Art Battle',
    'Animation Domination: Cartoon & Anime Trivia!',
    'AI - Charades',
    'Rubik\'s Cube',
    'Cosmic Quest: A Journey Through Space',
    'AI Detective/Paper Line Workshop',
    'Superhero Showdown: Marvel vs. DC & Beyond!'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://jetlearn-live.vercel.app/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('🎉 Registration successful!');
        setFormData({
          event: 'All Events',
          parentName: '',
          mobile: '',
          email: '',
          kidName: '',
          kidAge: ''
        });
      } else {
        toast.error('❌ Registration failed!');
      }
    } catch (error) {
      console.error(error);
      toast.error('🚨 Server error!');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center md:text-left mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-800">Reserve Your Child's Spot</h2>
          <p className="text-base sm:text-lg text-gray-600">
            Secure your place in this exclusive learning experience
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Event Selection
              </label>
              <div className="relative">
                <select
                  name="event"
                  value={formData.event}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white appearance-none focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition"
                >
                  {events.map((event, index) => (
                    <option key={index} value={event}>{event}</option>
                  ))}
                </select>
                <ChevronDown className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Parent Name
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition"
                  placeholder="Enter parent's full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email ID
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition"
                placeholder="parent@example.com"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Baby className="w-4 h-4 inline mr-2" />
                  Kid's Name
                </label>
                <input
                  type="text"
                  name="kidName"
                  value={formData.kidName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition"
                  placeholder="Enter child's name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Kid's Age
                </label>
                <input
                  type="number"
                  name="kidAge"
                  value={formData.kidAge}
                  onChange={handleChange}
                  min="6"
                  max="16"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition"
                  placeholder="Age (6-16)"
                  required
                />
              </div>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:scale-105 transition-all duration-300"
              >
                🚀 Confirm My Participation
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={3000} />
    </section>
  );
};

export default RegistrationForm;
