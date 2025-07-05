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
    <div className="bg-gray-900/60 rounded-xl p-6 border border-gray-800">
      <h3 className="text- font-bold text-white mb-7">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300 font-semibold">{skill.name}</span>
              <span className="text-blue-500 text-sm font-semibold">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-green-500  h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}