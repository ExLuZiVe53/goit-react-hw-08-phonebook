import { NavLink } from 'react-router-dom';

export const Authbar = () => {
  return (
    <ul>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
    </ul>
  );
};
