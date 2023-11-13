import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Keyboard } from './keyboard';

describe('Given Keyboard component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Keyboard></Keyboard>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
  });
});
