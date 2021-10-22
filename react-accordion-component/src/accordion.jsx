import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: '' };
    this.click = this.click.bind(this);
  }

  click() {

    if (this.state.clicked === event.target.id) {
      this.setState({ clicked: '' });
    } else {
      this.setState({ clicked: event.target.id });
    }

  }

  render() {
    const topics = this.props.topics;
    const listItems = topics.map(topic =>
          <div key={topic.title} >
            <div className="topic-header " onClick={this.click} id={topic.title}>{topic.title}</div>
            <div className={topic.title === this.state.clicked ? 'topic-content' : 'topic-content hidden'} >{topic.content}</div>
          </div>
    );

    return (
        <div>
          {listItems}
        </div>
    );
  }
}
