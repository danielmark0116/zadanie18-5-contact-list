const ContactForm = React.createClass({
  propTypes: {
    formData: React.PropTypes.object.isRequired
  },

  render: function() {
    return React.createElement(
      'div',
      { className: 'contact-form-container' },
      React.createElement('small', {}, 'Add new one:'),
      React.createElement(
        'form',
        { className: 'contact-form' },
        React.createElement(
          'div',
          { className: 'form-input' },
          React.createElement(
            'div',
            { className: 'ico' },
            React.createElement('img', {
              src:
                'https://img.icons8.com/bubbles/50/000000/id-man-in-blue-shirt.png'
            })
          ),
          React.createElement('input', {
            type: 'text',
            placeholder: 'Name',
            value: this.props.formData.name
          })
        ),
        React.createElement(
          'div',
          { className: 'form-input' },
          React.createElement(
            'div',
            { className: 'ico' },
            React.createElement('img', {
              src:
                'https://img.icons8.com/bubbles/50/000000/id-man-in-green-jacket.png'
            })
          ),
          React.createElement('input', {
            type: 'text',
            placeholder: 'Surname',
            value: this.props.formData.surname
          })
        ),
        React.createElement(
          'div',
          { className: 'form-input' },
          React.createElement(
            'div',
            { className: 'ico' },
            React.createElement('img', {
              src: 'https://img.icons8.com/bubbles/50/000000/email.png'
            })
          ),
          React.createElement('input', {
            type: 'text',
            placeholder: 'Email',
            value: this.props.formData.email
          })
        ),
        React.createElement('button', {}, 'Add')
      )
    );
  }
});
