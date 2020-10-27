import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import QueenDetailPage from './QueenDetailPage';
import { MemoryRouter } from 'react-router-dom';
import { getQueensById } from '../services/noKeyNoShadeApi';

jest.mock('../services/noKeyNoShadeApi.js');

describe('QueenDetailPage component', () => {
  afterEach(() => cleanup());
  it('renders QueenDetailPage', () => {
    getQueensById.mockResolvedValue([
      { id: 89, name: 'Trixie', image_url: 'test.png' }
    ]);
    const { asFragment } = render(<MemoryRouter>
      <QueenDetailPage />
    </MemoryRouter>);
    return waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    }); 
  });
});
