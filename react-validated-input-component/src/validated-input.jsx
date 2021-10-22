import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

  }

  getClass() {
    if (this.state.value === '') {
      return {
        signContent: <i className = "fas fa-times"></i>,
        textContent: 'A password is required.'
      };
    } else if (this.state.value.length < 8) {
      return {
        signContent: <i className="fas fa-times"></i>,
        textContent: 'Your password is too short.'
      };
    } else {
      return {
        signContent: <i className="fas fa-check"></i>,
        textContent: ''
      };
    }
  }

  render() {
    const { signContent, textContent } = this.getClass();
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="password" >Password</label>
        <div className="row">
        <input id="password" name="password" type="text" value={this.state.value} onChange={this.handleChange} />
        <div>{signContent}</div>
        </div>
        <h5>{textContent}</h5>
      </form>
    );
  }
}
