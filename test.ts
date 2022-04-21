// tests go here; this will not be compiled when this package is used as an extension.
Servo.SetLED(2, true)
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Filling(COLOR.BLUE)
music.playTone(Note.C, music.beat())
basic.forever(function() {
    Servo.SetLED(2, true)
    basic.pause(1000);
    Servo.SetLED(2, false)
    basic.pause(1000);
})
let item: number = 1
basic.forever(function() {
    SimpleShieldKey.Read74HC165()
    if (SimpleShieldKey.Listen_Key(KEY.A)) {
        Servo.SetLED(3, true)
    }
    if (SimpleShieldKey.Listen_Key(KEY.B)) {
        Servo.SetLED(3, false)
    }
    if (SimpleShieldKey.Listen_Key(KEY.MENU)) {
        Servo.SetLED(3, false)
    }
})
