// tests go here; this will not be compiled when this package is used as an extension.
Servo.SetLED(2, true)
Servo.SetLED(3, false)
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Filling(COLOR.BLUE)
basic.forever(function() {
    Servo.SetLED(2, true)
    Servo.SetLED(3, false)
    basic.pause(1000);
    Servo.SetLED(2, false)
    Servo.SetLED(3, true)
    basic.pause(1000);
})
input.onButtonPressed(Button.A, function() {
    LCD1IN8.DrawRectangle(randint(0, 80), randint(0, 80), randint(80, 160), randint(80, 160), randint(0, 65535), DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1)
})
input.onButtonPressed(Button.B, function() {
    LCD1IN8.LCD_Filling(randint(0, 65535))
})