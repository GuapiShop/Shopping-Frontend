export function validateEmptyField(value: string): string | null{
    if (value.trim() === '') {
        return 'This field is required';
    }
    return null;
}