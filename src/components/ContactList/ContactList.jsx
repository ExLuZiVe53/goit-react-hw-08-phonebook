//redux
import { useDispatch, useSelector } from 'react-redux';
import * as operation from 'redux/contacts/operation';
import { getContacts } from 'redux/contacts/selectors.js';

import { useEffect } from 'react';

import css from './ContactList.module.css';

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
    <ul className={css.ContactUl}>
      {visibleFilter.map(contact => (
        <li className={css.ContactItem} key={contact.id}>
          <span className={css.ContactName}>{contact.name}:</span>
          <span className={css.ContactNumber}>{contact.number}</span>{' '}
          <button
            className={css.delete}
            onClick={() => handleDelete(contact.id, contact.name)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
