'use client'

import{ Code, Zap, Users, Award} from 'lucide-react';

export default function SkillStates()  {
    const stats = [
        {
            icon: Code,
            title: 'Lines of Code',
            value: '+100k',
            description: 'Written across various projects',
            color: 'text-blue-500',
        },
        {
            icon: Zap,
            title: 'Energy & Performance',
            value: '70%',
            description: 'Same Energy, with different projects',
            color: 'text-yellow-500',
        },
        {
            icon: Users,
            title: 'offers',
            value: '+10',
            description: 'Successful collaborations',
            color: 'text-green-500',
        },
        {
            icon: Award,
            title: 'Reviews',
            value: '+10',
            description: 'Professional',
            color: 'text-red-500',
        },
    ];

    return (
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Developement <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Statistics</span>
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
               {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="text-center space-y-3">
              <div className="flex justify-center">
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="space-y-1">
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-white font-medium">{stat.title}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}