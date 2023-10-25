import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders hearthstone if request succeed', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => ['Priest'],
    });

    render(<Async />);

    const listItemElements = await screen.findAllByRole(
      'listitem',
      {},
      { timeout: 5000 }
    );
    expect(listItemElements).not.toHaveLength(0);
  });
});
