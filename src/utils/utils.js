const mobileNumberRegex = /^\d{10}$/;

export function isValidMobileNumber(mobileNumber) {
  return mobileNumberRegex.test(mobileNumber);
}

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export function isValidEmail(email) {
  return emailRegex.test(email);
}
