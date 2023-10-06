export const validateFormData = (email, pass, name) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(pass);

  if (name === "") return "Name is required";
  if (name) {
    const trimmedName = name.trim();
    if (trimmedName.length < 3) return "Name must be at least 3 characters";
  }
  if (!isEmailValid) return "Email ID is not Valid";
  if (!isPasswordValid) return "Password is not Valid";

  return null;
};
