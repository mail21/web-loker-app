import React from 'react';
import './App.css';
import HeaderComponent from './Header/HeaderComponent';
import JumbotronComponent from './Jumbotron/JumbotronComponent';
import CoursesComponent from './Courses/CoursesComponent';
import ReviewComponent from './Review/ReviewComponent';
import BlogComponent from './Blog/BlogComponent';
import FooterComponent from './Footer/FooterComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CoursePage from './CoursePage/CoursePage';

const Example = () => {
  return (
    <>
      <h1>example</h1>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
        <Switch>
          <Route path="/example" />
          <Route path="/courses" component={CoursePage} />
          <Route path="/">
            <JumbotronComponent />
            <CoursesComponent />
            <ReviewComponent />
            <BlogComponent />
          </Route>
        </Switch>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
