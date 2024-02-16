// prompt('Czy jesteś pudzianem?');

// alert('Hmmm... tak myślałem');

// prompt('Powiedz coś jak Pudzian');

// alert('Ja też tanio skóry nie sprzedam!');

// const name = 'Krystian';
// console.log(`Mam na imię: ${name}`);

// let myAge = 100;

// const myName = 'Krystian';
// alert('Mój wiek to: ' + myAge);

// myAge = 25;
// alert('Mój wiek to: ' + myAge);

// alert(`Mam na imię ${myName} i ${myAge} lat.`)

// let myName = prompt('Jak sie nazywasz?')
// let myAge = prompt('Ile masz lat?')

// alert(`Hej! Nazywasz się ${myName} a twój wiek to ${myAge}.`)

// let x = Number(prompt('Podaj pierwszą liczbę'));
// let y = Number(prompt('Podaj drugą liczbę'));
// alert(x + y);

// const myMoney = 3000;

// if (myMoney < 1000) {
// 	alert('Mało pieniędzy');
// } else {
//     alert('Dużo pieniędzy')
// }

// const imie = 'Krystian'

// if(imie === 'Krystian') {
//     alert('Masz na imie Krystian.')
// } else if (imie === 'Adam') {
//     alert('Masz na imię Adam.')
// } else {
//     alert('Masz inne imię.')
// }

// const age = prompt('Ile masz lat?');

// if (age < 16) {
// 	alert('Dzwonie po rodziców.');
// } else if (age >= 16 && age < 18) {
// 	alert('Możesz kupić tylko piwo.');
// } else {
// 	alert('Możesz kupić piwo i whisky.');
// }

// const age = prompt('Ile masz lat?');

// if (age < 16) {
// 	alert('Dzwonie po rodziców.');
// } else if ( age >= 18) {
// 	alert('Możesz kupić piwo i whisky.');
// } else {
// 	alert('Możesz kupić tylko piwo.');
// }

// const number1 = Number(prompt('Podaj liczbę nr 1'));
// const number2 = Number(prompt('Podaj liczbę nr 2'));
// const number3 = Number(prompt('Podaj liczbę nr 3'));
// let smallestNumber;

// if (number1 < number2 && number1 < number3) {
// 	smallestNumber = number1;
// } else if (number2 < number1 && number2 < number3) {
// 	smallestNumber = number2;
// } else if (number3 < number1 && number3 < number2) {
// 	smallestNumber = number3;
// }

// alert(`Najmniejsza liczbą z podanych to: ${smallestNumber}`);

// const firstNumber = Number(prompt('Podaj liczbę nr 1'));
// const secondNumber = Number(prompt('Podaj liczbę nr 2'));
// const math = prompt('Podaj rodzaj działania matematycznego');

// if (math === '+') {
// 	alert(firstNumber + secondNumber);
// } else if (math === '-') {
// 	alert(firstNumber - secondNumber);
// } else if (math === '*') {
// 	alert(firstNumber * secondNumber);
// } else if (math === '/') {
// 	if (secondNumber !== 0) {
// 		alert(firstNumber / secondNumber);
// 	} else {
// 		alert('Nie dziel przez 0!');
// 	}
// }

// const liczba1 = Number(prompt('Podaj liczbę nr 1'));
// const liczba2 = Number(prompt('Podaj liczbę nr 2'));
// const operation = prompt('Podaj rodzaj działania matematycznego');

// switch (operation) {
// 	case '+':
// 		alert(liczba1 + liczba2);
// 		break;
// 	case '-':
// 		alert(liczba1 - liczba2);
// 		break;
// 	case '*':
// 		alert(liczba1 * liczba2);
// 		break;
// 	case '/':
// 		if (liczba2 !== 0) {
// 			alert(liczba1 / liczba2);
// 		} else {
// 			alert('Nie dziel przez 0!');
// 		}
// 		break;
// 	default:
// 		alert('Nie znam tej operacji, sorki:(');
// }

// ------------------------------
// HOMEWORK
// ------------------------------

// 1.  Napisz program, który obliczy pole trójkąta prosząc użytkownika o długość podstawy
// oraz wysokość trójkąta. Zabezpiecz program przed podaniem ujemnych wartości.

// const base = prompt('Podaj długość podstawy trójkąta.');
// const height = prompt('Podaj długość wysokości trójkąta.');

// if (base <= 0 || height <= 0) {
// 	alert('Wpisano wartość ujemną lub zero!');
// } else {
// 	alert(0.5 * base * height)
// }

// 2. Napisz za pomocą prompt() prostą grę tekstową, gdzie gracz będzie mógł podjąć co
// najmniej 2 wybory.
// Przykład: wyświetlamy informację, że gracz idzie przez las i spotyka wilka. Za
// pomocą prompt() pytamy co robi: jeżeli gracz wpisze „uciekam” to pojawi się jakaś
// wiadomość, jeżeli wpisze „walczę” to pojawi się inna.

