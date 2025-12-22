export function validateEmptyField(value: string): string | null{
    if (value.trim() === '') {
        return 'This field is required';
    }
    return null;
}

export function validateNumberLessZero(value: number): string | null{
    if (value <= 0) {
        return 'This field must be greater than zero';
    }
    return null;
}

export function validateOnlyNumbers(value: string): string | null{
    if (!/^\d+$/.test(value)) {
        return 'This field should contain only numbers';
    }
    return null;
}