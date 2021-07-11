const sentenze = ['a tiaaaaaa, ombrellinoooo!', 'vu viriri ca fazzu u fitusu?', 'a fattilla na passiata!', 'a tantu nun ci ne coviddi!', 'chistu ie cagnuleddu', 'a chissu fra tri ghionna mori', 'Attento alla DELTAAAAAAAA', 'viri ca ci su petri na lenticchiaaaaa', "te l'hau rittu iu!", 'a rilla quacchi cosa!', 'a mettiti sa spacchiu ri mascherina!'];


const bottone = document.getElementById('bottone');
const testo = document.getElementById('frase');
//testo.innerHTML = 'aaaa';

function sent()
{
	testo.innerHTML = '';
	const nome = document.getElementById('input').textContent;
	const frase = 'AH-HA, ' + sentenze[Math.floor(Math.random() * sentenze.length)];
	testo.innerHTML = frase;
	
}

bottone.addEventListener('click', sent);