document.querySelector('button').addEventListener('click', showMarketRate)
function showMarketRate(){
  let inputValue = document.getElementById('currencyrate').value 
 
  fetch(`https://open.er-api.com/v6/latest/${inputValue}`)
    .then(res => res.json())
    .then(data => {
      let base = inputValue.slice(0,3)
      let target = inputValue.slice(3)
      console.log(data.rates[target])
      document.querySelector('h3').innerText = `1 ${base} = ${data.rates[target]} ${target}`
    })

}