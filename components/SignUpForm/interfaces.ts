export interface Form {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    location: string
}

export interface FormErrors {
    birthdayError?: string | null,
    emailError?: string | null,
    passwordError?: string | null,
    firstNameError?: string | null,
    lastNameError?: string | null,
    locationError?: string | null,
    verifyError?: string | null
}