import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header>
      <div>
        <NavLink to="/">Phonebook</NavLink>
      </div>
      <ul>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </ul>
    </header>
  );
};
