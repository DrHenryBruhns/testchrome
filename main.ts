bluetooth.onBluetoothConnected(function () {
    connected = true
    basic.showIcon(IconNames.LeftTriangle)
})
bluetooth.onBluetoothDisconnected(function () {
    connected = false
    basic.showIcon(IconNames.No)
})
let from_server = ""
let connected = false
bluetooth.startUartService()
let counter = 0
basic.showIcon(IconNames.SmallSquare)
basic.forever(function () {
    from_server = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (from_server == "reset") {
        control.reset()
    }
})
basic.forever(function () {
    basic.pause(100)
    counter += 1
})
basic.forever(function () {
    if (connected == true) {
        bluetooth.uartWriteString("Test:" + counter)
    }
})
