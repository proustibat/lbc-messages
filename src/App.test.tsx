import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const welcome = screen.getByText(/Home page/i);
  expect(welcome).toBeInTheDocument();
});
