import { List, Delete, Item } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  const deleteContact = e => {
    const deletingName = contacts.find(
      contact => contact.name === e.target.name
    );

    onDelete(deletingName);
  };

  return (
    <List>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <Item key={id}>
            {name} : {number}
            <Delete type="button" name={name} onClick={deleteContact}>
              Delete
            </Delete>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};
