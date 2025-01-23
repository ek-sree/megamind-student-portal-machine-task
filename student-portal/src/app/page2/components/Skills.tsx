import Image from "next/image";
import skillsLogo from '../../../../public/images/skillsLogo.png'

export default function Skills() {
  const skills = [
    {
      title: "Programming Languages & Frameworks",
      description: "Skilled in Python, Java & Spring Boot, JavaScript (JS), React JS, and CSS for building apps and web interfaces.",
      icon: "/images/programming-language-icon.png"
    },
    {
      title: "Project Management & Development Methodologies",
      description: "Experienced with JIRA for project tracking and Agile Development for efficient delivery.",
      icon: "/images/project-management-icon.png"
    },
    {
      title: "Database Management",
      description: "Proficient in PostgreSQL for designing and managing relational databases.",
      icon: "/images/database-icon.png"
    },
    {
      title: "Data Analysis & Visualization",
      description: "Skilled in Data Analysis and Power BI for creating visualizations and reports.",
      icon: "/images/data-analysis-icon.png"
    },
    {
      title: "Version Control & Collaboration Tools",
      description: "Experienced with GitHub for version control and code collaboration.",
      icon: "/images/version-control-icon.png"
    },
    {
      title: "Design & Creative Tools",
      description: "Proficient in Adobe Photoshop and Illustrator for designing graphics.",
      icon: "/images/design-tools-icon.png"
    }
  ];

  return (
    <div className="max-w-full mx-auto px-4 py-16 mt-[34rem]">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Core Skills & Technical Proficiencies</h2>
      <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
        
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src={skill.icon}
                  alt={skill.title}
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-slate-700">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className="mt-14 max-w-full">
        <Image src={skillsLogo} alt="skills-logo" className="object-cover h-24"/>
      </div>
    </div>
  );
}