import React from 'react';
import { Clock, Activity, Coffee, BookOpen } from 'lucide-react';

const ScheduleTable = () => {
  const scheduleData = [
    { startTime: '08:00', endTime: '09:00', activity: 'Setting up the event', subActivity: 'Setup Canopy, put up standee, setup Clubhouse according to the next activity', type: 'setup' },
    { startTime: '09:00', endTime: '10:00', activity: 'Workshop / Games', subActivity: 'Any fun workshops using JetLearn kits', type: 'workshop' },
    { startTime: '10:00', endTime: '11:00', activity: 'Kahoot Quiz', subActivity: 'Gaming Legends: From Pixels to Victory Royale!', type: 'quiz' },
    { startTime: '11:00', endTime: '12:00', activity: 'Workshop', subActivity: 'Origami Workshop', type: 'workshop' },
    { startTime: '12:00', endTime: '13:00', activity: 'Games', subActivity: 'AI Art Battle', type: 'game' },
    { startTime: '13:00', endTime: '14:00', activity: 'Lunch Break', subActivity: 'Info Session', type: 'break' },
    { startTime: '14:00', endTime: '15:00', activity: 'Kahoot Quiz', subActivity: 'Animation Domination: Cartoon & Anime Trivia!', type: 'quiz' },
    { startTime: '15:00', endTime: '16:00', activity: 'Games', subActivity: 'AI - Charades', type: 'game' },
    { startTime: '16:00', endTime: '17:00', activity: 'Workshop', subActivity: 'Rubik\'s Cube', type: 'workshop' },
    { startTime: '17:00', endTime: '18:00', activity: 'Kahoot Quiz', subActivity: 'Cosmic Quest: A Journey Through Space', type: 'quiz' },
    { startTime: '18:00', endTime: '18:30', activity: 'Evening Break', subActivity: 'Info Session', type: 'break' },
    { startTime: '18:30', endTime: '19:00', activity: 'Games', subActivity: '30 mins 30 Puzzles', type: 'game' },
    { startTime: '19:00', endTime: '20:00', activity: 'Workshop', subActivity: 'AI Detective/Paper Line workshop', type: 'workshop' },
    { startTime: '20:00', endTime: '21:00', activity: 'Kahoot Quiz', subActivity: 'Superhero Showdown: Marvel vs. DC & Beyond!', type: 'quiz' }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'workshop': return <BookOpen className="w-5 h-5" />;
      case 'quiz': return <Activity className="w-5 h-5" />;
      case 'game': return <Activity className="w-5 h-5" />;
      case 'break': return <Coffee className="w-5 h-5" />;
      default: return <Clock className="w-5 h-5" />;
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'workshop': return 'bg-blue-50 border-l-blue-500 text-blue-800';
      case 'quiz': return 'bg-purple-50 border-l-purple-500 text-purple-800';
      case 'game': return 'bg-green-50 border-l-green-500 text-green-800';
      case 'break': return 'bg-orange-50 border-l-orange-500 text-orange-800';
      default: return 'bg-gray-50 border-l-gray-500 text-gray-800';
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Event Schedule</h2>
          <p className="text-xl text-gray-600">A full day of exciting activities and learning experiences</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left font-bold">Start Time</th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left font-bold">End Time</th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left font-bold">Activities</th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left font-bold">Sub-Activities</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((item, index) => (
                  <tr key={index} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="font-semibold text-gray-800">{item.startTime}</span>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="font-semibold text-gray-800">{item.endTime}</span>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <div className={`inline-flex items-center space-x-2 px-3 py-2 rounded-lg border-l-4 ${getActivityColor(item.type)}`}>
                        {getActivityIcon(item.type)}
                        <span className="font-semibold">{item.activity}</span>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <p className="text-gray-700 leading-relaxed break-words max-w-xs md:max-w-none">{item.subActivity}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4 bg-white rounded-full px-6 py-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-sm font-medium text-gray-700">Workshop</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-500 rounded"></div>
              <span className="text-sm font-medium text-gray-700">Quiz</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-sm font-medium text-gray-700">Games</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span className="text-sm font-medium text-gray-700">Break</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleTable;
