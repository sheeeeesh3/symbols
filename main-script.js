/*
for recommendations, issues, or any other matter related to this game
you can contact me at professionalsillypants@gmail.com
p.s. click on the version to see the patch notes
p.p.s. progress doesn't save but currency does
*/

var money = 0;
var moneymult = 1;
var moneyadd = 0;
var moneybase = 0;
var energy = 0;
var energymult = 1;
var energyadd = 0;
var energybase = 0;
var playtime = 0;
var amount = 0;
var b1b = false;
var b2b = false;
var b3b = false;
var b4b = false;
var b5_1b = false;
var b5_2b = false;
var b5_3b = false;
var b5_4b = false;
var b5_5b = false;
var b5exp = 0;
var baseb5exp = 1.2;
var b6b = false;
var b6mult = 1;
var b7b = false;
var b8b = false;
var b9b = false;
var b10b = false;

// functions

function checkdata() {
    if (b1b == true) {
        document.getElementById("button1").setAttribute("class", "mainbuttons hidden");
        document.getElementById("sub1").setAttribute("class", "descsubs hidden");
        setInterval(update, 1000);

        if (b2b == false) {
            document.getElementById("button2").setAttribute("class", "mainbuttons");
        } else {
            if (b3b == false) {
                document.getElementById("button3").setAttribute("class", "mainbuttons");
            } else {
                if (b5_1b == false) {
                    document.getElementById("button5_1").setAttribute("class", "mainbuttons");
                } else {
                    if (b6b == false) {
                        document.getElementById("button6").setAttribute("class", "mainbuttons");
                    } else {
                        if (b7b == false) {
                            document.getElementById("button7").setAttribute("class", "mainbuttons");
                        } else {
                            if (b8b == false) {
                                document.getElementById("button8").setAttribute("class", "mainbuttons");
                            }

                            if (b9b == false) {
                                document.getElementById("button9").setAttribute("class", "mainbuttons");
                            }

                            if (b10b == false) {
                                document.getElementById("button10").setAttribute("class", "mainbuttons");
                            }
                        }
                    }
                    if (b5_2b == false) {
                        document.getElementById("button5_2").setAttribute("class", "mainbuttons");
                    } else {
                        if (b5_3b == false) {
                            document.getElementById("button5_3").setAttribute("class", "mainbuttons");
                        } else {
                            if (b5_4b == false) {
                                document.getElementById("button5_4").setAttribute("class", "mainbuttons");
                            } else {
                                if (b5_5b == false) {
                                    document.getElementById("button5_5").setAttribute("class", "mainbuttons");
                                }
                            }
                        }
                    }
                }
            }

            if (b4b == false) {
                document.getElementById("button4").setAttribute("class", "mainbuttons");
                document.getElementById("sub2").setAttribute("class", "descsubs");
            }
        }
    }
}

function save() {
    var saveGame = {
        money: money,
        moneymult: moneymult,
        moneyadd: moneyadd,
        moneybase: moneybase,
        energy: energy,
        energymult: energymult,
        energyadd: energyadd,
        energybase: energybase,
        amount: amount,
        b1b: b1b,
        b2b: b2b,
        b3b: b3b,
        b4b: b4b,
        b5_1b: b5_1b,
        b5_2b: b5_2b,
        b5_3b: b5_3b,
        b5_4b: b5_4b,
        b5_5b: b5_5b,
        b5exp: b5exp,
        baseb5exp: baseb5exp,
        b6b: b6b,
        b6mult: b6mult,
        b7b: b7b,
        b8b: b8b,
        b9b: b9b,
        b10b: b10b,
    };

    localStorage.setItem("saveGame", JSON.stringify(saveGame));
}

function load() {
    var loadGame = JSON.parse(localStorage.getItem("saveGame"));

    money = loadGame.money;
    moneymult = loadGame.moneymult;
    moneyadd = loadGame.moneyadd;
    moneybase = loadGame.moneybase;
    energy = loadGame.energy;
    energymult = loadGame.energymult;
    energyadd = loadGame.energyadd;
    energybase = loadGame.energybase;
    amount = loadGame.amount;
    b1b = loadGame.b1b;
    b2b = loadGame.b2b;
    b3b = loadGame.b3b;
    b4b = loadGame.b4b;
    b5_1b = loadGame.b5_1b;
    b5_2b = loadGame.b5_2b;
    b5_3b = loadGame.b5_3b;
    b5_4b = loadGame.b5_4b;
    b5_5b = loadGame.b5_5b;
    b5exp = loadGame.b5exp;
    baseb5exp = loadGame.baseb5exp;
    b6b = loadGame.b6b;
    b6mult = loadGame.b6mult;
    b7b = loadGame.b7b;
    b8b = loadGame.b8b;
    b9b = loadGame.b9b;
    b10b = loadGame.b10b;

    checkdata();
}

function resetdata() {
    localStorage.removeItem("saveGame");
    location.reload();
}

// the interval
var savetime = 0;
function update() {
    // deals w/ $
    moneybase = (1 + moneyadd) * ((moneymult + b5exp + (amount / 2)) * b6mult);
    money += moneybase;
    document.getElementById("cash-display").innerHTML = commanum(money.toFixed(2)) + " (" + commanum(moneybase.toFixed(2)) + "/s)";

    // deals w/ !
    energybase = (1 + energyadd) * energymult;
    energy += energybase;

    // saves game
    savetime++;
    if (savetime >= 3) {
        save();
        savetime = 0;
    }
}

