// Файл, демонстрирующий то, как фреймворк создает среду (песочницу) для
// исполнения приложения, загружает приложение, передает ему песочницу в
// качестве глобального контекста и получает ссылу на экспортируемый
// приложением интерфейс. Читайте README.md в нем задания.

// Фреймворк может явно зависеть от библиотек через dependency lookup
var fs = require('fs'),
    vm = require('vm'),
	aaa = require('util');

//console.log(process.argv);	
// Создаем контекст-песочницу, которая станет глобальным контекстом приложения
var context = { module: {}, console: console ,
				setTimeout: setTimeout,
					setInterval: setInterval,
					qqq: aaa};
context.global = context;

var sandbox = vm.createContext(context);

myConcloleFunc(){
	console.log('process.argv[0]')'
	con
}

// Читаем исходный код приложения из файла
//var fileName = './application2.js';

var filename = process.argv;

for(var i = 1; i < filename.length; i++){

var tmp = './' + filename[i] + '.js';

fs.readFile(tmp, function(err, src) {
  // Тут нужно обработать ошибки
  
  // Запускаем код приложения в песочнице
  var script = vm.createScript(src, tmp);
  script.runInNewContext(sandbox);
  
  // Забираем ссылку из sandbox.module.exports, можем ее исполнить,
  // сохранить в кеш, вывести на экран исходный код приложения и т.д.
});
}

