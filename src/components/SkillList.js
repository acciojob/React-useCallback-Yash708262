
import React from "react";

const SkillList = React.memo(({ skills, deleteSkill }) => {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li
          key={index}
          id={`skill-${index}`}
          onClick={() => deleteSkill(index)}
          style={{ cursor: "pointer" }}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
});

export default SkillList;
