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

    var timeIdArray = [m.format('09:00'), m.format('10:00'), m.format('11:00'), m.format('12:00'),
        m.format('13:00'), m.format('14:00'), m.format('15:00'), m.format('16:00'), m.format('17:00')
    ];

    currentHour = m.hour();

    console.log(currentHour);

    function timeSet() {

        // for (var i=0; i < timeIdArray; i++)

        if (currentHour === 9) {
            $(".userInput1").css('background-color', '#FF1493');
        } else if (currentHour === 10) {
            $(".userInput2").css('background-color', 'lightgrey');
            $(".userInput1").css('background-color', 'lightgrey');
        } else if (currentHour === 11) {
            $(".userInput3").css('background-color', '#FF1493');
            $(".userInput2").css('background-color', 'lightgrey');
            $(".userInput1").css('background-color', 'lightgrey');
        } else if (currentHour === 12) {
            $(".userInput4").css('background-color', '#FF1493');
            $(".userInput3").css('background-color', 'lightgrey');
            $(".userInput2").css('background-color', 'lightgrey');
            $(".userInput1").css('background-color', 'rlightgrey');
        } else if (currentHour === 13) {
            $(".userInput5").css('background-color', '#FF1493');
            $(".userInput4").css('background-color', 'lightgrey');
            $(".userInput3").css('background-color', 'lightgrey');
            $(".userInput2").css('background-color', 'lightgrey');
            $(".userInput1").css('background-color', 'lightgrey');
        } else if (currentHour === 14) {
            $(".userInput6").css('background-color', '#FF1493');
            $(".userInput5").css('background-color', 'lightgrey');
            $(".userInput4").css('background-color', 'lightgrey');
            $(".userInput3").css('background-color', 'lightgrey');
            $(".userInput2").css('background-color', 'lightgrey');
            $(".userInput1").css('background-color', 'lightgrey');
        } else if (currentHour === 15) {
            $(".userInput7").css('background-color', '#FF1493');
            $(".userInput6").css('background-color', 'lightgrey');
            $(".userInput5").css('background-color', 'lightgrey');
            $(".userInput4").css('background-color', 'lightgrey');
            $(".userInput3").css('background-color', 'lightgrey');
            $(".userInput2").css('background-color', 'lightgrey');
            $(".userInput1").css('background-color', 'lightgrey');
        } else if (currentHour === 16) {
            $(".userInput8").css('background-color', '#FF1493');
            $(".userInput7").css('background-color', 'lightgrey');
            $(".userInput6").css('background-color', 'lightgrey');
            $(".userInput5").css('background-color', 'lightgrey');
            $(".userInput4").css('background-color', 'lightgrey');
            $(".userInput3").css('background-color', 'lightgrey');
            $(".userInput2").css('background-color', 'lightgrey');
            $(".userInput1").css('background-color', 'lightgrey');
        }
    }

    timeSet();



    // setActiveColor();
    var timeBox = document.querySelector("mySingleContainer");
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

        if ((parseInt(userClickedThisBox) === 1)) {
            var userTypedBox1 = newUserInput1.value;
            console.log(userTypedBox1);
            localStorage.setItem("userTypedBox1", userTypedBox1);

        } else if ((parseInt(userClickedThisBox) === 2)) {
            var userTypedBox2 = newUserInput2.value;
            console.log(userTypedBox2);
            localStorage.setItem("userTypedBox2", userTypedBox2);

        } else if ((parseInt(userClickedThisBox) === 3)) {
            var userTypedBox3 = newUserInput3.value;
            console.log(userTypedBox3);
            localStorage.setItem("userTypedBox3", userTypedBox3);

        } else if ((parseInt(userClickedThisBox) === 4)) {
            var userTypedBox4 = newUserInput4.value;
            localStorage.setItem("userTypedBox4", userTypedBox4);

        } else if ((parseInt(userClickedThisBox) === 5)) {
            var userTypedBox5 = newUserInput5.value;
            localStorage.setItem("userTypedBox5", userTypedBox5);

        } else if ((parseInt(userClickedThisBox) === 6)) {
            var userTypedBox6 = newUserInput6.value;
            localStorage.setItem("userTypedBox6", userTypedBox6);

        } else if ((parseInt(userClickedThisBox) === 7)) {
            var userTypedBox7 = newUserInput7.value;
            localStorage.setItem("userTypedBox7", userTypedBox7);

        } else if ((parseInt(userClickedThisBox) === 8)) {
            var userTypedBox8 = newUserInput8.value;
            localStorage.setItem("userTypedBox8", userTypedBox8);

        }

    });

});