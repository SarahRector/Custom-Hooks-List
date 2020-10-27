import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import QueenList from './QueenList';
import { getQueens } from '../../services/noKeyNoShadeApi';

jest.mock('../../services/noKeyNoShadeApi.js');

describe('QueenList component', () => {
  it('displays a list of queens after a load', async() => {
    getQueens.mockResolvedValue([
      { id: 89, name: 'Trixie', image_url: 'test.png' }
    ]);
    render(<MemoryRouter>
      <QueenList />
    </MemoryRouter>);

    screen.getByText('Loading...');

    const queenList = await screen.findByTestId('queens');

    return waitFor(() => {
      expect(queenList).not.toBeEmptyDOMElement();
    });
  });
});
