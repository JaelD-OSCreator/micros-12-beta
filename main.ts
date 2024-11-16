input.onButtonPressed(Button.A, function () {
    if (Jael == 1) {
        basic.showString("Hola Jael")
        log += 1
    } else {
        log += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (Jordi == 1) {
        basic.showString("Hola Jordi")
        log += 1
    } else {
        log += 1
    }
})
let log = 0
let Jordi = 0
let Jael = 0
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
