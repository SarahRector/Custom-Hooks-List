import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterItem from './CharacterItem';

describe('CharacterItem component', () => {
  afterEach(() => cleanup());
  it('renders CharacterItem', () => {
    const { asFragment } = render(<CharacterItem
      name="Trixie"
      image_url="test.png"
      quote="words and things" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
