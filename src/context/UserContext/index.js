import React, {useReducer} from 'react';

import UserContext from './type';

const defaultCartState = {
  name: '',
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    return {
      name: action.name,
    };
  } else if (action.type === 'CLEAR') {
    return defaultCartState;
  }

  return defaultCartState;
};

const UserProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  );

  const setName = item => {
    dispatchCartAction({type: 'ADD', name: item});
  };

  const clearName = () => {
    dispatchCartAction({type: 'CLEAR'});
  };

  const cartContext = {
    name: cartState.name,
    setName,
    clearName,
  };

  return (
    <UserContext.Provider value={cartContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
