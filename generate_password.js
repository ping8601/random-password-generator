function generatePassword(options) {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // create a collection to store things user picked up
  let collection = []
  if (options.lowercase === 'on') {
    collection = collection.concat(...lowerCaseLetters)
  }
  if (options.uppercase === 'on') {
    collection = collection.concat(...upperCaseLetters)
  }
  if (options.numbers === 'on') {
    collection = collection.concat(...numbers)
  }
  if (options.symbols === 'on') {
    collection = collection.concat(...symbols)
  }

  // remove things user do not want
  collection = collection.filter(character => !options.excludeCharacters.includes(character))

  // return error when there's no valid charactors
  if (collection.length === 0) {
    return 'There is no valid character in your selection.'
  }

  // start generating password
  let password = ''
  for (let i = 0; i < Number(options.length); i++) {
    password += sample(collection)
  }

  // return password
  return password
}

// define sample function to randomly return an iten in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

module.exports = generatePassword