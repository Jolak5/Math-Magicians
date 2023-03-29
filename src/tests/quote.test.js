import React from 'react';
import { render, screen } from '@testing-library/react';
import Quotes from '../components/quote';

describe('Quotes', () => {
  it('it renders Quotes component', async () => {
    render(<Quotes />);

    screen.debug();
  });
});
