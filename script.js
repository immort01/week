

let date = new Date();

let dayNumber = date.getDay();

let theDayIs;

let quote;

switch(dayNumber){

    case 0:
        theDayIs = "Sunday";
        quote = "Time to WORK HARD AND PLAN FOR NEXT WEEK I AM THE BEST  :)"
        
        break;

    case 1:
        theDayIs = "Monday";
        quote = "SMC(9-10),Hss(10-11),HSS LAB(11-1:30),PY (2:30-3:30),PY LAB(3:30-6:00)";
        break;

    case 2:
        theDayIs = "Tuesday";
        quote = "DLD LAB(9-11),MATH(11-12),DSA(12-1:30),ENG(2:30-4:30),DLD(4:30-6:00)";
        break;
    
    case 3:
        theDayIs = "Wednesday";
        quote = "WD LAB(9-11),MATH(11-12),MATH TUT(12-1:30), :)";
        break;
            
            
    case 4:
        theDayIs = "Thursday";
        quote = "WD LAB(9-11),MATH(11-12),DS AB (12-1:30),DS LAB(2:30-5:30),PY :)";
        break;
        
    case 5:
        theDayIs = "Friday";
        quote = "CS RR(10-11) MATH (11-12) PY(12-1:30) ENG(2:30-4:30) DLD(6PM)";
        break;
        
    case 6:
        theDayIs = "Saturday";
        quote = "Time to party";
        break;
}


    let spanOfWeekday = document.getElementById("weekday");
    spanOfWeekday.innerHTML =  `${theDayIs}`;

    let spanOfQuote = document.getElementById("quote");
    spanOfQuote.innerHTML = `${quote}`;
