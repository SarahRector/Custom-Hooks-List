import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import QueenDetail from './QueenDetail';
import { getQueensById } from '../../services/noKeyNoShadeApi';
import { MemoryRouter, Route } from 'react-router-dom';

jest.mock('../../services/noKeyNoShadeApi.js');

describe('QueenDetail component', () => {
  it('renders QueenDetail after a load', () => {
    getQueensById.mockResolvedValue({
      id: 89,
      name: 'Trixie',
      image_url: 'test.png',
      quote: 'words and things'
    });
    render(<MemoryRouter initialEntries={['/queen/89']}>
      <Route path="/queen/:id" component={QueenDetail}/>
    </MemoryRouter>);

    screen.getByText('Loading...');

    return waitFor(() => {
      screen.getByText('Trixie');
      screen.getByAltText('Trixie');
      screen.getByText('words and things');
    });
  });
});
