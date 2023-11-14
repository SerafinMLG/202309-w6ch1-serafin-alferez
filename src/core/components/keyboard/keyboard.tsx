import { usePhone } from '../../../hooks/usePhone';

export function NumbersKey() {
  const numbers = ['0','1','2','3','4','5','6','7','8','9'];

  const { phoneState, addNumbers, deleteNumbers, callButton, hangButton } =
    usePhone();

  return (
    <>
      <div className="container">
        <span className="message">{phoneState.loadState}</span>
        <main className="phone">
          <div className="keyboard-container">
            <ol className="keyboard">
              {numbers.map((number) => (
                <li key={number}>
                  <button
                    onClick={() => addNumbers(number)}
                    type="button"
                    className="key"
                  >
                    {number}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => deleteNumbers()}
                  type="submit"
                  className="key big"
                >
                  delete
                </button>
              </li>
            </ol>
            <div className="actions">
              <span className="number">{phoneState.dials}</span>
              <a
                onClick={() => callButton()}
                href="#"
                className={`${
                  phoneState.dials.length === 9 ? 'call active' : 'call'
                }`}
              >
                Call
              </a>
              <a
                onClick={() => hangButton()}
                href="#"
                className={`${
                  phoneState.loadState === 'calling'
                    ? 'hang active'
                    : 'hang hidden'
                }`}
              >
                Hang
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
