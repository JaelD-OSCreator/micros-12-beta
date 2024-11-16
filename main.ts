input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
    if (Jael == 1) {
        radio.setGroup(1)
        basic.showString("Hola Jael")
        log += 1
        basic.pause(2000)
        basic.showString("Toca el logo para enviar Hola a Jordi")
        if (input.logoIsPressed()) {
            radio.setGroup(1)
            radio.sendString("Hola")
        }
    } else {
        log += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (Jordi == 1) {
        basic.showString("Hola Jordi")
        radio.setGroup(1)
        log += 1
        basic.pause(2000)
        basic.showString("Toca el A+B para enviar Hola a Jael")
        radio.setGroup(1)
        if (input.buttonIsPressed(Button.AB)) {
            radio.setGroup(1)
            radio.sendString("Hola")
        }
    } else {
        log += 1
    }
})
let log = 0
let Jordi = 0
let Jael = 0
radio.setGroup(1)
basic.showLeds(`
    # # . . .
    # # # # .
    . # # # .
    # # # # .
    # # . . .
    `)
basic.pause(2000)
basic.clearScreen()
basic.showString("Bienvenido/a de vuelta")
basic.pause(500)
basic.showString("Pulsa \"A\" para seleccionar a Jael, o pulsa \"B\" para seleccionar a Jordi")
Jael = 1
Jordi = 1
