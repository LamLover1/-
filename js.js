//Регистрация

let Name = document.querySelector('#Name')
let Login = document.querySelector('#Login');
let Pass = document.querySelector('#Pass');

const regButton = document.getElementById('buttonReg');
const authButton = document.querySelector('.authButton');

let users = {};

// TODO: это по сути делается классом, но и это здесь излишне, можно сделать просто
// объект, где и хранить эти данные
function User (Name, Login, Pass){
    this.Name = Name;
    this.Login = Login;
    this.Pass = Pass;
}

function ID(users) {
    return Object.keys(users).length;
}

if (regButton) {
    regButton.addEventListener('click', () => {
        const NameUser = Name.value;
        const LoginUser = Login.value;
        const PassUser = Pass.value;

        const user = new User(NameUser, LoginUser, PassUser);

        const UserID = 'User' + ID(users);

        users[UserID] = user;

        let UserJSON = JSON.stringify(users);

        localStorage.setItem("user", UserJSON);
    })
}

if (authButton) {
    let Login1 = document.querySelector('.Login1');
    let Pass1 = document.querySelector('.Pass1');

    authButton.addEventListener('click', () => {
        let x = JSON.parse(localStorage.getItem('user'));
        // Поразбираться с функциями с работой с массивами
        // https://learn.javascript.ru/array-methods
        // Конкретно здесь можно использовать find и хранить массив с объектами
        if (Login1.value == x.User0.Login && Pass1.value == x.User0.Pass) {
            document.location = 'ГлавнаяСтраница.html';
        } else {
            alert("Неверный логин или пароль");
        }
    })
}
