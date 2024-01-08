var users = []




var elements = document.getElementById('elements')

var n = 0;









const url = 'https://jsonplaceholder.typicode.com/users'

async function Search(){



await fetch(url).then(response => response.json())
.then(data => users = [...data])

console.log(users)
users.map( data =>{

let newTr = document.createElement("tr")
let newTd1 = document.createElement("td")
var newTd2 = document.createElement("td")
var newTd3 = document.createElement("td")

newTd1.textContent = data.name
newTd2.textContent = data.username
newTd3.textContent = data.email
newTr.appendChild(newTd1)
newTr.appendChild(newTd2)
newTr.appendChild(newTd3)

elements.appendChild(newTr)

})



// users.map((data) => {
//     var createTr = document.createElement('tr')
//     createTr.setAttribute("id", n++)
//     var createTd = document.createElement('td')
    
//     structure.appendChild(createTr).appendChild(createTd).innerText = data.name
//     elemento.appendChild(createTd).innerText = data.username
//     elemento.appendChild(createTd).innerText = data.email

//     var structure = document.getElementById('elements')
    
    
    
//     //createTd.innerText = data.username
//     //rowElement.appendChild(createTd)
    
//     console.log(data.username)
// })

}

Search()












