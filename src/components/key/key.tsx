import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

export function Key() {
  const { phoneNumber, setPhoneNumber, setActiveCall } = useContext(AppContext);

  const handleClick = (increment: string) => {
    if (phoneNumber.length !== 9) {
      if (phoneNumber.length === 8) {
        setActiveCall(true);
      }
      setPhoneNumber(phoneNumber + increment);
    }
  };

  const handleClickDelete = () => {
    setActiveCall(false);
    setPhoneNumber('');
  };

  return (
    <>
      <li>
        <button className="key" onClick={() => handleClick('1')}>
          1
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleClick('2')}>
          2
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleClick('3')}>
          3
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleClick('4')}>
          4
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleClick('5')}>
          5
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleClick('6')}>
          6
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleClick('7')}>
          7
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleClick('8')}>
          8
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleClick('9')}>
          9
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleClick('0')}>
          0
        </button>
      </li>
      <li>
        <button className="key big" onClick={() => handleClickDelete()}>
          delete
        </button>
      </li>
    </>
  );
}
