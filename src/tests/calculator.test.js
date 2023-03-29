import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('it renders calculator component', () => {
    render(<Calculator />);
  });
});
