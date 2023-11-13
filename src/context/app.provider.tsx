import { useState } from 'react';
import { AppContext, ContextStructure } from './app.context';

type Props = {
  children: JSX.Element;
};

export function AppContextProvider({ children }: Props) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isActiveCall, setActiveCall] = useState(false);
  const [isCall, setCall] = useState(false);

  const context: ContextStructure = {
    isActiveCall,
    phoneNumber,
    isCall,
    setPhoneNumber,
    setActiveCall,
    setCall,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
