import React, {Component} from 'react';
import Study from '../components/Study';

// function Research() {
//   return (
//     <h1>Studies and Projects... presumably we`&apos`ll import components and the db logic in here somehow </h1>
//   );
// }

// TODO: Refactor this into a functional layout component with the business logic in actual components
class Research extends Component {
  
  render() {
    // FIXME: see if we can make this a spinner rather than this text
    if (!this.props.fetchedResearch) return (
      <div>
        <h1>Loading data, please wait...</h1>
      </div>
    );

    const { active } = this.props;
    console.log(active);
    
    if (!active.length) return (
      <div>No studies found</div>
    );

    // TODO: Try this with research.map the way it's done in the DB section - that's so cool!
    const studies = [];
    active.forEach((el, idx) => {
      studies.push(
        <Study
          key = {'study' + idx}
          id = {el.id}
          title = {el.name}
          description = {el.description}
          imageSource = {el.image_source}
        />
      );
    });

    return (
      <>
        {studies}
      </>
    );

  }
}

export default Research;