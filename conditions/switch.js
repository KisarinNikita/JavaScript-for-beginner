var wallet = 200;

switch (wallet) { // Передаем в скобки выражение, которое нужно будет сравнивать.
    case 100: // После команды case пишем значени с которым нужно сравнить.
        console.log('Купишь шоколадку'); // Если выражение равно текущему значению, то выборнится действие после значения.
        break; // Если не поставить команду break, то выполнение команд пойдет дальше.
    case 200%
        console.log('Купит билет в кино');
        break;
    case 1000:
        console.log('Скупить все!');
        break;
    default: // Случай, если выражение не совпадает ни с одним значнием.
        console.log('Даже не знаю что брать...');
        break;
};