// const question = prompt('Idziesz do sklepu na zakupy, ale jest weekend i w portfelu masz jedynie 25 zł. Co robisz? Kupujesz alkohol czy jedzienie?');

// if (question === 'alkohol') {
// 	alert("Dobrej imprezy!")
// } else if (question === "jedzenie") {
// 	alert('Smacznego!')
// } else {
// 	alert("Musisz wpisać co wybierasz: alkohol czy jedzenie")
// }

// 3. Zapytaj użytkownika o podanie dwóch liczb dodatnich:
// a. jeżeli obie liczby są dodatnie, to oblicz i pokaż ich średnią
// b. jeżeli któraś z liczb (np. X) jest ujemna to pokaż wiadomość „Liczba X jest
// ujemna!”.
// c. Jeżeli obie są ujemne to pokaż wiadomość „Nie podałeś/podałaś ani jednej
// dodanie liczby!”

// const firstNumber = Number(prompt('Podaj pierwszą liczbe dodatnią.'));
// const secondNumber = Number(prompt('Podaj drugą liczbe dodatnią.'));

// if (firstNumber >= 0 && secondNumber >= 0) {
// 	alert((firstNumber + secondNumber) / 2);
// } else if (firstNumber < 0 && secondNumber < 0) {
// 	alert('Nie podałeś/podałaś ani jednej dodatniej liczby!');
// } else if (firstNumber < 0 || secondNumber < 0) {
// 	alert('Jedna z liczb jest ujemna!');
// }

// 4. Napisz program, który oblicza pierwiastki równania kwadratowego, czyli:
// a. prosi użytkownika o podanie współczynnika a, b oraz c równania
// kwadratowego
// b. oblicza x1 oraz x2 wg wzoru (trzeba użyć wbudowanego obiektu Math np. do
// pierwiastków):

// const a = Number(prompt('Podaj współczynnik a równania kwadratowego.'));
// const b = Number(prompt('Podaj współczynnik b równania kwadratowego.'));
// const c = Number(prompt('Podaj współczynnik c równania kwadratowego.'));
// const delta = b * b - 4 * a * c;
// const x1 = ((-b - Math.sqrt(delta)) / 2) * a;
// const x2 = ((-b + Math.sqrt(delta)) / 2) * a;

// if (delta > 0) {
// 	alert(
// 		`Delta dodatnia, wartości pierwiastków równania kwadratowego wynoszą: x1 = ${x1} oraz x2 = ${x2}.`
// 	);
// } else if (delta === 0) {
// 	alert(
// 		`Delta zerowa, wartość pierwiastka równania kwadratowego wynosi: x1 = ${x1}.`
// 	);
// } else {
// 	alert(`Delta jest ujemna, brak pierwiastków równania kwadratowego.`);
// }

// 5. Użytkownik podaje pięcioliterowe słowo - nasz program sprawdza, czy podane słowo
// jest palindromem (tzn. czytane od tyłu i przodu jest takie samo, np. kajak, radar,
// zakaz).

// const originalWord = prompt('Podaj piecioliterowe słowo.');

// if (originalWord === originalWord.split('').reverse().join('')) {
// 	alert('Podane słowo jest palindromem.');
// } else {
// 	alert('Podane słowo nie jest palindromem.');
// }

// 6. Napisz program, który skraca nazwisko - użytkownik poda imię i nazwisko, a
// program wyświetli to imię oraz tylko pierwszą literę nazwiska z kropką. Przykład:
// Wiktor Jurczyszyn -> Wiktor J.

// const originalName = prompt('Podaj imię i nazwisko.');
// const splitedName = originalName.split(' ');
// const firstName = splitedName[0]
// const surname = splitedName[1].slice(0, 1);

// alert(`${firstName} ${surname}.`);

// 7. Utwórz pustą tablicę o nazwie moreThan10. Użytkownik następnie podaje kolejno 3
// liczby - każda liczba, która jest większa od 10 trafia do tablicy moreThan10. Na
// koniec wyświetl tablicę moreThan10 za pomocą console.log().

// const moreThan10 = [];

// const first = Number(prompt('Podaje pierwsza liczbę.'));
// const second = Number(prompt('Podaje drugą liczbę.'));
// const third = Number(prompt('Podaje trzecią liczbę.'));

// if (first > 10) {
// 	moreThan10.unshift(first);
// }
// if (second > 10) {
// 	moreThan10.unshift(second);
// }
// if (third > 10) {
// 	moreThan10.unshift(third);
// }

// console.log(moreThan10);

// 8. Napisz program, w którym użytkownik podaje 3 liczby, a program losuje jedną z nich.
// (podpowiedź: wrzuć liczby użytkownika do tablicy i wylosuj za pomocą Math.random
// jeden z indeksów tej tablicy)

// const first = Number(prompt('Podaje pierwsza liczbę.'));
// const second = Number(prompt('Podaje drugą liczbę.'));
// const third = Number(prompt('Podaje trzecią liczbę.'));
// const array = []
// array.unshift(first,second,third)

// alert(array[Math.floor(Math.random() * array.length)])

// ---------------------------
// NIEDZIELA - 03.12.2023
// ---------------------------

