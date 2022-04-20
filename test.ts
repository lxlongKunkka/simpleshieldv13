// tests go here; this will not be compiled when this package is used as an extension.
Servo.SetLED(1, false)
Servo.SetLED(2, true)
Servo.SetLED(3, false)

basic.forever(function() {
    Servo.SetLED(1, false)
    Servo.SetLED(2, true)
    Servo.SetLED(3, false)
    basic.pause(1000);
    Servo.SetLED(1, true)
    Servo.SetLED(2, false)
    Servo.SetLED(3, true)
    basic.pause(1000);
})
