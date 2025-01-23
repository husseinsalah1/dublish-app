export const isTokenValid = () => {
  const token = localStorage.getItem("authToken") || null;

  if (!token || token === null) return false;

  return true;
};
