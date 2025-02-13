// vars
var moneymult = 1;
var moneyadd = 0;
var moneybase = 0;
var b1p = 0;                                
var b2p = 20;                 
var b3p = 75;
var b4p = 90;
var savedcash = localStorage.getItem("saved-cash");
var savedbuttons = JSON.parse(localStorage.getItem("saved-buttons"));
var ownedbuttons = {
    b1b: false,
    b2b: false,
    b3b: false,
    b4b: false,
    b5_1b: false,
    b5_2b: false,
    b5_3b: false,
};
 
// functions
function checkdata() {
    if (localStorage.savedcash == null) {
        localStorage.setItem("saved-cash", "0");
        savedcash = 0;
    }

    if (localStorage.savedbuttons == null) {
        localStorage.setItem("saved-buttons", "0");
        savedbuttons = 0;
    } else if (ownedbuttons.b1b == true) {
        document.getElementById("button1").setAttribute("class", "mainbuttons hidden");
        document.getElementById("sub1").setAttribute("class", "descsubs hidden");

        if (ownedbuttons.b2b == false) {
            document.getElementById("button2").setAttribute("class", "mainbuttons");
        } else {
            if (ownedbuttons.b3b == false) {
                document.getElementById("button3").setAttribute("class", "mainbuttons");
            } else {
                if (ownedbuttons.b5_1b == false) {
                    document.getElementById("button5_1").setAttribute("class", "mainbuttons");
                }
            }

            if (ownedbuttons.b4b == false) {
                document.getElementById("button4").setAttribute("class", "mainbuttons");
                document.getElementById("sub2").setAttribute("class", "descsubs");
            }
        }
    }
}

function updatemoney() {
    if (localStorage.savedcash == null) {
        var money = moneybase;
    } else {
        var money = moneybase + parseInt(localStorage.savedcash);
    }

    localStorage.setItem("saved-cash", money);
    moneybase += (100 + moneyadd) * moneymult;
    document.getElementById("cash-display").innerHTML = money.toFixed(2);
}

function b1bought() {
    ownedbuttons.b1b = true;
    localStorage.setItem("saved-buttons", JSON.stringify(ownedbuttons));
    document.getElementById("button1").setAttribute("class", "mainbuttons hidden");
    document.getElementById("sub1").setAttribute("class", "descsubs hidden");
    document.getElementById("button2").setAttribute("class", "mainbuttons");
    setInterval(updatemoney, 1000);
}

function b2bought() {
    if (localStorage.savedcash == null) {
        var money = moneybase;
    } else {
        var money = moneybase + parseInt(localStorage.savedcash);
    }
    
    if (money >= 15) {
        ownedbuttons.b2b = true;
        localStorage.setItem("saved-buttons", JSON.stringify(ownedbuttons));
        moneyadd = 2;
        moneybase -= 15;
        document.getElementById("button2").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button3").setAttribute("class", "mainbuttons");
        document.getElementById("button4").setAttribute("class", "mainbuttons");
        document.getElementById("sub2").setAttribute("class", "descsubs");
    } else {
        alert("you need at least $15 to buy this");
    }
}

function b3bought() {
    if (localStorage.savedcash == null) {
        var money = moneybase;
    } else {
        var money = moneybase + parseInt(localStorage.savedcash);
    }

    if (money >= 60) {
        ownedbuttons.b3b = true;
        localStorage.setItem("saved-buttons", JSON.stringify(ownedbuttons));
        moneyadd = 4.5;
        moneybase -= 60;
        document.getElementById("button3").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button5_1").setAttribute("class", "mainbuttons");
        document.getElementById("sub3").setAttribute("class", "descsubs");
    } else {
        alert("you need at least $60 to buy this");
    }
}

function b4bought() {
    if (localStorage.savedcash == null) {
        var money = moneybase;
    } else {
        var money = moneybase + parseInt(localStorage.savedcash);
    }

    if (money >= 80) {
        ownedbuttons.b4b = true;
        localStorage.setItem("saved-buttons", JSON.stringify(ownedbuttons));
        moneymult = 2.5;
        moneybase -= 80;
        document.getElementById("button4").setAttribute("class", "mainbuttons hidden");
        document.getElementById("sub2").setAttribute("class", "descsubs hidden");
    } else {
        alert("you need at least $80 to buy this");
    }
}

function b5_1bought() {
    if (localStorage.savedcash == null) {
        var money = moneybase;
    } else {
        var money = moneybase + parseInt(localStorage.savedcash);
    }

    if (money >= 175) {
        ownedbuttons.b5_1b = true;
        localStorage.setItem("saved-buttons", JSON.stringify(ownedbuttons));
        moneyadd = 4.5 + (moneybase / 100);
        moneybase -= 175;
        document.getElementById("button5_1").setAttribute("class", "mainbuttons hidden");
        document.getElementById("sub3").setAttribute("class", "descsubs hidden");
    } else {
        alert("you need at least $175 to buy this");
    }
}

// click detectors
document.getElementById("button1").addEventListener("click", b1bought);
document.getElementById("button2").addEventListener("click", b2bought);
document.getElementById("button3").addEventListener("click", b3bought);
document.getElementById("button4").addEventListener("click", b4bought);
document.getElementById("button5_1").addEventListener("click", b5_1bought);

// other code
checkdata();
console.log("what are you doing here?");
document.getElementById("cash-display").innerHTML = " 0.00";