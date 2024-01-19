function speeedDetector(speed) {

    //declare speed limit, demerit points and demerit limits
    const speedLimit = 70
    let demeritPointlimit = 12
    let demeritPoints = 0

    if (speed < speedLimit) {
        return "Ok"
    }
    else{Math.floor((speed - speedLimit)/ 5)
        let result = `Points: ${demeritPoints}`

        if (demeritPoints > demeritPointlimit) {
            result = "License suspended"
        }
    
        return result

    }

}