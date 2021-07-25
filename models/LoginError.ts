export interface LoginError{
    emailError?: string | null, 
    passwordError?: string | null, 
    firstNameError?: string | null, 
    lastNameError?: string | null,
    verifyError?: string 
}