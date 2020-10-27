import React from 'react';
import { render, cleanup } from '@testing-library/react';
import QueenItem from './QueenItem';

describe('QueenItem component', () => {
  afterEach(() => cleanup());
  it('renders QueenItem', () => {
    const { asFragment } = render(<QueenItem
      name="Trixie"
      image_url="test.png" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
