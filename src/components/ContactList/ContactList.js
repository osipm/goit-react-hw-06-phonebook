// import { PropTypes } from 'prop-types';
import s from './ContactList.module.css';
import { connect } from 'react-redux';
import * as Contact from '../../redux/actions';

const ContactList = ({ contacts, handleDelete }) => {
  console.log('list', contacts);
  const contactsList = contacts.map(({ id, name, number }) => (
    <li key={id} className={s.item}>
      <div>
        <span>
          {name}: {number}
        </span>
        <button
          className={s.btn}
          id={id}
          type="button"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </li>
  ));

  return <ul>{contactsList}</ul>;
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired,
//   ).isRequired,
//   handleDelete: PropTypes.func.isRequired,
// };

const getFilteredContacts = (contact, filter) => {
  return contact.filter(text =>
    text.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

const mapStateToProps = ({ phone: { contacts, filter } }) => ({
  contacts: getFilteredContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  handleDelete: id => dispatch(Contact.handleDeleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
