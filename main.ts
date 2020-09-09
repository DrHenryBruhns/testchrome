bluetooth.onBluetoothConnected(function () {
    connected = true
    basic.showIcon(IconNames.LeftTriangle)
})
bluetooth.onBluetoothDisconnected(function () {
    connected = false
    basic.showIcon(IconNames.No)
})
let connected = false
bluetooth.startUartService()
let counter = 0
basic.showIcon(IconNames.SmallSquare)
basic.forever(function () {
    basic.pause(100)
    counter += 1
})
