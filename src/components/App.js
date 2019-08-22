const contactsData = [
  {
    id: 1,
    name: 'Stephen',
    surname: 'Robinson',
    email: 'mail@gmail.com'
  },
  {
    id: 2,
    name: 'Angelina',
    surname: 'Atkins',
    email: 'ang-atk@gmail.com'
  },
  {
    id: 3,
    name: 'Rob',
    surname: 'McDonalds',
    email: 'rob-not-ronald@gmail.com'
  },
  {
    id: 4,
    name: 'Cory',
    surname: 'Avory',
    email: 'cory-avory-11448@gmail.com'
  },
  {
    id: 5,
    name: 'Stephanie',
    surname: 'Newark',
    email: 'stephanie00@gmail.com'
  }
];

const contactForm = {
  name: '',
  surname: '',
  email: ''
};

const App = React.createClass({
  render: function() {
    return React.createElement(
      'div',
      { className: 'contact-app', id: 'app-container' },
      React.createElement(
        'div',
        { className: 'header' },
        React.createElement('h2', {}, 'Contact list of'),
        React.createElement('h1', {}, 'Daniel'),
        React.createElement(
          'div',
          { className: 'header-photo', id: 'logo' },
          React.createElement('img', {
            src: 'https://img.icons8.com/clouds/100/000000/contact-card.png'
          })
        ),
        React.createElement(ContactForm, { formData: contactForm })
      ),
      React.createElement(Contacts, { contacts: contactsData })
    );
  }
});
