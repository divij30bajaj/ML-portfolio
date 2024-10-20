import React, { useState } from 'react';
import '../Timeline.css'; // Assuming you'll style it in a separate CSS file
import { useEffect } from 'react';
import data from "../data.json"

const Timeline = () => {
    useEffect(() => {
        const section = document.getElementById('experience');
        section.classList.add('visible');
      }, []);
  const [expandedYear, setExpandedYear] = useState(null);

  const toggleYear = (year) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  const timelineData = data['experience'];

  return (
    <div id='experience' className="section my-5">
        <h2>Academic & Industrial Background</h2>
        <div className="timeline" style={{justifyContent: "space-around"}}>
        <div className="timeline-line" />
        {timelineData.map(({ year, title, company, description }) => (
            <div key={year} className="timeline-item">
            <div className="timeline-dot" onClick={() => toggleYear(year)} />
            <div className="timeline-year">{year}</div>
            <div className="timeline-card">
            <h5>{title}</h5>
            <h6>{company}</h6>
            <hr></hr>
            <p style={{textAlign:"start"}}>{description}</p>
          </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Timeline;

// import React, { useState, useEffect } from 'react';
// import '../Timeline.css'; // Assuming you'll style it in a separate CSS file

// const timelineData = [
//   { year: 2023, title: 'Software Engineer', description: 'Worked on various projects using React and Node.js.' },
//   { year: 2022, title: 'Intern', description: 'Gained experience in software development and team collaboration.' },
//   { year: 2021, title: 'Bachelor of Science in Computer Science', description: 'Graduated with honors from XYZ University.' },
//   // Add more entries as needed
// ];

// const Timeline = () => {
//   useEffect(() => {
//     const section = document.getElementById('experience');
//     section.classList.add('visible');
//   }, []);

//   const [expandedYear, setExpandedYear] = useState(null);

//   const toggleYear = (year) => {
//     setExpandedYear(expandedYear === year ? null : year);
//   };

//   return (
//     <div id='experience' className="section my-5">
//       <h2>Academic & Industrial Background</h2>
//       <div className="timeline">
//         {timelineData.map(({ year, title, description }) => (
//           <div key={year} className="timeline-item">
//             <div className="timeline-dot" onClick={() => toggleYear(year)} />
//             <div className="timeline-year">{year}</div>
//             <div className={`timeline-card ${expandedYear === year ? 'expanded' : ''}`}>
//               <h4>{title}</h4>
//               {expandedYear === year && <p>{description}</p>}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Timeline;
