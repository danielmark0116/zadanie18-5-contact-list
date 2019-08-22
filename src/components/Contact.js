const Contact = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return React.createElement(
      'div',
      { className: 'contact-container' },
      React.createElement(
        'div',
        { className: 'user-photo' },
        React.createElement('img', {
          src: 'https://img.icons8.com/bubbles/50/000000/user.png'
        })
      ),
      React.createElement(
        'div',
        { className: 'user-info' },
        React.createElement(
          'p',
          {},
          React.createElement('span', {}, 'Name: '),
          this.props.contact.name
        ),
        React.createElement(
          'p',
          {},
          React.createElement('span', {}, 'Surname: '),
          this.props.contact.surname
        ),
        React.createElement(
          'p',
          { className: 'small' },
          React.createElement('span', {}, 'Email: '),
          this.props.contact.email
        )
      )
    );
  }
});
