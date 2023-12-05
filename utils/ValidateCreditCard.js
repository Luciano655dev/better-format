function ValidateCreditCard(creditNumber){
    const cleanNumber = creditNumber.toString().replace(/\D/g, '')

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

    // Obter o nome do Banco do Cartão
    const bin = cleanNumber.substring(0, 6)
    const binBanks = {
        '4': 'Visa',
        '5': 'MasterCard',
        '37': 'American Express',
        '34': 'Discover',
        '51': 'MasterCard',
        '52': 'MasterCard',
        '53': 'MasterCard',
        '54': 'MasterCard',
        '55': 'MasterCard',
        // Adicionar mais caso necessário
    };

    const bank = binBanks[bin] ? binBanks[bin] : undefined
    const isValid = sum % 10 === 0

    if(!isValid) return { isValid: false }
    return{
        isValid,
        bank
    }
}

module.exports = ValidateCreditCard