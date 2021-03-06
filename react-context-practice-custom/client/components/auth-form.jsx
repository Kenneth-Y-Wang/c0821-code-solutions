import React from 'react';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { action } = this.props;
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch(`/api/auth/${action}`, req)
      .then(res => res.json())
      .then(result => {
        if (action === 'sign-up') {
          window.location.hash = 'sign-in';
        } else if (result.user && result.token) {
          this.props.onSignIn(result);
        }
      });
  }

  render() {
    const { action } = this.props;
    const { handleChange, handleSubmit } = this;
    const alternateActionHref = action === 'sign-up'
      ? '#sign-in'
      : '#sign-up';
    const alternatActionText = action === 'sign-up'
      ? 'Sign in instead'
      : 'Register now';
    const submitButtonText = action === 'sign-up'
      ? 'Register'
      : 'Log In';
    return (
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <div className="mg-b-1">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            required
            autoFocus
            id="username"
            type="text"
            name="username"
            onChange={handleChange}
            className="sign-in-input"
             />
        </div>
        <div className="mg-b-1">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            required
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            className="sign-in-input" />
        </div>
        <div className={action === 'sign-up' ? 'mg-b-1' : 'mg-b-1 hidden'}>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            className="sign-in-input"/>
        </div>
        <div className={action === 'sign-up' ? 'mg-b-1' : 'mg-b-1 hidden'}>
          <label htmlFor="Location" className="form-label">
            Location
          </label>
          <input
            id="location"
            type="text"
            name="location"
            onChange={handleChange}
            className="sign-in-input" />
        </div>
        <div className="form-submit-row">
          <small>
            <a className="return-message" href={alternateActionHref}>
              { alternatActionText }
            </a>
          </small>
          <button type="submit" className="button-main">
            { submitButtonText }
          </button>
        </div>
      </form>
    );
  }
}
