// Определение функции для отображения текущего времени 
function displayTime() {
	var element = document.getElementById("clock"); // Найти элемент с id="clock" 
	var now = new Date();	// Получить текущее время
	element.innerHTML = now.toLocaleTimeString(); // Отобразить его 
	setTimeout(displayTime, 1000);	// Вызвать снова через 1 сек
}

window.onload = displayTime; // Начать отображение времени после загрузки документа