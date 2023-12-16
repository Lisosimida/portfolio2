import React from "react";

const achievementsList = [
    {
        metric: "Projects",
        value: "5+",
    },
    {
        metric: "Awards",
        value: "2+",
    },
    {
        metric: "Years",
        value: "2",
    }

];
const AchievementsSection = () => {
    return(
        <div className=" xl:gap-3 sm:py-3 xl:px-12">
            <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
            {achievementsList.map((achievement, index) => {
                return(
                    <div key={index}
                        className="flex flex-col items-center justify-center mx-4">
                        <h2 className="text-white text-4xl font-bold">
                            {achievement.value}
                        </h2>
                        <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
                    </div>
                )
            }
            )}
            </div>
            </div>
    )
}
export default AchievementsSection;