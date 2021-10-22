import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: '', isOpen: false };
    this.click = this.click.bind(this);
  }

  click() {

    if (this.state.clicked === event.target.id) {
      this.setState({ isOpen: !this.state.isOpen });
    } else {
      this.setState({ clicked: event.target.id, isOpen: false });
    }

  }

  render() {
    const topics = this.props.topics;
    const listItems = topics.map(topic => {
      if (topic.title === this.state.clicked && !this.state.isOpen) {
        return (
          <div key={topic.title} >
            <div className="topic-header " onClick={this.click} id={topic.title}>{topic.title}</div>
            <div className="topic-content" >{topic.content}</div>
          </div>
        );
      } else {
        return (
          <div key={topic.title} >
            <div className="topic-header " onClick={this.click} id={topic.title}>{topic.title}</div>
            <div className="topic-content hidden" >{topic.content}</div>
          </div>
        );
      }
    }
    );

    return (
        <div>
          {listItems}
        </div>
    );
  }
}
