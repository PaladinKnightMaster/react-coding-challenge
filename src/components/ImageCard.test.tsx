import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageCard from './ImageCard';

const mockImageData = {
  title: 'Test Title',
  description: 'Test Description',
  url: 'http://placeimg.com/380/480/any',
};

test('renders ImageCard component', () => {
  render(<ImageCard {...mockImageData} />);

  const titleElement = screen.getByText(/Test Title/i);
  const descriptionElement = screen.getByText(/Test Description/i);
  const imgElement = screen.getByRole('img');

  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute('src', mockImageData.url);
});
