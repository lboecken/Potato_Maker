let TimeToDisplay = new Date()

let Seconds;
let Minutes;
let Hours;
let Day;
let Month;
let Year;

function GetSeconds() {
    Seconds = TimeToDisplay.getSeconds();
    Seconds = AddLeadingZero(Seconds);
}

function GetMinutes() {
    Minutes = TimeToDisplay.getMinutes();
    Minutes = AddLeadingZero(Minutes);
}

function GetHours() {
    Hours = TimeToDisplay.getHours();
    Hours = AddLeadingZero(Hours);
}

function GetDay() {
    Day = TimeToDisplay.getDate();
}

function GetMonth () {
    Month = TimeToDisplay.getMonth();
}

function GetYear () {
    Year = TimeToDisplay.getYear();
}



function AddLeadingZero(number) {
    number = number.toString();
    if (number.length === 1) {
       return '0' + number; 
    } else {
        return number;
    }
}

function LoopTime () {
    setInterval(GetSeconds(), 1000);
    setInterval(GetMinutes(), 1000);
    setInterval(GetHours(), 1000);
    setInterval(GetDay(), 1000);
    setInterval(GetMonth(), 1000);
    setInterval(GetYear(), 1000);
    }

LoopTime();

// const TimeKeeper = {
//     Seconds: 0,
//     Hours: null,
//     Minutes: null,
//     GetSeconds: function() {
//         TimeKeeper.Seconds = TimeToDisplay.getSeconds();
//         console.log(TimeKeeper.Seconds);
//     },
//     LoopTime: function() {
//         setInterval(TimeKeeper.GetSeconds(), 1000);
//     }
// }

// TimeKeeper.LoopTime();
// setInterval(TimeKeeper.GetSeconds(),1000);

// function AddLeadingZero(num) {
//     num = String(num);
//     if (num.length === 0) {
//         num =  '0' + num;
//         return num;
//     } else {
//         return num;
//     }
    
// }

// function GetSeconds() {
//     return TimeToDisplay.getSeconds();
// }

// function GetMinutes() {
//     minutes =  TimeToDisplay.getMinutes();
//     AddLeadingZero(minutes)
// }
// const Clock = {
//     GetSeconds : function() { 
//             return TimeToDisplay.getSeconds();
//         },
//     GetMinutes : function() {
//             return TimeToDisplay.getMinutes();
//     }
// }

// Clock.GetMinutes = function() {
//     null
// }

// Clock.GetHours = function() {
//     null
// }

// Clock.GetDay = function() {
//     null
// }

// Clock.GetMonth = function() {
//     null
// }

// Clock.GetYear = function() {
//     null
// }