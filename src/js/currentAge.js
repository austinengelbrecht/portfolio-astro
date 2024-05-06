function currentAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

export default currentAge;