function commanum(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// panel code
let panelOpen = false;
document.getElementById("energypaneltoggle").onclick = function() {panelinteract("energypaneltoggle");}
function panelinteract(buttonid) {
    if (!buttonid) {
        document.write("something very not good seems to have happened (reload page i guess?)");
        return;
    } else if (panelOpen == false) {
        openpanel(buttonid);
    } else if (panelOpen == true) {
        closepanel(buttonid);
    }
    function openpanel(btnid) {
        if (btnid == "energypaneltoggle") {
            document.getElementById("energypanel").setAttribute("class", "panel");
        }
        panelOpen = true;
    }
    function closepanel(btnid) {
        if (btnid == "energypaneltoggle") {
            document.getElementById("energypanel").setAttribute("class", "panel hidden");
        }
        panelOpen = false;
    }
}

// button purchases
function b1bought() {
    b1b = true;
    document.getElementById("button1").setAttribute("class", "mainbuttons hidden");
    document.getElementById("sub1").setAttribute("class", "descsubs hidden");
    document.getElementById("button2").setAttribute("class", "mainbuttons");
    setInterval(update, 1000);
}

function b2bought() {
    if (money >= 15) {
        b2b = true;
        moneyadd = 2;
        money -= 15;
        document.getElementById("button2").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button3").setAttribute("class", "mainbuttons");
        document.getElementById("button4").setAttribute("class", "mainbuttons");
        document.getElementById("sub2").setAttribute("class", "descsubs");
    } else {
        alert("you need at least $15 to buy this");
    }
}

function b3bought() {
    if (money >= 50) {
        b3b = true;
        moneyadd = 4.5;
        money -= 50;
        document.getElementById("button3").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button5_1").setAttribute("class", "mainbuttons");
        document.getElementById("sub3").setAttribute("class", "descsubs");
    } else {
        alert("you need at least $50 to buy this");
    }
}

function b4bought() {
    if (money >= 80) {
        b4b = true;
        moneymult = 2.5;
        money -= 80;
        document.getElementById("button4").setAttribute("class", "mainbuttons hidden");
        document.getElementById("sub2").setAttribute("class", "descsubs hidden");
    } else {
        alert("you need at least $80 to buy this");
    }
}

function b5_1bought() {
    if (money >= 200) {
        b5_1b = true;
        b5exp = baseb5exp;
        money -= 200;
        document.getElementById("button5_1").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button5_2").setAttribute("class", "mainbuttons");
        document.getElementById("button6").setAttribute("class", "mainbuttons");
        document.getElementById("sub3").setAttribute("class", "descsubs hidden");
    } else {
        alert("you need at least $200 to buy this");
    }
}

function b5_2bought() {
    if (money >= 500) {
        b5_2b = true;
        b5exp *= baseb5exp;
        money -= 500;
        document.getElementById("button5_2").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button5_3").setAttribute("class", "mainbuttons");
    } else {
        alert("you need at least $500 to buy this");
    }
}

function b5_3bought() {
    if (money >= 750) {
        b5_3b = true;
        b5exp *= baseb5exp;
        money -= 750;
        document.getElementById("button5_3").setAttribute("class", "mainbuttons hidden");
    } else {
        alert("you need at least $750 to buy this");
    }
}

function b6bought() {
    if (money >= 300) {
        b6b = true;
        b6mult = 3;
        money -= 300;
        document.getElementById("button6").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button7").setAttribute("class", "mainbuttons");
    } else {
        alert("you need at least $300 to buy this");
    }
}

function b7bought() {
    if (money >= 800) {
        amount = 7;
        b7b = true;
        money -= 800;
        document.getElementById("button7").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button8").setAttribute("class", "mainbuttons");
        document.getElementById("button9").setAttribute("class", "mainbuttons");
        document.getElementById("button10").setAttribute("class", "mainbuttons");
    } else {
        alert("you need at least $800 to buy this");
    }
}

function b8bought() {
    if (money >= 1000) {
        amount++;
        b8b = true;
        money -= 1000;
        document.getElementById("button8").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button5_4").setAttribute("class", "mainbuttons");
    } else {
        alert("you need at least $1000 to buy this");
    }
}

function b5_4bought() {
    if (money >= 1200) {
        b5_4b = true;
        b5exp *= baseb5exp;
        money -= 1200;
        document.getElementById("button5_4").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button5_5").setAttribute("class", "mainbuttons");
    } else {
        alert("you need at least $1200 to buy this");
    }
}

function b5_5bought() {
    if (money >= 1750) {
        b5_5b = true;
        b5exp *= baseb5exp;
        money -= 1750;
        document.getElementById("button5_5").setAttribute("class", "mainbuttons hidden");
    } else {
        alert("you need at least $1750 to buy this");
    }
}

function b9bought() {
    if (money >= 1500) {
        amount++;
        b9b = true;
        baseb5exp = 1.3;
        if (b5_4b == false) {
            b5exp = 2.197;
        } else if (b5_4b == true && b5_5b == false) {
            b5exp = 2.8561;
        } else if (b5_5b == true) {
            b5exp = 3.71293;
        }
        money -= 1500;
        document.getElementById("button9").setAttribute("class", "mainbuttons hidden");
    } else {
        alert("you need at least $1500 to buy this");
    }
}

function b10bought () {
    document.getElementById("button10").innerHTML = "coming soon";
    document.getElementById("energypaneltoggle").setAttribute("class", "sidebaritem");
    document.getElementById("sidebartoggle").setAttribute("class", "sidebaritem");
}

// other code

// default display before data loads
document.getElementById("cash-display").innerHTML = " 0.00 ";

// loads data
if (localStorage.getItem("saveGame") != null) {
    load();
}

// silly thing from cookie clicker
var catchphrases = ["what are you doing here?", "are you having fun yet?", "hope you're not trying to cheat...", "howdy!", "how are you doing this fine morning/afternoon/evening/night?", "they know what you did"];
function randomness(max) {
    return Math.floor(Math.random() * max);
}
console.log(catchphrases[randomness(catchphrases.length)]);
