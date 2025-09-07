import React, { useState, useCallback } from "react";

// SkillList component to render skills
const SkillList = React.memo(({ skills, onDelete }) => {
  return (
    <ul className="mt-4">
      {skills.map((skill, idx) => (
        <li
          key={idx}
          id={`skill-number-${idx}`}
          className="cursor-pointer bg-blue-100 px-3 py-1 rounded-lg shadow mb-2 hover:bg-blue-200"
          onClick={() => onDelete(skill)}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
});

// Main component
const UseCallbackComp = () => {
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const [input, setInput] = useState("");

  // Add skill function
  const addSkill = useCallback(() => {
    if (input.trim() === "" || skills.includes(input.trim())) return;
    setSkills((prev) => [...prev, input.trim()]);
    setInput("");
  }, [input, skills]);

  // Delete skill function
  const deleteSkill = useCallback((skill) => {
    setSkills((prev) => prev.filter((s) => s !== skill));
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h1 id="heading" className="text-2xl font-bold mb-4 text-center">
        Manage Your Skills
      </h1>

      <div className="flex gap-2">
        <input
          id="skill-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-lg px-3 py-2 shadow"
          placeholder="Enter a skill"
        />
        <button
          id="skill-add-btn"
          onClick={addSkill}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
        >
          Add Skill
        </button>
      </div>

      <SkillList skills={skills} onDelete={deleteSkill} />
    </div>
  );
};

export default UseCallbackComp;


