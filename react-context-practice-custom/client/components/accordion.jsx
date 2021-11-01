import React from 'react';

export default class CustomAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: '' };
    this.click = this.click.bind(this);
  }

  click() {
    if (this.state.isOpen === event.target.getAttribute('data-id')) {
      this.setState({ isOpen: '' });
    } else {
      this.setState({ isOpen: event.target.getAttribute('data-id') });
    }
  }

  render() {
    const sections = this.props.sections;
    const listSections = sections.map(section =>
      <div key={section.title}>
        <div className="section-header" onClick={this.click} data-id={section.title}>{section.title}</div>
        <div className={section.title === this.state.isOpen ? 'content-holder open' : 'content-holder close'}>
          <div className={section.title === this.state.isOpen ? 'section-content' : 'section-content hidden'}>{section.content}</div>
        </div>
      </div>
    );

    return (
      <div className="">
        {listSections}
      </div>
    );
  }
}
