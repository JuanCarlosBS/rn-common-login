import React from 'react';

const UserContext = React.createContext({
  name: '',
  setName: item => {},
  clearName: () => {},
});

export default UserContext;
