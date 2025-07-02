'use client';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-6">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-300 font-medium">{skill.name}</span>
              <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}