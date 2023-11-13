import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
export function Info() {
  const { isCall } = useContext(AppContext);
  return (
    <span role="info" className="message">
      {isCall && 'Calling...'}
    </span>
  );
}
