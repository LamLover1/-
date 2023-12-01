

//Регистрация

let Name = document.querySelector('#Name')
let Login = document.querySelector('#Login');
let Pass = document.querySelector('#Pass');

let  users = {};

function User (Name, Login, Pass){
    this.Name = Name;
    this.Login = Login;
    this.Pass = Pass;

};

function ID (users) {

    return Object.keys(users).length;

}

buttonReg.addEventListener('click', () => {

    const NameUser =  Name.value;
    const LoginUser = Login.value;
    const PassUser = Pass.value;

    const user = new User(NameUser, LoginUser, PassUser);

    const UserID = 'User' + ID(users);

    users[UserID] = user;

    let UserJSON = JSON.stringify(users);

    localStorage.setItem("user", UserJSON);

    console.log(users);

})