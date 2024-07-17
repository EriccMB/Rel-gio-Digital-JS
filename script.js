function horaAtual() {
    let data = new Date()
    let horas = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    if (horas <=9) horas = '0' + horas
    if (minutos <=9) minutos = '0' + minutos
    if (segundos <=9) segundos = '0' + segundos
    let horaAtual = horas + ':' + minutos + ':' + segundos 
    let spanContent = document.getElementById("hora")
    spanContent.innerHTML = horaAtual
}

horaAtual()

setInterval(horaAtual, 10)