const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
const filterStreamers = () => {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase()
  const filteredStreamers = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(searchTerm)
  )

  const resultsList = document.getElementById('results')
  resultsList.innerHTML = ''
  filteredStreamers.forEach((streamer) => {
    const listItem = document.createElement('li')
    listItem.textContent = streamer.name
    resultsList.appendChild(listItem)
  })

  console.log(filteredStreamers)
}

document
  .getElementById('searchButton')
  .addEventListener('click', filterStreamers)
