import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Given App component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<App></App>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('main');
      expect(element).toBeInTheDocument();
    });
  });
});
