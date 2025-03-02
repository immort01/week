 let date = new Date();
        let dayNumber = date.getDay(); // Get the current day (0-6)
        let theDayIs;
        let quote1;
        let quote2;

        switch(dayNumber){
            case 0:
                theDayIs = "Sunday";
                quote1 = "Time to WORK HARD AND PLAN FOR NEXT WEEK I AM THE BEST  :)";
                quote2 = "Relax and recharge for the week ahead!";
                break;
            case 1:
                theDayIs = "Monday";
                quote1 = "SMC(9-10),Hss(10-11),HSS LAB(11-1:30),PY (2:30-3:30),PY LAB(3:30-6:00)";
                quote2 = "Start the week with a positive mindset!";
                break;
            case 2:
                theDayIs = "Tuesday";
                quote1 = "DLD LAB(9-11),MATH(11-12),DSA(12-1:30),ENG(2:30-4:30),DLD(4:30-6:00)";
                quote2 = "Keep pushing forward!";
                break;
            case 3:
                theDayIs = "Wednesday";
                quote1 = "WD LAB(9-11),MATH(11-12),MATH TUT(12-1:30), :)";
                quote2 = "You're halfway through the week!";
                break;
            case 4:
                theDayIs = "Thursday";
                quote1 = "WD LAB(9-11),MATH(11-12),DS AB (12-1:30),DS LAB(2:30-5:30),PY :)";
                quote2 = "Plan for the weekend!";
                break;
            case 5:
                theDayIs = "Friday";
                quote1 = "CS RR(10-11) MATH (11-12) PY(12-1:30) ENG(2:30-4:30) DLD(6PM)";
                quote2 = "Finish strong!";
                break;
            case 6:
                theDayIs = "Saturday";
                quote1 = "Time to party";
                quote2 = "Enjoy your day!";
                break;
        }

        // Update the HTML elements
        let spanOfWeekday = document.getElementById("weekday");
        spanOfWeekday.innerHTML = `${theDayIs}`;

        let spanOfQuote1 = document.getElementById("quote1");
        spanOfQuote1.innerHTML = `${quote1}`;

        let spanOfQuote2 = document.getElementById("quote2");
        spanOfQuote2.innerHTML = `${quote2}`;
    
