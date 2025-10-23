import { useQuery } from '@tanstack/react-query';

const mockUser = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
};

const fetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUser);
    }, 500); // simulate network delay
  });
};

export function useUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
  });
}
