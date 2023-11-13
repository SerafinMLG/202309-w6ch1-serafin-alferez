import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Key } from './key';

describe('Given Key component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Key></Key>);
    });

    test('Then it should be in the document', () => {
      // const element = screen.getByRole('listitem');
      // expect(element).toBeInTheDocument();
      const element = screen.getByText('delete');
      expect(element).toBeInTheDocument();
    });
  });
});
