import { Action } from '../action/action';
import { Display } from '../display/display';

export function Actions() {
  return (
    <div role="actions" className="actions">
      <Display></Display>
      <Action></Action>
    </div>
  );
}
