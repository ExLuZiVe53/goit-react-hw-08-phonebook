//redux
import { useDispatch, useSelector } from 'react-redux';
import * as operation from 'redux/contacts/operation';
import { getContacts } from 'redux/contacts/selectors.js';

import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operation.fetchContacts());
  }, [dispatch]);

  const filters = useSelector(state => state.filters) || '';
  const { items } = useSelector(getContacts);

  const getVisibleContacts = (contacts, filters) => {
    switch (filters) {
      case filters:
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(filters)
        );
      default:
        return contacts;
    }
  };

  const visibleFilter = getVisibleContacts(items, filters);

  const handleDelete = (id, name) => {
    dispatch(operation.removeContact({ id, name }));
  };

  return (
    <ul>
      {visibleFilter.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <button onClick={() => handleDelete(contact.id, contact.name)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
