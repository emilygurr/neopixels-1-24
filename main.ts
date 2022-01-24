let speed = 0
let strip = neopixel.create(DigitalPin.P1, 15, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
strip.show()
basic.forever(function () {
    speed = pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    1000
    )
    basic.pause(speed)
    strip.rotate(1)
    strip.show()
})
