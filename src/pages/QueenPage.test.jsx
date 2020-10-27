import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import QueenPage from './QueenPage';
import { MemoryRouter } from 'react-router-dom';
import { getQueens } from '../services/noKeyNoShadeApi';

jest.mock('../services/noKeyNoShadeApi.js');

describe('QueenPage component', () => {
  afterEach(() => cleanup());
  it('renders QueenPage', () => {
    getQueens.mockResolvedValue([
      { id: 89, name: 'Trixie', image_url: 'test.png' }
    ]);
    const { asFragment } = render(<MemoryRouter>
      <QueenPage />
    </MemoryRouter>);
    return waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    }); 
  });
});
