$(document).ready(function() {


    var m = moment();

    var clock = document.querySelector("#clock");

    function updateTime() {
        var now = moment();
        var readableTime = now.format('MMMM Do YYYY, h:mm:ss a');
        clock.textContent = readableTime;
    }
    setInterval(updateTime, 1000);
    updateTime();

    var timeIdArray = [9, 10, 11, 12, 13, 14, 15, 16];

    var currentHour = m.hour();


    console.log(timeIdArray[6] === currentHour);
    console.log(timeIdArray[6]);
    console.log(currentHour);

    console.log(currentHour);

    function timeSet() {

        var allUserInputs = document.querySelectorAll(".userInput");

        console.log(allUserInputs);


        for (var i = 0; i < timeIdArray.length; i++) {
            if (currentHour === timeIdArray[i]) {
                allUserInputs[i].setAttribute("style", "background-color: #ff0080");
                break;
            } else {
                allUserInputs[i].setAttribute("style", "background-color: lightgray");
            }
        }
        console.log("entering function, current hour: " + currentHour);

    }

    timeSet();

 
    // selecting input boxes
    var newUserInput1 = document.querySelector(".userInput1");
    var newUserInput2 = document.querySelector(".userInput2");
    var newUserInput3 = document.querySelector(".userInput3");
    var newUserInput4 = document.querySelector(".userInput4");
    var newUserInput5 = document.querySelector(".userInput5");
    var newUserInput6 = document.querySelector(".userInput6");
    var newUserInput7 = document.querySelector(".userInput7");
    var newUserInput8 = document.querySelector(".userInput8");

    // When user reloads a page:
    // get items out of local storage
    var lastuser1 = localStorage.getItem("userTypedBox1");
    var lastuser2 = localStorage.getItem("userTypedBox2");
    var lastuser3 = localStorage.getItem("userTypedBox3");
    var lastuser4 = localStorage.getItem("userTypedBox4");
    var lastuser5 = localStorage.getItem("userTypedBox5");
    var lastuser6 = localStorage.getItem("userTypedBox6");
    var lastuser7 = localStorage.getItem("userTypedBox7");
    var lastuser8 = localStorage.getItem("userTypedBox8");

    // put them into each textbox

    newUserInput1.textContent = lastuser1;
    newUserInput2.textContent = lastuser2;
    newUserInput3.textContent = lastuser3;
    newUserInput4.textContent = lastuser4;
    newUserInput5.textContent = lastuser5;
    newUserInput6.textContent = lastuser6;
    newUserInput7.textContent = lastuser7;
    newUserInput8.textContent = lastuser8;

    // after page has loaded, if user changes text, save the the new text
    $(".mySaveButton").on("click", function() {
        event.preventDefault();

        var userClickedThisBox = $(this).val();
        console.log("user clicked this box: " + userClickedThisBox);

        for (var i = 1; i<9; i++){
            var userTypedBox = $(".userInput"+i).val()
            // document.querySelector(".userInput"+i).value;
            console.log(userTypedBox);
            localStorage.setItem("userTypedBox"+i, userTypedBox);

        }


    });

});