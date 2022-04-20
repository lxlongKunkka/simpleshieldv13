// tests go here; this will not be compiled when this package is used as an extension.
Servo.SetLED(2, true)
Servo.SetLED(3, false)
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Filling(COLOR.BLUE)
music.playTone(Note.C, music.beat())
basic.forever(function() {
    Servo.SetLED(2, true)
    Servo.SetLED(3, false)
    basic.pause(1000);
    Servo.SetLED(2, false)
    Servo.SetLED(3, true)
    basic.pause(1000);
})

basic.forever(function() {
    if (SimpleShieldKey.Listen_Key(KEY.A)) {
        LCD1IN8.DrawRectangle(randint(0, 80), randint(0, 80), randint(80, 160), randint(80, 160), randint(0, 65535), DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
    }
    if (SimpleShieldKey.Listen_Key(KEY.B)) {
        LCD1IN8.LCD_Filling(randint(0, 65535))
    }
    if (SimpleShieldKey.Listen_Key(KEY.UP)) {
        //Motor.MotorRun(Motors.M1, 255)
        Servo.Servo(12, 0)
    }
    if (SimpleShieldKey.Listen_Key(KEY.DOWN)) {
        //Motor.MotorRun(Motors.M1, -255)
        Servo.Servo(12, 60)
    }
    if (SimpleShieldKey.Listen_Key(KEY.LEFT)) {
        //Motor.MotorRun(Motors.M1, 0)
        Servo.Servo(12, 120)
    }
    if (SimpleShieldKey.Listen_Key(KEY.RIGHT)) {
        //Motor.MotorRun(Motors.M1, 0)
        Servo.Servo(12, 180)
    }
    if (input.buttonIsPressed(Button.A)) {
        LCD1IN8.DrawRectangle(randint(0, 80), randint(0, 80), randint(80, 160), randint(80, 160), randint(0, 65535), DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1);
    }
    if (input.buttonIsPressed(Button.B)) {
        LCD1IN8.LCD_Filling(randint(0, 65535))
    }
})
