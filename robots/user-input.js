const readline = require('readline-sync')

exports.askAndReturnSearchTerm = () => {
    return readline.question('Type a Wikipedia search term: ')
}

exports.askAndReturnLanguage = () => {
    const languages = ['pt-PT', 'en', 'es-ES']
    const languageIndex = readline.keyInSelect(languages, 'Select an option: ')
    const languageText = languages[languageIndex]
    return languageText
}