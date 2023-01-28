input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    if (cislo % 2 == 0) {
        basic.showString("SUDE")
    } else {
        basic.showString("LICHE")
    }
})
let cislo = 0
cislo = randint(10, 99)
basic.showNumber(cislo)
