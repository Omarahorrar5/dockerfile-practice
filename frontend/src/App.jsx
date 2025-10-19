import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get(import.meta.env.VITE_API_URL + '/students');
    setStudents(res.data);
    setTeachers([]);
  };

  const fetchTeachers = async () => {
    const res = await axios.get(import.meta.env.VITE_API_URL + '/teachers');
    setTeachers(res.data);
    setStudents([]);
  };

  return (
    <div className="App">
      <h1>School</h1>
      <button onClick={fetchStudents}>Students</button>
      <button onClick={fetchTeachers}>Teachers</button>

      <div className="list">
        {students.map(s => (
          <div key={s._id}>
            <h3>{s.name}</h3>
            <p>Age: {s.age}</p>
            <p>Email: {s.email}</p>
            <p>Filiere: {s.filiere}</p>
          </div>
        ))}

        {teachers.map(t => (
          <div key={t._id}>
            <h3>{t.name}</h3>
            <p>Age: {t.age}</p>
            <p>Email: {t.email}</p>
            <p>Experience: {t.experience_years} years</p>
            <p>Filiere: {t.filiere.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
