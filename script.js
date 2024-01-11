var users = []

var text = document.getElementById('inputText')


async function getUser(){

const url = 'https://jsonplaceholder.typicode.com/users'
await fetch(url).then(response => response.json())
.then(data => users = [...data])

function getTextValue(){
    var textValue = text.value

    let filteredUsers = []
    users.map(data =>{
        if(data.name.includes(textValue)){
            filteredUsers.push(data)
            
        }
        
    })
    console.log(filteredUsers.length)
       if (filteredUsers.length == 0){
        users.forEach(data =>{

            let newTr = document.createElement("tr")
            let newTd1 = document.createElement("td")
            var newTd2 = document.createElement("td")
            var newTd3 = document.createElement("td")
            let elements = document.getElementById('elements')
            
            newTd1.textContent = data.name
            newTd2.textContent = data.username
            newTd3.textContent = data.email
            newTr.appendChild(newTd1)
            newTr.appendChild(newTd2)
            newTr.appendChild(newTd3)
            elements.appendChild(newTr)
            
            })
       } else {
    filteredUsers.forEach(data =>{
        
        

        let newTr = document.createElement("tr")
        let newTd1 = document.createElement("td")
        var newTd2 = document.createElement("td")
        var newTd3 = document.createElement("td")
        let elements = document.getElementById('elements')
        
        newTd1.textContent = data.name
        newTd2.textContent = data.username
        newTd3.textContent = data.email
        newTr.appendChild(newTd1)
        newTr.appendChild(newTd2)
        newTr.appendChild(newTd3)
        elements.appendChild(newTr)
        
        })}
    }
    getTextValue()
    text.onchange = getTextValue

}




     
    
    



// filteredUsers.forEach(data =>{

//             let newTr = document.createElement("tr")
//             let newTd1 = document.createElement("td")
//             var newTd2 = document.createElement("td")
//             var newTd3 = document.createElement("td")
//             let elements = document.getElementById('elements')
            
//             newTd1.textContent = data.name
//             newTd2.textContent = data.username
//             newTd3.textContent = data.email
//             newTr.appendChild(newTd1)
//             newTr.appendChild(newTd2)
//             newTr.appendChild(newTd3)
//             elements.appendChild(newTr)
            
//             })
    
















