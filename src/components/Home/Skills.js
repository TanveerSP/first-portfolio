import React from 'react'
// import { Icons } from '../../data/skills-ic'
import { skills } from '../../data/skills-ic'


const Skills = () => {
   
    return (
        <div className="container mx-auto my-4 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {skills.map((skillCategory, index) => (
                    <div key={index} className="p-5" >
                        <h2 className="text-xl font-bold mb-4">{skillCategory.category}</h2>
                        <div className="grid grid-cols-2 gap-8">
                            {skillCategory.items.map((skill, idx) => (
                                <div key={idx} className="flex items-center space-x-4">
                                    <div className="h-6 w-6">
                                        {skill.icon}
                                    </div>
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills