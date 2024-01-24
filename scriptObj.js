class Usuario {

    

    constructor(name, username, email){
        
    this.name = name,
    this.username = username,
    this.email = email

    }


    async searchUsers(){

    let users = []
    let filteredUsers = []

    


    const url = 'https://jsonplaceholder.typicode.com/users'
    await fetch(url).then(response => response.json())
    .then(data => users = [...data])
    console.log(users)

    }
    
    
}//

const p1 = new Usuario
p1.searchUsers()


