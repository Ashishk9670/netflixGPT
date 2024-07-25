export const checkValidData = (email, password, fullName) => {
  const isEmailVaild = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

  const isFullNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(fullName);

  //   if (!isFullNameValid) return "Full Name is not valid";
  if (!isEmailVaild) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
