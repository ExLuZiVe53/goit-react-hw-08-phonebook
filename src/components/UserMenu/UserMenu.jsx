import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors.js';

import * as authOperation from 'redux/auth/auth-operation';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <header>
      <p>Hello, {name}</p>
      <button type="submit" onClick={() => dispatch(authOperation.logOut())}>
        LogOut
      </button>
    </header>
  );
};
