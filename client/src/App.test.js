import { render, screen } from '@testing-library/react';
import App from './App';
import "./index.css"
import './App.css'
import './output.css'
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
