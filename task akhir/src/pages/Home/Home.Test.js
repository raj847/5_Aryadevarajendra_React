import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
 
import Home from './Home';

describe('Homepage', () => {
    test('renders Form component', () => {
      render(<Home />);
      expect(screen.getByText(/Hi My Name is/)).toBeInTheDocument();
      expect(screen.getByText(/Anne Sullivan/)).toBeInTheDocument();
      expect(screen.getByText(/I Build things for the web/)).toBeInTheDocument();
    });

});