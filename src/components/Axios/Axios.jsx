import React, { use } from "react";
import "../Country/country.css";

const Axios = ({ studentsPromise }) => {
  const studentsMarkDataRes = use(studentsPromise);
  //   console.log(studentsMarkDataRes.data);
  const studentsMarkData = studentsMarkDataRes.data;
  const students = studentsMarkData.map((student) => {
    const studentDetails = {
      id: student.id,
      name: student.name,
      subjects: student.subjects.map((sub) => ({
        SubName: sub.name,
        mark: sub.mark,
      })),
    };
    // console.log(studentDetails);
    return studentDetails;
  });
  return (
    <div>
      <h1>from Axios</h1>
      <div className="country-section">
        {students.map((student) => (
          <div key={student.id}>
            <h3>ID: {student.id}</h3>
            <h3>Name: {student.name}</h3>
            <h3>Age: {student?.age}</h3>
            <h3>class: {student?.class}</h3>

            {student.subjects.map((sub) => (
              <p key={sub.SubName}>
                {sub.SubName}: {sub.mark}
              </p>
            ))}
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default Axios;
