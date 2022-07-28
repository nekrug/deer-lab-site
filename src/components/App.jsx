import React, { Component } from 'react';
import { BrowserRouter, Switch, Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import Mission from '../pages/Mission';
import Research from '../pages/Research';
import Members from '../pages/Members';
import Join from '../pages/Join';
import Resources from '../pages/Resources';
import StudyAdmin from '../pages/StudyAdmin';
import NotFound from '../pages/NotFound';

// Import our custom CSS
import '../scss/App.scss';

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedResearch: false,
      research: [],
    };
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='mission' element={<Mission />} />
              <Route path='research' element={<Research />} />
              <Route path='members' element={<Members />} />
              <Route path='join' element={<Join />} />
              <Route path='resources' element={<Resources />} />
              <Route path='studyadmin' element={<StudyAdmin />} />
              
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;