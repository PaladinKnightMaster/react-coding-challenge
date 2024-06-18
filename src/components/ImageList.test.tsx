import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react';
import ImageList from './ImageList';
import { fetchImages } from '../services/api';
import { ImageData } from '../types';

jest.mock('../services/api');

const mockImages: ImageData[] = [
  {
    title: 'Test Title 1',
    description: 'Test Description 1',
    url: 'http://placeimg.com/380/480/any',
  },
  {
    title: 'Test Title 2',
    description: 'Test Description 2',
    url: 'http://placeimg.com/380/480/any',
  },
];

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

(fetchImages as jest.Mock).mockResolvedValue({ data: mockImages });

test('renders ImageList component with images', async () => {
  await act(async () => {
    render(<ImageList />);
  });

  await waitFor(() => {
    expect(screen.getByText(/Test Title 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Title 2/i)).toBeInTheDocument();
  });
});

test('renders loading state initially', async () => {
  let resolveFetch: (value?: unknown) => void;
  (fetchImages as jest.Mock).mockImplementation(
    () =>
      new Promise((resolve) => {
        resolveFetch = resolve;
      })
  );

  await act(async () => {
    render(<ImageList />);
  });

  expect(screen.getByText(/Loading/i)).toBeInTheDocument();

  await act(async () => {
    resolveFetch({ data: mockImages });
  });

  await waitFor(() => {
    expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument();
  });
});

test('renders error state when fetch fails', async () => {
  (fetchImages as jest.Mock).mockRejectedValue(new Error('Failed to fetch images'));

  await act(async () => {
    render(<ImageList />);
  });

  await waitFor(() => {
    expect(screen.getByText(/Failed to fetch images/i)).toBeInTheDocument();
  });
});
