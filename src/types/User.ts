export type User = {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: 'male' | 'female' | string; // update if you want stricter typing
    image: string;
    accessToken: string;
    refreshToken: string;
  };