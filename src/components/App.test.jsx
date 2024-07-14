import { expect, it, describe } from 'vitest';  
import { render, screen } from '@testing-library/react';
import App from '../App.jsx';
import Hello from './Hello.jsx';



it('renders hello message', () => {
  const { getByText } = render(<Hello />);
  expect(getByText('Hello World')).toBeInTheDocument();
});

it('should have Home Page', () => {
  render(<App/>)
  const message = screen.queryByText('Home Page')
  expect(message).toBeVisible()
})

describe('A truthy statement', () => {
  it('should be equal to 2', () => {
    expect(1+1).toEqual(2)
  }) 
})