// Ćwiczenie 7

// const cars = ['Audi', 'Toyota', 'BMW', 'Fiat']
// const germanCars = []

// germanCars.push(cars[0], cars[2])

// console.log(germanCars);

// alert(cars)
// alert(cars.join())

// Ćwiczenie 8

// const word = 'kRYStiaN';

// const formatterWord1 = word[0].toUpperCase();
// const formatterWord2 = word.slice(1).toLowerCase();

// console.log(formatterWord1+formatterWord2);

// Ćwiczenie 9

// const motto = prompt('Podaj swoje motto życiowe.');

// if (motto.length > 10 && motto.indexOf('życie') !== -1) {
// 	alert('Ooo, mądre słowa.');
// } else {
// 	alert('Eh, znam lepsze motta.');
// }

// Ćwiczenie 10

// for (let i = 0; i < 15; i++) {
//     console.log('Pętla!');
// }

// let i = 0;
// while (i < 15) {
//     i++;
//     console.log('Pętla!');
// }

// for (let i = 100; i >= 50; i--) {
//     console.log([i]);
// }

// const first = Number(prompt('Podaj pierwszą liczbę.'));
// const second = Number(prompt('Podaj drugą liczbę.'));

// for (let i = first; i <= second; i++) {
// 	console.log(i);
// }

// const films = ['Avatar', 'Jumanji', 'Saw', 'Killer', 'Pitbull']

// for (let i = 0; i < films.length; i++) {
//     console.log(films[i]);
// }

// Ćwiczenie 11

// const array = [3,5,2,45,12,32,8]
// const min = Math.min(...array)
// const max = Math.max(...array)

// console.log(min);
// console.log(max);

// ----------------------------------

// const array = [3, 5, 2, 45, 12, 32, 8];
// let min = array[0];
// let max = array[0];

// for (let i = 0; i < array.length; i++) {
// 	min = Math.min(min, array[i]);
// 	max = Math.max(max, array[i]);
// }

// console.log('Najmniejsza liczba to: ' + min);
// console.log('Największa liczba to: ' + max);

// alternatywa

// for (let i = 0; i < exampleArray.length; i++) {
// 	if (exampleArray[i] > max) {
// 	  max = exampleArray[i];
// 	}
// 	if (exampleArray[i] < min) {
// 	  min = exampleArray[i];
// 	}
//   }

// Ćwiczenie 12

// const a = [3, 5, 2, 45, 12, 32, 8];
// let swapped;
// let temp;

// do {
// 	swapped = false;
// 	for (let i = 0; i < a.length - 1; i++) {
// 		if (a[i] > a[i + 1]) {
// 			temp = a[i];
// 			a[i] = a[i + 1];
// 			a[i + 1] = temp;
// 			swapped = true;
// 		}
// 	}
// } while (swapped);

// console.log('Posortowana tablica: ' + a);

// Ćwiczenie 13

// const myself = {
// 	name: 'Krystian',
// 	hairColor: 'dark',
// 	hobby: 'swimming',
// 	age: '27',
// };

// console.log(myself);

// if (myself.age < 100) {
//     console.log('O, witaj młodzieńcze');
// }

// if (myself.name !== 'Steve') {
//     myself.name = 'Steve'
//     console.log(myself);
// }

// Ćwiczenie 13.2

// const products = {
// 	product1: {
// 		name: 'Pasta',
// 		price: 25,
// 		quanity: 5,
// 	},
// 	product2: {
// 		name: 'Pizza',
// 		price: 20,
// 		quanity: 3,
// 	},
// 	product3: {
// 		name: 'Cola',
// 		price: 8,
// 		quanity: 4,
// 	},
// };

// const doZamowienia = [];

// for (const productId in products) {
// 	const product = products[productId];
// 	product.price *= 0.8;
// 	if (product.quanity < 5) {
// 		doZamowienia.push(product.name);
// 	}
// }

// console.log(products);
// console.log(doZamowienia);

// alternatywa

// let products = [
// 	{ name: 'pasta', price: 25, quanity: 7 },
// 	{ name: 'cola', price: 6, quanity: 3 },
// 	{ name: 'pizza', price: 23, quanity: 13 },
// 	{ name: 'rice', price: 5, quanity: 29 },
// 	{ name: 'butter', price: 4, quanity: 11 },
// ];
// let doZamowienia = [];
// for (let i = 0; i < products.length; i++) {
// 	products[i].price = products[i].price * 0.8;
// 	if (products[i].quanity < 5) {
// 		doZamowienia.push(products[i]);
// 	}
// }
// console.log(products);
// console.log(doZamowienia);

// Ćwiczenie 14

// const games = [];

// function addToList(a,b,c,d,e,f) {
// 	games.push(a,b,c,d,e,f);
// }

// function removeFromList(a,b,c,d,e,f) {
// 	games.pop(a,b,c,d,e,f);
// }

// addToList('Diablo','LOL','UNO','Poker','Warcaby','Berek');
// // removeFromList('Diablo')

// console.log(games);
