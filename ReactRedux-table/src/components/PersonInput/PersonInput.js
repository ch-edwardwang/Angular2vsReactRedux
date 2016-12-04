import React, {PropTypes, Component} from 'react';

class PersonInput extends Component {
  constructor(props) {
    super(props);

    this.onAddPersonClick = this.onAddPersonClick.bind(this);
  }

// TODO: clean up this controller
  onAddPersonClick() {
    const pIdElement = document.getElementById('personId');
    const nameElement = document.getElementById('name');
    const phoneNumberElement = document.getElementById('phone');
    const emailElement = document.getElementById('email');

    this.props.addPerson({
      id: pIdElement.value,
      name: nameElement.value,
      phoneNumber: phoneNumberElement.value,
      email: emailElement.value
    });

    pIdElement.value = '';
    nameElement.value = '';
    phoneNumberElement.value = '';
    emailElement.value = '';

    nameElement.focus();
  }

  componentDidMount() {
    document.getElementById('name').focus();
  }

  render() {
    return (
      <div>
        <input id="personId" type="text" placeholder="Person Id" />
        <input id="name" type="text" placeholder="Name" />
        <input id="phone" type="text" placeholder="Phone Number" />
        <input id="email" type="text" placeholder="Email" />
        <button onClick={this.onAddPersonClick}>Add Person</button>
      </div>
    );
  }
}

PersonInput.propTypes = {
  addPerson: PropTypes.func.isRequired
};

export default PersonInput;
