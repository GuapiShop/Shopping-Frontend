export function validateEmail(email: string): string | null{
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(String(email).toLowerCase())) {
        return 'This is not a valid email address';
    }
    return null;
}

export function validatePassword(password: string): string | null{
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!re.test(password)) {
        return 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character (@$!%*?&)';
    }   
    return null; 
}

export function validateUsername(username: string): string | null{
    if (username.length < 3) {
        return 'Username must be at least 3 characters long';
    }
    return null;
}