function ValidateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return regex.test(email)
}

module.exports = ValidateEmail