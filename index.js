function FormatString(str, censorship){
    let finalStr = str
        .toLowerCase()
        .replace(/\s/g, '') // remove espaços
        .replace(/[^a-zA-Z0-9]/g, '') // remove caracteres especiais

    if(censorship) finalStr = RemoveCurseWords(finalStr, censorship.obscenities, censorship.censorshipChar, censorship.leetspeak)

    return finalStr
}

function RemoveCurseWords(str, obscenities = [], censorshipChar = '#', leetspeak = true){
    let finalStr = str
    obscenities = [...obscenities, 'bitch', 'dick', 'motherfucker', 'fuck', 'jerk']

    // Remove as palavras censuradass
    obscenities.forEach(obscenity => {
        const censorship = censorshipChar.repeat(obscenity.length)

        if(leetspeak){
            const regexString = obscenity.split('').map(char => {
                if (/[a-zA-Z]/.test(char)) return `[${char}\\d]`

                return char
            }).join('')

            const regex = new RegExp(regexString, 'gi')
            finalStr = finalStr.replace(regex, censorship)
        }else{
            const regex = new RegExp(obscenity, 'gi')
            finalStr = finalStr.replace(regex, censorship)
        }
    });

    return finalStr
}

function FormatNumber(n){
    return Math.floor(Number(n))
}

module.exports = {
    FormatString,
    RemoveCurseWords
}