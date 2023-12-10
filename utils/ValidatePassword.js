function ValidatePassword(password, parameters = {}){
    // PENSAR EM UMA FORMA DE TER AS COISAS OBRIGATORIAS
    const {
        minLength = 8,
        needNumbers = true,
        needUppercaseLetters = true,
        needSpecialChars = true,
        commonWords = ["123", "abc"],
    } = parameters;

    if(password.length < minLength) return { isValid: false, msg: 'A senha é muito curta' }

    const results = {}
    results.verifications = {
        minLength: true,
        needNumbers: needNumbers && /\d/.test(password),
        needUppercaseLetters: needUppercaseLetters && /[A-Z]/.test(password),
        needSpecialChars: needSpecialChars && /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password),
        commonWords: commonWords && !commonWords.some(word => password.toLowerCase().includes(word)),
    };

    results.totalPoints = Object.values(results.verifications).filter(val => val).length * 2
    results.isValid = results.totalPoints > 0
    
    return results
}

module.exports = ValidatePassword