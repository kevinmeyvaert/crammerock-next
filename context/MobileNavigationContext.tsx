import * as React from 'react';
import { createContext, useState } from 'react';

export const MobileNavigationContext = createContext({
  open: false,
  toggle: () => {},
});

export const useMobileNavigation = () => {
  const context = React.useContext(MobileNavigationContext);
  if (!context) {
    throw new Error('Wrap app with MobileNavigationProvider');
  }
  return context;
};

export const MobileNavigationProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <MobileNavigationContext.Provider value={{ open, toggle }}>
      {children}
    </MobileNavigationContext.Provider>
  );
};
