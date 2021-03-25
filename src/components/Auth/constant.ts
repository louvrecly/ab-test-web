export interface AuthFormData {
  email: string;
  password: string;
  username?: string;
  dobDay?: number;
  dobMonth?: number;
  dobYear?: number;
  district?: string;
}

export const signupLinks = [
  { key: 'email', text: 'Sign up with email' },
  { key: 'facebook', text: 'Sign up with facebook' },
  { key: 'google', text: 'Sign up with Google+' },
];
