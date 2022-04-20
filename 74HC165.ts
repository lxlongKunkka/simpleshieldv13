// Add your code here

let SR_CLK = DigitalPin.P16;
let INSR0_DATA = DigitalPin.P12;        //data

enum KEY {
    UP = 0,
    DOWN,
    LEFT,
    RIGHT,
    A,
    B,
    MENU,
    IN1,
    IN2,
    IN3,
    IN4
};

//% weight=20 color=#3333ff icon="\uf11b"
namespace SimpleShieldKey {
    function Read74HC165(): number {
        let val = 0;
        Servo.FullOff(8);
        Servo.SetLED(1, false);
        control.waitMicros(25000);
        Servo.FullOn(8);
        Servo.SetLED(1, true);
        let i = 0;
        for (i = 0; i < 16; i++) {
            val = val << 1;
            let tmp = pins.digitalReadPin(INSR0_DATA);
            val |= tmp;
            pins.digitalWritePin(SR_CLK, 0);
            control.waitMicros(10000);
            pins.digitalWritePin(SR_CLK, 1);
        }

        return val;
    }

    //% blockID==Listen_Key
    //% block="Key %pin |Press"
    //% weight=90
    export function Listen_Key(pin: KEY): boolean {
        let val = Read74HC165();
        let res = 1;
        switch (pin) {
            case KEY.UP:
                res = (val >> 1 + 8) & 0x01;
                break;
            case KEY.DOWN:
                res = (val >> 2 + 8) & 0x01;
                break;
            case KEY.LEFT:
                res = (val >> 0 + 8) & 0x01;
                break;
            case KEY.RIGHT:
                res = (val >> 3 + 8) & 0x01;
                break;
            case KEY.A:
                res = (val >> 4 + 8) & 0x01;
                break;
            case KEY.B:
                res = (val >> 5 + 8) & 0x01;
                break;
            case KEY.MENU:
                res = (val >> 6 + 8) & 0x01;
                break;
            case KEY.IN1:
                res = (val >> 3) & 0x01;
                break;
            case KEY.IN2:
                res = (val >> 2) & 0x01;
                break;
            case KEY.IN3:
                res = (val >> 1) & 0x01;
                break;
            case KEY.IN4:
                res = (val >> 0) & 0x01;
                break;
            default:
                break;
        }
        if (res == 1) {
            return false;
        }
        else {
            return true;
        }
    }
}

