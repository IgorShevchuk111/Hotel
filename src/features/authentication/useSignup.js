import { useMutation } from '@tanstack/react-query';

import toast from 'react-hot-toast';
import { signup as signApi } from '../../services/apiAuth';

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signApi({ fullName, email, password }),
    onSuccess: (user) => {
      toast.success(
        "Account succesfully created! Please verify the new account from the user's email address."
      );
    },
  });
  return { signup, isLoading };
}
