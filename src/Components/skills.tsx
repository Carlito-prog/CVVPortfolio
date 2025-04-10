import { useState } from "react"
import { skillsData } from "../../staticData/skillsData"

type SkillType = {
    name: string;
    level: string;
    discipline: string;
}

function Skills() {
    const [selectedSkills, setSelectedSkills] = useState<SkillType[]>(skillsData.filter((skillData) => skillData.discipline === 'language'))
    //track active skill level
    const [activeSkill, setActiveSkill] = useState<string>('language')

    const handleSelectedSkill = (skill: string) => {
        const skills = skillsData.filter((skillData) => skillData.discipline === skill)
        setSelectedSkills(skills)
        setActiveSkill(skill)
    }

    return (
        <section id='skills'>
            <h1>Choose a Discipline</h1>
            <div className='skillsType-container'>
                <div className={`${activeSkill === 'language' ? 'active' : ''}`} onClick={() => handleSelectedSkill('language')}>
                    <h3>Languages</h3>
                </div>
                <div className={`${activeSkill === 'frontend' ? 'active' : ''}`} onClick={() => handleSelectedSkill('frontend')}>
                    <h3>Frontend</h3>
                </div>
                <div className={`${activeSkill === 'backend' ? 'active' : ''}`} onClick={() => handleSelectedSkill('backend')}>
                    <h3>Backend</h3>
                </div>
                <div className={`${activeSkill === 'cloud' ? 'active' : ''}`} onClick={() => handleSelectedSkill('cloud')}>
                    <h3>Cloud</h3>
                </div>
            </div>
            <div className='skills-content'>
                {selectedSkills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                        <h3>{skill.name}</h3>
                        <p>{skill.level}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills