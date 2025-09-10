// App.js
import React, { useState, useCallback } from "react";
import SkillList from "./SkillList.js";

const UseCallbackComp = () => {
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const [inputValue, setInputValue] = useState("");

  // Add skill, avoid duplicates and empty strings
  const addSkill = useCallback(() => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue && !skills.includes(trimmedValue)) {
      setSkills((prevSkills) => [...prevSkills, trimmedValue]);
      setInputValue("");
    }
  }, [inputValue, skills]);

  // Delete skill by index
  const deleteSkill = useCallback(
    (index) => {
      setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
    },
    [setSkills]
  );

  return (
    <div>
      <h1 id="heading">Skills Manager</h1>
      <input
        id="skill-input"
        type="text"
        value={inputValue}
        placeholder="Enter a skill"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button id="skill-add-btn" onClick={addSkill}>
        Add Skill
      </button>
      <SkillList skills={skills} deleteSkill={deleteSkill} />
    </div>
  );
};

export default UseCallbackComp;

