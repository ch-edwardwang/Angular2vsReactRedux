import React, {PropTypes, Component} from 'react';

class PersonInput extends Component {
  constructor(props) {
    super(props);

    this.onAddPersonClick = this.onAddPersonClick.bind(this);
  }

  onAddPersonClick() {
    this.props.addPerson({
      id: this.pId.value,
      name: this.name.value,
      phone: this.phone.value,
      email: this.email.value
    });

    this.pId.value = '';
    this.name.value = '';
    this.phone.value = '';
    this.email.value = '';
  }

  render() {
    return (
      <div>
        <input ref={(r) => { this.pId = r; }} type="text" placeholder="Person Id" />
        <input ref={(r) => { this.name = r; }} type="text" placeholder="Name" />
        <input ref={(r) => { this.phone = r; }} type="text" placeholder="Phone Number" />
        <input ref={(r) => { this.email = r; }} type="text" placeholder="Email" />
        <button onClick={this.onAddPersonClick}>Add Person</button>
      </div>
    );
  }
}

PersonInput.propTypes = {
  addPerson: PropTypes.func.isRequired
};

export default PersonInput;
