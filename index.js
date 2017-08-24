// var years = prompt('Сколько вам лет?', '');
// if (years < 18) {
// 	alert ("Идите нахуй! Вы несовершеннолений, вам " + years + " лет");
// }
// else {
// 	alert ("Все ОК! Можете ебать данную мадам!");
// }


// var age = prompt('возраст?', 18);

// var message = (age < 3) ? 'Здравствуй, малыш!' :
//   (age < 18) ? 'Привет!' :
//   (age < 100) ? 'Здравствуйте!' :
//   'Какой необычный возраст!';

// alert( message );


// var ecma = prompt("Каково «официальное» название JavaScript?", '');
// if (ecma == "ECMAScript"){
// 	alert("Верно!")
// }
// else if (ecma != "ECMAScript") {
// 	alert("Не знаете? «ECMAScript»!")
// }


// var num = prompt("Введите любимое число", '');
// if (num > 0){
// 	alert(1)
// }
// else if (num < 0 ){
// 	alert(-1)
// }
// else if (num == 0){
// 	alert(0)
// }


var userName = prompt("Введите логин", "" );

if (userName == "Админ") {
	var pass = prompt("Введите пароль", "")
	if (pass == null) {
		alert("Вход отменен")
	}
	else if (pass == "Черный властелин"){
		alert("Добро пожаловать!")
	}
	else {
		alert('Пароль неверен');
	}
}
else if (userName == null) {
	alert("Вход отменен")
}
else {
	alert("Я вас не знаю")
}

// var a = 1;
// var b = 2;
// var result;
// result = (a + b < 4) ? "Мало" : "Много";
// alert(result);


// var message = (login == 'Вася') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' :
//   '';

