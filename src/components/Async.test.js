import { render, screen } from '@testing-library/react';
import Async from './Async';
import userEvent from '@testing-library/user-event';

describe('Async component', () => {
  test('renders hearthstone if request succeed', async () => {
    render(<Async />);

    const listItemElements = await screen.findAllByRole(
      'listitem',
      {},
      { timeout: 5000 }
    );
    expect(listItemElements).not.toHaveLength(0);
  });
});
