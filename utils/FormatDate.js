function FormatDate(data){
    const date = new Date(data)

    // handle error
    if(!date) return new Error('Invalid date', { isValid: false, errMsg: 'Date not send' })

    return {
        isValid: true,
        day: String(date.getDate()).padStart(2, '0'),
        month: String(date.getMonth()+1).padStart(2, '0'),
        year: String(date.getFullYear()),
        hour: String(date.getHours()).padStart(2, '0'),
        minutes: String(date.getMinutes()).padStart(2, '0'),
        milliseconds: String(date.getMilliseconds()).padStart(2, '0')
    }
}

module.exports = FormatDate