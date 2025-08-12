import React, { useState } from 'react';

const jobData = [
  { name: 'Rithwik', title: 'Java Developer', skills: ['Java'] },
  { name: 'Priyanshu', title: 'Frontend Developer', skills: ['JS'] },
  { name: 'Santhosh', title: 'Backend Developer', skills: ['Java'] },
  { name: 'Tony', title: 'Full Stack Developer', skills: ['BDA'] },
];

function JobFilter() {
  const [selectedSkill, setSelectedSkill] = useState('');

  const handleChange = (event) => {
    setSelectedSkill(event.target.value);
  };

  const filteredJobs = selectedSkill
    ? jobData.filter(job => job.skills.includes(selectedSkill))
    : [];

  return (
    <div>
      <h2>Filter Candidates by Skill</h2>

      <select onChange={handleChange} value={selectedSkill}>
        <option value="">-- Select a skill --</option>
        <option value="Java">Java</option>
        <option value="JS">JS</option>
        <option value="BDA">BDA</option>
      </select>

      {selectedSkill && (
        <>
          <h3>Matching Candidates</h3>
          {filteredJobs.length > 0 ? (
            <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Job Title</th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs.map((job, index) => (
                  <tr key={index}>
                    <td>{job.name}</td>
                    <td>{job.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No candidates found for {selectedSkill}</p>
          )}
        </>
      )}
    </div>
  );
}

export default JobFilter;
