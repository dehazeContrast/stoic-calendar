//process for user DOB string and then return amt of time lived
function time_lived(userDOBString) {
    //ASSUMPTION : selected userDOB is within the last 80 years
    var userDOB = dayjs(userDOBString)
    var now = dayjs()
    
    //take in userDOB and make the difference in regards to the current date
    var difference = dayjs.duration(now.diff(userDOB))

    //return the difference object's respective durations
    return {
        years: difference.year(),
        months: difference.months(),
        days: difference.days(),
        hours: difference.hours(),
        minutes: difference.minutes()
    }
}