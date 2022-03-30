const btnQuote = document.querySelector('#btnQuote')
const textDiv = document.querySelector('p')
const btnToggle = document.querySelector('#btnToggle')

btnQuote.addEventListener('click', async () => {
    let response = await axios.get('https://zenquotes.io/api/quotes')
    console.log(response.data[0].q)
    console.log(response.data[0].a)

    let zenQuote = response.data[0].q
    let zenAuthor = response.data[0].a
    textDiv.innerText = `"${zenQuote}" - ${zenAuthor}`
})

const changeClass = () => {
    document.body.classList.toggle('light-mode')
  }
  
btnToggle.addEventListener('click', changeClass)