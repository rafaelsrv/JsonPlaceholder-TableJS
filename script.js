var users = []

const text = document.querySelector('header input')

text.addEventListener('input', getText)

const button = document.querySelector('button')
button.addEventListener("click", clickButton)

const url = 'https://jsonplaceholder.typicode.com/users'

async function getText(){
await fetch(url).then(response => response.json())
.then(data => users = [...data])
clickButton()


for(let user of users){
    

    var newTr = document.createElement("tr")
    var newTd1 = document.createElement("td")
    var newTd2 = document.createElement("td")
    var newTd3 = document.createElement("td")
    var elements = document.getElementById('elements')

    users.forEach(()=>{
        newTd1.textContent = user.name
        newTd2.textContent = user.username
        newTd3.textContent = user.email
        newTr.appendChild(newTd1)
        newTr.appendChild(newTd2)
        newTr.appendChild(newTd3)
        elements.appendChild(newTr)
        
    })
    

        if(!newTr.textContent.includes(text.value)){
            
            newTr.style.display= 'none'
            const removeElements = document.querySelectorAll('tr')[0]
            for (var i=0;i<removeElements.length;i+=1){
                removeElements[i].style.display = 'block';
                console.log('i')
              }
           
            
            // removeElements.style.display = 'none'
            
            
            console.log('teste')
        }else{
                        
            newTr.style.display= 1

        }

    }
}

getText()
function clickButton(){
    const eraserTR = document.querySelectorAll('.elements tr')
    for (var i=0;i<eraserTR.length;i+=1){
        eraserTR[i].style.display = 'none';
      }
    // eraserTR.style.display = 'none'
    console.log(eraserTR.length)
}
    

// users.forEach(data =>{

//     var newTr = document.createElement("tr")
//     var newTd1 = document.createElement("td")
//     var newTd2 = document.createElement("td")
//     var newTd3 = document.createElement("td")
//     var elements = document.getElementById('elements')

//     newTd1.textContent = data.name
//     newTd2.textContent = data.username
//     newTd3.textContent = data.email
//     newTr.appendChild(newTd1)
//     newTr.appendChild(newTd2)
//     newTr.appendChild(newTd3)
//     elements.appendChild(newTr)

//         if(!newTr.textContent.includes(text.value)){
            
//             newTr.style.display='none'
            
//             console.log('teste')
//         }else{
//             const eraser = document.getElementsByTagName('tr')
//             console.log(eraser)
//             newTr.style.display= 1

//         }

//     }
     
//     )



    




// async function getUser(){


// }
// function getTextValue(){
//     var textValue = text.value

//     let filteredUsers = []
//     users.map(data =>{
//         if(data.name.includes(textValue)){
//             filteredUsers.push(data)
            
//         }
        
//     })
//     console.log(filteredUsers.length)
//        if (filteredUsers.length == 0){
        
//        } else {
//     filteredUsers.forEach(data =>{
        
        

//         let newTr = document.createElement("tr")
//         let newTd1 = document.createElement("td")
//         var newTd2 = document.createElement("td")
//         var newTd3 = document.createElement("td")
//         let elements = document.getElementById('elements')
        
//         newTd1.textContent = data.name
//         newTd2.textContent = data.username
//         newTd3.textContent = data.email
//         newTr.appendChild(newTd1)
//         newTr.appendChild(newTd2)
//         newTr.appendChild(newTd3)
//         elements.appendChild(newTr)
        
//         })}
//     }
//     getTextValue()
//     text.onchange = getTextValue

// }




     
    
    



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
    
















