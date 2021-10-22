import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: '', isOpen: false };
    this.click = this.click.bind(this);
  }

  click() {

    this.setState({ clicked: event.target.id, isOpen: !this.state.isOpen });
    console.log(this.state);
    // console.log(event.target);
  }

  // getClass() {
  //   if (event.target.id === this.state.clicked) {
  //     return '';
  //   } else {
  //     return 'hidden';
  //   }
  // }

  render() {
    const topics = this.props.topics;
    // const contentClass = this.getClass();
    const listItems = topics.map(topic =>
      <div key={topic.title} onClick={this.click}>
        <div className="topic-header " id={topic.title}>{topic.title}</div>
        <div className={topic.title === this.state.clicked ? 'topic-content' : 'topic-content hidden'}>{topic.content}</div>
      </div>
    );

    return (
        <div>
          {listItems}
        </div>
    );
  }
}
