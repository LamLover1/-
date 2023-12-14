//Регистрация

let Name = document.querySelector('#name-rigstr')
let Login = document.querySelector('#login-rigstr');
let Pass = document.querySelector('#pass-rigstr');

const button_registration = document.querySelector('#button-registration');
const auth_button = document.querySelector('.auth-button');
const storag_user = JSON.parse(localStorage.getItem('user'));

let users = new Array();

// TODO: это по сути делается классом, но и это здесь излишне, можно сделать просто
// объект, где и хранить эти данные
class User {
constructor(Name,Login,Pass){
    
    this.Name = Name;
    this.Login = Login;
    this.Pass = Pass;
    }
}

function ID(users) {
    return users.length;
}

if (button_registration) {
    button_registration.addEventListener('click', () => {
        const NameUser = Name.value;
        const LoginUser = Login.value;
        const PassUser = Pass.value;

        const user = new User(NameUser, LoginUser, PassUser);

        const UserID = 'user' + ID(users);

        users[UserID] = user;

         users.push(user);

         if(storag_user.find(item => item.Login == LoginUser ))
         {
            alert("Такой логин уже существует " + LoginUser)
         }

        localStorage.setItem('user', JSON.stringify(users));
    })
}

if (auth_button) {
    let login_auth = document.querySelector('.login-auth');
    let pass_auth = document.querySelector('.pass-auth');

    auth_button.addEventListener('click', () => {
       
        // Поразбираться с функциями с работой с массивами
        // https://learn.javascript.ru/array-methods
        // Конкретно здесь можно использовать find и хранить массив с объектами

        if (storag_user.find(item => item.Login == login_auth.value && storag_user.find(item => item.Pass == pass_auth.value))) {
           location.href="ГлавнаяСтраница.html"
        } else {
            alert("Неверный логин или пароль");
        }
    })
}
