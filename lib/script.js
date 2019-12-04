$(document).ready(function() {






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