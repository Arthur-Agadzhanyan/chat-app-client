export interface Form {
    email: string,
    password: string
}

export interface FormErrors {
    emailError?: string | null,
    passwordError?: string | null,
    authError?: string,
    verifyError?: string,
}