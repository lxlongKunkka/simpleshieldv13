// tests go here; this will not be compiled when this package is used as an extension.
Servo.SetLED(1, false)
Servo.SetLED(2, true)

basic.forever(function() {
    Servo.SetLED(1, false)
    Servo.SetLED(2, true)
    basic.pause(1000);
    Servo.SetLED(2, false)
    Servo.SetLED(1, true)
    basic.pause(1000);
})