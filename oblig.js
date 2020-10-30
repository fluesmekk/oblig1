//model
var dateNumber = '20.04.2020';




//view
updateView();
function updateView() {
    document.getElementById('app').innerHTML = `
    
    <input id="textZone" type="text"> </input>
    <button onclick="isDateValid(document.getElementById('textZone').value)">skjekk dato</button>

    `;
}

//controller

function isDateValid(dateString) {

    var dateNumber = dateString;

        isLengthCorrect(dateNumber);
        isDateCorrectlySetUp();
        isYearCorrect(year);
        isMonthCorrect(month);
        isLeapYear(year);
        isDayCorrect(day, month, leapYear)

        var day = dateNumber.substring(0,2);
        var month = dateNumber.substring(3,5);
        var year = dateNumber.substring(6, 9);
        var dots = dateNumber.indexOf('.') === 3 || 6;
        

        if  (lengthCorrect                     === true
            && dateIsCorrectlySetUp     === true
            && yearCorrect              === true
            && monthCorrect             === true
            && dayCorrect               === true) {
                return true;
            } else {
                return false;
            }

    
};
            var lengthCorrect;
            var dateIsCorrectlySetUp;
            var yearCorrect;
            var dateCorrect;
            var monthCorrect;
            var dayCorrect;
            var leapYear;


    //skjekker lengde
    function isLengthCorrect(dateLength) {
        if (dateLength.length === 10) {
            lengthCorrect = true;
        }
    };

    //skjekker om datorekke er riktig oppsatt med . etter dato og måned.
    function isDateCorrectlySetUp() {
        if (dateNumber.indexOf('.') === 3, 6) {
            dateIsCorrectlySetUp = true;
        }
    }

    //skjekker om årstallet er over 0000 og under 9999.
    function isYearCorrect(yearParameter) {
        if (yearParameter >= '0000' 
        && yearParameter <= '9999') {
            yearCorrect = true;
        }
    }


    //skjekker om måneden er innefor 01-12
    function isMonthCorrect(monthParameter) {
        if ((monthParameter >= '01') 
        && (monthParameter <= '12')) {
            monthCorrect = true;
        }
    }

    //skjekker om det er ett skuddår
    function isLeapYear (year) {
        if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) {
            leapYear = true;
        }
    }
    
    //skjekker at datoer passer til måneden.
    function isDayCorrect(day, month, leapYear) {
        if (month === '02' && leapYear === false && day <= '29') { 
            dayCorrect = true;
        } else if (month !== '02' && day <= '30') {
            dayCorrect = true;
        } else if ((month === '01' || month === '03' 
                    || month === '05' || month === '07' 
                    || month === '08' || month === '10' 
                    || month === '12') && day === '31') {
            dayCorrect = true;
        } else {
            dayCorrect = false;
        }
    }





