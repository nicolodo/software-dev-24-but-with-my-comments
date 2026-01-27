async function fetchData(url) {
    const data = await fetch(url)
    const res = await data.json()
    return res
}

const todos = fetchData('https://jsonplaceholder.typicode.com/todos/')
const gotData = fetchData('https://anapioficeandfire.com/api/characters/583')
const gotDataAgain = fetchData('https://anapioficeandfire.com/api/characters/583234234')