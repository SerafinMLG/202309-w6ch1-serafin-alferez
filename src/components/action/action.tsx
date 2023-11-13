import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
export function Action() {
  const { isActiveCall, setCall, setActiveCall, setPhoneNumber } =
    useContext(AppContext);

  const handleClickToCall = () => {
    setCall(true);

    setTimeout(() => {
      setCall(false);
      setActiveCall(false);
      setPhoneNumber('');
    }, 5000);
  };

  return (
    <>
      {/* {isActiveCall ? (
        <a href="#" className="call active" onClick={() => handleClickToCall()}>
          Call
        </a>
      ) : (
        <a href="#" className="hang active" onClick={() => handleClickToHang()}>
          Hang
        </a>
      )} */}
      {isActiveCall && (
        <a href="#" className="call active" onClick={() => handleClickToCall()}>
          Call
        </a>
      )}
    </>
  );
}
