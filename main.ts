Mbit_IR.onPressEvent(RemoteButton.Right, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Right)
    basic.pause(100)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.Up, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
    basic.pause(100)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.Light, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
})
Mbit_IR.onPressEvent(RemoteButton.Left, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Left)
    basic.pause(100)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.Down, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Back)
    basic.pause(100)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Mbit_IR.init(Pins.P8)
