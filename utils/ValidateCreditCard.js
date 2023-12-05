function ValidateCreditCard(creditNumber) {
    const cleanNumber = creditNumber.replace(/\D/g, '');

    // Check if the number is provided and has the correct length
    if (!cleanNumber || cleanNumber.length !== 16) {
        return false;
    }

    // Apply the Luhn algorithm
    let sum = 0;
    for (let i = 0; i < 16; i++) {
        let digit = parseInt(cleanNumber[i]);

        if (i % 2 === 0) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
    }

    return sum % 10 === 0;
}

module.exports = ValidateCreditCard