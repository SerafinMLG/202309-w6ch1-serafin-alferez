import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Info } from './info';

describe('Given Info component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Info></Info>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('info');
      expect(element).toBeInTheDocument();
    });
  });
});
