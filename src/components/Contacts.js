const Contacts = React.createClass({
  propTypes: {
    contacts: React.PropTypes.array.isRequired
  },

  render: function() {
    const contactsList = this.props.contacts.map((singleContact, i) => {
      return React.createElement(Contact, { key: i, contact: singleContact });
    });

    return React.createElement(
      'div',
      { className: 'contacts-container' },
      contactsList
    );
  }
});
