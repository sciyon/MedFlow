export const decodeJwt = (token: string) => {
  try {
    const decoded = JSON.parse(atob(token.split('.')[1])); // Decode the payload part of the JWT
    return decoded; // Return the whole decoded JWT to access both userId (sub) and role
  } catch (error) {
    console.error('Invalid token', error);
    return null;
  }
};
