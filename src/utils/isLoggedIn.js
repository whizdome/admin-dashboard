export const isLoggedIn = () => {
  const token = JSON.parse(localStorage.getItem("data"));

  if (!token) return true;

  return true;
};
