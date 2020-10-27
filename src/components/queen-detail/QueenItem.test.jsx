import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import QueenItem from './QueenItem';
import { getQueensById } from '../../services/noKeyNoShadeApi';
import { MemoryRouter, Route } from 'react-router-dom';

jest.mock('../../services/noKeyNoShadeApi.js');

describe('QueenItem component', () => {
  it('renders QueenItem after a load', () => {
    getQueensById.mockResolvedValue({
      id: 89,
      name: 'Trixie',
      image_url: 'test.png',
      quote: 'words and things'
    });
    render(<MemoryRouter initialEntries={['/queen/89']}>
      <Route path="/queen/:id" component={QueenItem}/>
    </MemoryRouter>);

    screen.getByText('Loading...');

    return waitFor(() => {
      screen.getByText('Trixie');
      screen.getByAltText('Trixie');
      screen.getByText('words and things');
    });
  });
});
