import React from 'react';
import './App.css';
import HeaderComponent from './Header/HeaderComponent';
import JumbotronComponent from './Jumbotron/JumbotronComponent';
import CoursesComponent from './Courses/CoursesComponent';
import FooterComponent from './Footer/FooterComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <JumbotronComponent />
      <CoursesComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
