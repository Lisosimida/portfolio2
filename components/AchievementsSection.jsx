import React from "react";

const achievementsList = [
  { metric: "Projects", value: "5+" },
  { metric: "Certificates", value: "2+" },
  { metric: "Years", value: "2" },
];

const AchievementsSection = () => {
  return (
    <section className="py-8">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/30">
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-3">
          {achievementsList.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-1 px-6 py-8 text-center"
            >
              <div className="text-4xl font-extrabold tracking-tight text-white">
                {achievement.value}
              </div>
              <div className="text-sm uppercase tracking-wider text-slate-400">
                {achievement.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;