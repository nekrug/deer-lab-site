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
      research: {
        draft: [],
        active: [],
        archived: [],
        deleted: [],
      },
    };

    this.deleteStudy = this.deleteStudy.bind(this);
    this.undeleteStudy = this.undeleteStudy.bind(this);
    this.refresh = this.refresh.bind(this);
    this.refreshAll = this.refreshAll.bind(this);
  }

  refresh(status) {
    fetch(`/research/api?status=${status}`)
      .then(res => res.json())
      .then((result) => {

        // TODO: I'm not sure this condition is needed. Must check what's returned from Postgres if no results found.
        if (!Array.isArray(result)) result = [];
        const researchCopy = Object.assign(this.state.research);
        researchCopy[status] = result;
        return this.setState({
          ...this.state.research, 
          researchCopy
        });
        // return this.setState({
        //   research,
        //   fetchedResearch: true
        // });
      })
      .catch(err => console.log('app.refresh: get research: ERROR: ', err));
  }

  refreshAll() {
    this.refresh('draft');
    this.refresh('active');
    this.refresh('archived');
    this.refresh('deleted');
  }

  deleteStudy(id) {
    this.setState({fetchedResearch: false});
    fetch(`/research/api?id=${id}`, {
      method: 'DELETE'
    }).then(this.refreshAll)
      .then(this.setState({fetchedResearch: true}));
  }

  undeleteStudy(id) {
    this.setState({fetchedResearch: false});
    fetch(`/research/api/undelete?id=${id}`, {
      method: 'PATCH'
    }).then(this.refreshAll)
      .then(this.setState({fetchedResearch: true}));
  }

  updateStudy(props) {
    console.log('we require additional pylons');
  }

  componentDidMount() {
    this.refreshAll();
    this.setState({fetchedResearch: true});
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='mission' element={<Mission />} />
              <Route path='research' element={<Research fetchedResearch={this.state.fetchedResearch} active={this.state.research.active} />} />
              <Route path='members' element={<Members />} />
              <Route path='join' element={<Join />} />
              <Route path='resources' element={<Resources />} />
              <Route path='studyadmin' element={<StudyAdmin 
                fetchedResearch = {this.state.fetchedResearch}
                research={this.state.research} 
                deleteStudy={this.deleteStudy} 
                undeleteStudy={this.undeleteStudy}
                updateStudy={this.updateStudy}
              />} />
              
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;