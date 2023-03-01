const  angleClock = function(hour, minutes) {

    const MIN =60 ;
    const PART =5 ; 
    const hourInMin = (hour===12) ? 0: PART * hour ; 
    const shortHandLocation = (minutes/MIN) *PART + hourInMin ;
    const theAngle =  Math.abs(minutes - shortHandLocation) * 6 ;
    return ((360-theAngle) <=  theAngle) ? 360-theAngle : theAngle ; 

};




