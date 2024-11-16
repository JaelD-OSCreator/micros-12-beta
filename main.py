basic.show_leds("""
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    """)
basic.pause(2000)
basic.clear_screen()
basic.show_string("Bienvenido/a de vuelta")
basic.pause(500)
basic.show_string("Pulsa \"A\" para seleccionar a Jael, o pulsa \"B\" para seleccionar a Jordi")
def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)