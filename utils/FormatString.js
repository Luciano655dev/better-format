const RemoveCurseWords = require('./RemoveCurseWords.js')

function FormatString(str, formatation = {}, censorship = false) {
    const {
        removeSpaces = true,
        removeSpecialChars = true,
        removeNumbers = true,
        capitalize = '',
        wordCase = 'lower'
    } = formatation

    if (capitalize != '') {
        [...capitalize].forEach(cap => {
            str = str.split(cap).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(cap)
        })
    }

    if(removeNumbers) str = str.replace(/\d/g, '')
    if (removeSpaces) str = str.replace(/\s/g, '')
    if (removeSpecialChars) str = str.replace(/[^a-zA-Z0-9]/g, '')

    if (wordCase === 'lower') str = str.toLowerCase()
    else if (wordCase === 'upper') str = str.toUpperCase()

    if (censorship)
        str = RemoveCurseWords(str, censorship.obscenities, censorship.censorshipChar, censorship.leetspeak)

    return str
}

module.exports = FormatString