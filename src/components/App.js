import React from 'react';
import './App.css';
import HeaderComponent from './Header/HeaderComponent';
import JumbotronComponent from './Jumbotron/JumbotronComponent';
import CoursesComponent from './Courses/CoursesComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <JumbotronComponent />
      <CoursesComponent />
    </div>
  );
}

export default App;
