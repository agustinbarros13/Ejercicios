// actividad 1
const sum = (a = 10, b = 5) => {
  console.log(a + b)
}
// 1.1
sum()
console.log(sum)
// 1.2
sum(7)
console.log(sum)
// 1.3
sum(3, 4)
console.log(sum)
// actividad 2.1
const game = {
  title: 'The last us 2',
  gender: ['action', 'zombie', 'survival'],
  year: 2020
}
const { title, gender, year } = game
console.log(title)
console.log(gender)
console.log(year)
// 2.2
const fruits = ['Banana', 'Strawberry', 'Orange']
const [fruit1, fruit2, fruit3] = fruits
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)
// 2.3
const animalFunction = () => {
  return { name: 'Bengal Tiger', race: 'Tiger' }
}
const { name: name1, race: race1 } = animalFunction()
const { name: name2, race: race2 } = animalFunction()

console.log(name1, race1)
console.log(name2, race2)
//2.4
const car = { nombre: 'Mazda 6', itv: [2015, 2011, 2020] }
const { nombre, itv } = car
const [year1, year2, year3] = itv
console.log(nombre)
console.log(itv)
console.log(year1)
console.log(year2)
console.log(year3)
// actividad 3
//3.1
const pointsList = [32, 54, 21, 64, 75, 43]
const pointsListCopy = [...pointsList]
console.log(pointsListCopy)
//3.2
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyCopy = { ...toy }
console.log(toyCopy)
//3.3
const pointsList1 = [32, 54, 21, 64, 75, 43]
const pointsLis2 = [54, 87, 99, 65, 32]
const newArray = [...pointsList1, ...pointsLis2]
console.log(newArray)

//3.4
const Toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }
const newObject = { ...Toy, ...toyUpdate }

//3.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']
const newColors = [...colors.slice(0, 2), ...colors.slice(3)]

console.log(newColors)
console.log(colors)

//4.1
const users1 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]
const names2 = [...users1.map((user) => user.name)]
console.log(names2)
//4.2

const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]
const names = users.map((user) =>
  user.name.startsWith('A') ? 'Anacleto' : user.name
)
console.log(names)

//4.3
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]

const updatedCities = cities.map((city) => {
  if (city.isVisited) {
    return `${city.name} (Visitado)`
  } else {
    return city.name
  }
})

console.log(updatedCities)
//5
//5.1
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const adults = ages2.filter((age) => age > 18)
console.log(adults)

//5.2
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const agesPar = ages.filter((age) => age % 2 === 0) //para obtener los números pares.
console.log(agesPar)

//5.3
const streamers1 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
const gameLeague = streamers1.filter(
  (streamer) => streamer.gameMorePlayed === 'league of kegends'
)
console.log(gameLeague)

//5.4
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
const streamersWithU = streamers.filter((streamer) =>
  streamer.name.includes('u')
)
console.log(streamersWithU)
//5.5
const streamers3 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const legendsStreamers = streamers3.filter((streamer) =>
  streamer.gameMorePlayed.includes('Legends')
)
const updatedLegendsStreamers = legendsStreamers.map((streamer) => {
  if (streamer.age > 35) {
    return {
      ...streamer,
      gameMorePlayed: streamer.gameMorePlayed.toUpperCase()
    }
  }
  return streamer
})
console.log(updatedLegendsStreamers)

//6.1
const numbers = [32, 21, 63, 95, 100, 67, 43]
const findNum = numbers.find((number) => number === 100)
console.log(findNum)

//6.2
const movies = [
  { title: 'Madagascar', stars: 4.5, date: 2015 },
  { title: 'Origen', stars: 5, date: 2010 },
  { title: 'Your Name', stars: 5, date: 2016 }
]
const findMovi = movies.find((movie) => movie.date === 2010)
console.log(findMovi)

//6.3
const aliens = [
  { name: 'Zalamero', planet: 'Eden', age: 4029 },
  { name: 'Paktu', planet: 'Andromeda', age: 32 },
  { name: 'Cucushumushu', planet: 'Marte', age: 503021 }
]
const mutations = [
  {
    name: 'Porompompero',
    description:
      'Hace que el alien pueda adquirir la habilidad de tocar el tambor'
  },
  {
    name: 'Fly me to the moon',
    description: 'Permite volar, solo y exclusivamente a la luna'
  },
  {
    name: 'Andando que es gerundio',
    description: 'Invoca a un señor mayor como Personal Trainer'
  }
]
const findAlien = aliens.find((alien) => alien.name === 'Cucushumushu')
const findMutation = mutations.find(
  (mutation) => mutation.name === 'Porompompero'
)
if (findAlien && findMutation) {
  const fusedObject = {
    ...findAlien,
    mutation: { ...findMutation }
  }
  console.log(fusedObject)
} else {
  console.log('No se encontró el alien o la mutación correspondiente.')
}

