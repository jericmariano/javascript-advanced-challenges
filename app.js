// question 6 firsrt 6 incomplete todos

async function firstSixIncomplete() {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos")
    const result = await promise.json()

     const incomplete = result.filter(elem => !elem.completed).slice(0, 6)

     console.log(incomplete)
}


firstSixIncomplete()