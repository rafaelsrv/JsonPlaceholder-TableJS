class Usuario {

    constructor(name, username, email){
        
    this.name = name,
    this.username = username,
    this.email = email

    }

    async searchUsers(){

    const url = 'https://jsonplaceholder.typicode.com/users'
    await fetch(url).then(response => response.json())
    .then(data => users = [...data])
    
    users.map(user=>{
        new Usuario(user.name, user.username, user.email)
    })
    
    console.log(Usuario)
    }
    
}//


