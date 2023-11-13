import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
export function Display() {
  const { phoneNumber } = useContext(AppContext);

  return (
    <span role="display" className="number">
      {phoneNumber}
    </span>
  );
}
