export const StrongPasswordRegex: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

export const PhoneNumberRegex: RegExp = /[- +()0-9]{8,}/;