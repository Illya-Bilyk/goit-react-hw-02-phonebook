import { List, Delete, Item } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  const deleteContact = e => {
    const deletingName = contacts.filter(
      contact => contact.name === e.target.name
    );

    onDelete(deletingName[0]);
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
