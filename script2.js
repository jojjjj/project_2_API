const button = document.querySelector('button')
const textDiv = document.querySelector('div')

button.addEventListener('click', async () => {
    let response = await axios.get('https://zenquotes.io/api/quotes')
    console.log(response.data[0].q)
    console.log(response.data[0].a)

    let zenQuote = response.data[0].q
    textDiv.innerText = `${zenQuote}`
})