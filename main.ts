datalogger.deleteLog(datalogger.DeleteType.Full)
loops.everyInterval(3000, function () {
    datalogger.log(
    datalogger.createCV("temperature", input.temperature()),
    datalogger.createCV("Direction", input.compassHeading())
    )
})