//7.1, 7.2, 7.3
const exams = [
  { name: 'Yuyu Cabeza Crack', score: 5 },
  { name: 'Maria Aranda Jimenez', score: 1 },
  { name: 'Cristóbal Martínez Lorenzo', score: 6 },
  { name: 'Mercedez Regrera Brito', score: 7 },
  { name: 'Pamela Anderson', score: 3 },
  { name: 'Enrique Perez Lijó', score: 6 },
  { name: 'Pedro Benitez Pacheco', score: 8 },
  { name: 'Ayumi Hamasaki', score: 4 },
  { name: 'Robert Kiyosaki', score: 2 },
  { name: 'Keanu Reeves', score: 10 }
]
const totalScore = exams.reduce((total, exam) => total + exam.score, 0)
console.log(totalScore)
const totalPassedScore = exams.reduce((total, exam) => {
  return exam.score >= 7 ? total + exam.score : total
}, 0)
console.log(totalPassedScore)
const averageScore = totalScore / exams.length
console.log(averageScore)

//8.1
const videogames = [
  { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
  { name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5 },
  { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
  { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
  { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
  { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 }
]
const rpgGames = videogames.filter((game) => game.genders.includes('RPG'))
const totalScoreGame = rpgGames.reduce((total, game) => total + game.score, 0)
const averageScoreGame = totalScoreGame / rpgGames.length
console.log(averageScoreGame)
//9
const moviesN = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura']
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción']
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller']
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación']
  }
]

const categoriesFilm = []

for (const movie of moviesN) {
  for (const category of movie.categories) {
    if (!categoriesFilm.includes(category)) {
      categoriesFilm.push(category)
    }
  }
}

console.log(categoriesFilm)
//10
const usersN = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Pedro',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Cristina',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]
let totalVolume = 0
let countSounds = 0

for (const user of usersN) {
  for (const sound in user.favoritesSounds) {
    totalVolume += user.favoritesSounds[sound].volume
    countSounds++
  }
}
const averageVolume = totalVolume / countSounds
console.log(averageVolume)

//11
const users3 = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Pedro',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Cristina',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]

const soundCounts = {}

for (const user of users3) {
  for (const sound in user.favoritesSounds) {
    if (soundCounts[sound]) {
      soundCounts[sound]++
    } else {
      soundCounts[sound] = 1
    }
  }
}
console.log(soundCounts)
//12
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i
    }
  }
  return -1
}
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

// Pruebas
console.log(findArrayIndex(mainCharacters, 'Luke'))
console.log(findArrayIndex(mainCharacters, 'Leia'))
console.log(findArrayIndex(mainCharacters, 'Han Solo'))
console.log(findArrayIndex(mainCharacters, 'Chewbacca'))
console.log(findArrayIndex(mainCharacters, 'Rey'))
console.log(findArrayIndex(mainCharacters, 'Anakin'))
console.log(findArrayIndex(mainCharacters, 'Obi-Wan'))
console.log(findArrayIndex(mainCharacters, 'Yoda'))

//13
function removeItem(array, text) {
  const index = findArrayIndex(array, text)
  if (index !== -1) {
    array.splice(index, 1) //va a eliminar los textos del array con índice -1
  }
  return array
}
console.log(removeItem(mainCharacters.slice(), 'Luke'))
console.log(removeItem(mainCharacters.slice(), 'Leia'))
console.log(removeItem(mainCharacters.slice(), 'Han Solo'))
console.log(removeItem(mainCharacters.slice(), 'Chewbacca'))
console.log(removeItem(mainCharacters.slice(), 'Rey'))
console.log(removeItem(mainCharacters.slice(), 'Anakin'))

//14
function rollDice(numSides) {
  if (numSides < 1) {
    return 'El número de caras debe ser al menos 1.'
  }
  // Generar un número aleatorio
  const result = Math.floor(Math.random() * numSides) + 1
  return result
}

console.log(rollDice(6))
console.log(rollDice(20))
console.log(rollDice(100))
console.log(rollDice(0))
//15

function swap(array, index1, index2) {
  if (
    index1 < 0 ||
    index1 >= array.length ||
    index2 < 0 ||
    index2 >= array.length
  ) {
    return 'Índices fuera de rango.'
  }
  let temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp

  return array
}
const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

console.log(swap(fantasticFour, 0, 3))
console.log(swap(fantasticFour, 1, 2))
console.log(swap(fantasticFour, 0, 5))
