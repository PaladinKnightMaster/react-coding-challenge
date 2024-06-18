import axios from 'axios';

const API_URL = 'https://fakerapi.it/api/v1/images?_width=380';

interface AxiosError {
  message: string;
}

const isAxiosError = (error: any): error is AxiosError => {
  return error && typeof error.message === 'string';
};

export const fetchImages = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error('Error fetching images:', error.message);
    } else {
      console.error('Error fetching images:', 'Unknown error');
    }
    throw error;
  }
};
