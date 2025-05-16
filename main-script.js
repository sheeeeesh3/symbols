/*
for recommendations, issues, or any other matter related to this game
you can contact me at professionalsillypants@gmail.com
p.s. click on the version to see the patch notes
*/

var money = 0;
var moneymult = 1;
var moneyadd = 0; 
var moneybase = 0;
var energy = 0;
var energymult = 1;
var energyadd = 0;
var energybase = 0;
var crypto = 0;
var cryptomult = 1;
var cryptoadd = 0;
var cryptobase = 0;
var power = 0;
var powerreducetime = 0.4;
var powersubtractor = 1;
var powercap = 5;
var powerperclick = 1;
var playsec = 0;
var playmin = 0;
var playhr = 0;
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
var b5exp = 1;
var baseb5exp = 1.2;
var b6b = false;
var b6mult = 1;
var b7b = false;
var b7formula = 0;
var b8b = false;
var b9b = false;
var b10b = false;
var b11b = false;
var b12b = false;
var b12mult = 1;
var b13b = false;
var b13boost = 1;
var b14b = false;
var b14mult = 1;
var b15b = false;
var b16b = false;
var b17b = false;
var b17boost = 1;
var b18b = false;
var b18mult = 1;
var b19b = false;
var b20b = false;
var eb1a = 0;
var eb2a = 0;
var eb3a = 0;
var eb4a = 0;
var eb1cost = 100;
var eb2cost = 200;
var eb3cost = 250;
var eb4cost1 = 500;
var eb4cost2 = 50000;
var eb4mult = 1;
var cryptochance = 100;
var rarecryptochance = 500;
var minecooldown = 3;
var onminecooldown = false;
var displaycash = 0;
var displaycashbase = 0;
var displayenergy = 0;
var displayenergybase = 0;

// functions
function checkdata() {
    if (b1b == true) {
        document.getElementById("button1").setAttribute("class", "mainbuttons hidden");
        document.getElementById("sub1").setAttribute("class", "descsubs hidden");
        setInterval(update, 100);

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
                            } else {
                                if (b11b == false) {
                                    document.getElementById("button11").setAttribute("class", "mainbuttons");
                                } else {
                                    if (b12b == false) {
                                        document.getElementById("button12").setAttribute("class", "mainbuttons");
                                    } else {
                                        if (b14b == false) {
                                            document.getElementById("button14").setAttribute("class", "mainbuttons");
                                        }
                                    }

                                    if (b13b == false) {
                                        document.getElementById("button13").setAttribute("class", "mainbuttons");
                                    } else {
                                        if (b15b == false) {
                                            document.getElementById("button15a").setAttribute("class", "mainbuttons");
                                            document.getElementById("button15b").setAttribute("class", "mainbuttons");
                                        } else {
                                            if (b16b == false) {
                                                document.getElementById("button16").setAttribute("class", "mainbuttons");
                                            } else {
                                                if (b17b == false) {
                                                    document.getElementById("button17").setAttribute("class", "mainbuttons");
                                                }

                                                if (b18b == false) {
                                                    document.getElementById("button18").setAttribute("class", "mainbuttons");
                                                } else {
                                                    if (b19b == false) {
                                                        document.getElementById("button19").setAttribute("class", "mainbuttons");
                                                    } else {
                                                        if (b20b == false) {
                                                            document.getElementById("button20").setAttribute("class", "mainbuttons");
                                                            document.getElementById("sub6").setAttribute("class", "descsubs");
                                                        } else {
                                                            document.getElementById("sidebartoggle").setAttribute("class", "sidebaritem");
                                                            document.getElementById("cryptopaneltoggle").setAttribute("class", "sidebaritem");
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                            if (b10b == false) {
                                document.getElementById("button10").setAttribute("class", "mainbuttons");
                            } else {
                                document.getElementById("sidebartoggle").setAttribute("class", "sidebaritem");
                                document.getElementById("energypaneltoggle").setAttribute("class", "sidebaritem");
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
        powerreducetime: powerreducetime,
        powersubtractor: powersubtractor,
        powercap: powercap,
        powerperclick: powerperclick,
        playsec: playsec,
        playmin: playmin,
        playhr: playhr,
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
        b7formula: b7formula,
        b8b: b8b,
        b9b: b9b,
        b10b: b10b,
        b11b: b11b,
        b12b: b12b,
        b12mult: b12mult,
        b13b: b13b,
        b13boost: b13boost,
        b14b: b14b,
        b14mult: b14mult,
        b15b: b15b,
        b16b: b16b,
        b17b: b17b,
        b17boost: b17boost,
        b18b: b18b,
        b18mult: b18mult,
        b19b: b19b,
        b20b: b20b,
        eb1a: eb1a,
        eb2a: eb2a,
        eb3a: eb3a,
        eb4a: eb4a,
        eb1cost: eb1cost,
        eb2cost: eb2cost,
        eb3cost: eb3cost,
        eb4cost1: eb4cost1,
        eb4cost2: eb4cost2,
        eb4mult: eb4mult,
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
    powerreducetime =  loadGame.powerreducetime;
    powersubtractor = loadGame.powersubtractor;
    powercap = loadGame.powercap;
    powerperclick = loadGame.powerperclick;
    playsec = loadGame.playsec;
    playmin = loadGame.playmin;
    playhr = loadGame.playhr;
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
    b7formula = loadGame.b7formula;
    b8b = loadGame.b8b;
    b9b = loadGame.b9b;
    b10b = loadGame.b10b;
    b11b = loadGame.b11b;
    b12b = loadGame.b12b;
    b12mult = loadGame.b12mult;
    b13b = loadGame.b13b;
    b13boost = loadGame.b13boost;
    b14b = loadGame.b14b;
    b14mult = loadGame.b14mult;
    b15b = loadGame.b15b;
    b16b = loadGame.b16b;
    b17b = loadGame.b17b;
    b17boost = loadGame.b17boost;
    b18b = loadGame.b18b;
    b18mult = loadGame.b18mult;
    b19b = loadGame.b19b;
    b20b = loadGame.b20b;
    eb1a = loadGame.eb1a;
    eb2a = loadGame.eb2a;
    eb3a = loadGame.eb3a;
    eb4a = loadGame.eb4a;
    eb1cost = loadGame.eb1cost;
    eb2cost = loadGame.eb2cost;
    eb3cost = loadGame.eb3cost;
    eb4cost1 = loadGame.eb4cost1;
    eb4cost2 = loadGame.eb4cost2;
    eb4mult = loadGame.eb4mult;

    checkdata();
}

function resetdata() {
    localStorage.removeItem("saveGame");
    location.reload();
}

// the interval
var savetime = 0;
var powertime = 0;
var timecount = 0;
var minecount = 0;
function update() {
    // deals w/ $ display
    moneybase = (0.1 + moneyadd/10) * (moneymult * (b5exp + b7formula)) * (b6mult * eb4mult * b12mult * b14mult) * b17boost;
    money += moneybase;
    if (money < 999999) {
        displaycash = money.toFixed(2);
    } else if (money > 999999 & money < 999999999) {
        displaycash = ((money / 1000000).toFixed(2)) + " M";
    } else if (money > 999999999 && money < 999999999999) {
        displaycash = ((money / 1000000000).toFixed(2)) + " B";
    }
    if (moneybase < 999999) {
        displaycashbase = (moneybase * 10).toFixed(2);
    } else if (moneybase > 999999 && moneybase < 999999999) {
        displaycashbase = ((moneybase / 100000).toFixed(2)) + " M";
    } else if (moneybase > 999999999 && moneybase < 999999999999) {
        displaycashbase = ((moneybase / 100000000).toFixed(2)) + " B";
    }
    document.getElementById("cash-display").innerHTML = commanum(displaycash) + " (" + commanum(displaycashbase) + "/s)";

    // deals w/ ! display
    energybase = (((power**2)/10)/10 + energyadd/10) * (energymult * eb4mult) * b13boost * (b14mult * b18mult);
    energy += energybase;
    if (energy < 999999) {
        displayenergy = energy.toFixed(2);
    } else if (energy > 999999 & energy < 999999999) {
        displayenergy = ((energy / 1000000).toFixed(2)) + " M";
    } else if (energy > 999999999 && energy < 999999999999) {
        displayenergy = ((energy / 1000000000).toFixed(2)) + " B";
    }
    if (energybase < 999999) {
        displayenergybase = (energybase * 10).toFixed(2);
    } else if (energybase > 999999 && energybase < 999999999) {
        displayenergybase = ((energybase / 100000).toFixed(2)) + " M";
    } else if (energybase > 999999999 && energybase < 999999999999) {
        displayenergybase = ((energybase / 100000000).toFixed(2)) + " B";
    }
    document.getElementById("energy-display").innerHTML = commanum(displayenergy) + " (" + commanum(displayenergybase) + "/s)";

    // crypto stuff
    cryptobase = (1 + cryptoadd) * cryptomult;
    if (onminecooldown == true) {
        minecount++;
        if (minecount >= minecooldown*10) {
            onminecooldown = false;
            minecount = 0;
        }
    }
    
    // displays power stuff
    document.getElementById("power-display").innerHTML = commanum(power) + " J";
    document.getElementById("powercap-display").innerHTML = commanum(powercap) + " J";
    document.getElementById("powerbutton").innerHTML = "+" + powerperclick + " power";

    // power reduction
    powertime++;
    if (powertime >= (powerreducetime*10)) {
        power -= powersubtractor;
        powertime = 0;
    }
    if (power < 0) {
        power = 0;
    }

    // saves game
    savetime++;
    if (savetime >= 30) {
        save();
        // degub code: console.log(money);
        savetime = 0;
    }

    // tracks playtime
    timecount++;
    if (timecount >= 10) {
        playsec += 1;
        timecount = 0;
    }
    if (playsec >= 60) {
        playmin += 1;
        playsec = 0;
    }
    if (playmin >= 60) {
        playhr += 1;
        playmin = 0;
    }
    document.getElementById("playtime").innerHTML = "played for " + playhr + " h, " + playmin + " min, and " + playsec + " sec";

    // updates ebutton pricing
    document.getElementById("eb1c").innerHTML = "costs " + commanum(Math.round(eb1cost)) + "<span style='color:rgb(255, 187, 0);'>" + "!" + "</span>";
    document.getElementById("eb2c").innerHTML = "costs " + commanum(Math.round(eb2cost)) + "<span style='color:rgb(255, 187, 0);'>" + "!" + "</span>";
    document.getElementById("eb3c").innerHTML = "costs " + commanum(Math.round(eb3cost)) + "<span style='color:rgb(255, 187, 0);'>" + "!" + "</span>";
    document.getElementById("eb4c").innerHTML = "costs " + commanum(Math.round(eb4cost1)) + "<span style='color:rgb(255, 187, 0);'>" + "!" + "</span> and <span style='color: aqua;'>" + "$" + "</span>" + commanum(Math.round(eb4cost2));

    // checks changing values
    if (b12b == true && energy >= 300) {
        b12mult = 4;
    } else if (b12b == true && energy < 300) {
        b12mult = 3;
    } else {
        b12mult = 1;
    }

    if (b13b == true) {
        b13boost = Math.log10(2 + money) ** 0.9;
    } else {
        b13boost = 1;
    }

    if (b17b == true) {
        b17boost = (Math.log10(playsec + (playmin*60) + (playhr*360)))/(Math.log10(3));
    } else {
        b17boost = 1;
    }

    const datetime = new Date();
    if (b14b == true && datetime.getHours() >= 17 && datetime.getHours() <= 19) {
        b14mult = 3;
    } else {
        b14mult = 1;
    }

    if (b18b == true && datetime.getHours() >= 6 && datetime.getHours() <= 9) {
        b18mult = 2.5;
    } else {
        b18mult = 1;
    }
}

function commanum(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// panel code
let panelOpen = false;
let sidebarOpen = true;
document.getElementById("energypaneltoggle").onclick = function() {panelinteract("energypanel");}
document.getElementById("sidebartoggle").onclick = function() {sidebarinteract();}
document.getElementById("cryptopaneltoggle").onclick = function() {panelinteract("cryptopanel")}

function panelinteract(panelid) {
    if (!panelid) {
        document.write("something very not good seems to have happened (reload the page i guess?)");
        return;
    } else if (panelOpen == false) {
        document.getElementById("energypanel").setAttribute("class", "panel hidden");
        document.getElementById("cryptopanel").setAttribute("class", "panel hidden");
        document.getElementById(panelid).setAttribute("class", "panel");
        panelOpen = true;
    } else if (panelOpen == true) {
        document.getElementById("energypanel").setAttribute("class", "panel hidden");
        document.getElementById("cryptopanel").setAttribute("class", "panel hidden");
        panelOpen = false;
    }
}

function sidebarinteract() {
    if (sidebarOpen == true) {
        document.getElementById("energypaneltoggle").setAttribute("class", "sidebaritem hidden");
        document.getElementById("cryptopaneltoggle").setAttribute("class", "sidebaritem hidden");
        document.getElementById("sidebartoggle").setAttribute("class", "sidebaritem");
        sidebarOpen = false;
    } else if (sidebarOpen == false) {
        document.getElementById("energypaneltoggle").setAttribute("class", "sidebaritem");
        document.getElementById("cryptopaneltoggle").setAttribute("class", "sidebaritem");
        sidebarOpen = true;
    }
     
}

// power function
function powerbutton() {
    power += powerperclick;
    if (power > powercap) {
        power = powercap;
    }
}

// miner function
function minerbutton() {
    if (onminecooldown == false) {
        var minechance = Math.floor(Math.random() * cryptochance);
        var rareminechance = Math.floor(Math.random() * rarecryptochance);

        if (rareminechance == 0) {
            crypto += 5 * cryptobase;
            // alert goes here
        } else if (minechance == 0) {
            crypto += cryptobase;
            // alert goes here
        } else {
            // alert goes here
        }

        onminecooldown = true;
    } else {
        // alert goes here
    }
}

// button purchases
function b1bought() {
    b1b = true;
    document.getElementById("button1").setAttribute("class", "mainbuttons hidden");
    document.getElementById("sub1").setAttribute("class", "descsubs hidden");
    document.getElementById("button2").setAttribute("class", "mainbuttons");
    setInterval(update, 100);
}

function b2bought() {
    if (money >= 25) {
        b2b = true;
        moneyadd = 2;
        money -= 25;
        document.getElementById("button2").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button3").setAttribute("class", "mainbuttons");
        document.getElementById("button4").setAttribute("class", "mainbuttons");
        document.getElementById("sub2").setAttribute("class", "descsubs");
    } else {
        errormsg("you need at least $25 to buy this");
    }
}

function b3bought() {
    if (money >= 60) {
        b3b = true;
        moneyadd = 4.5;
        money -= 60;
        document.getElementById("button3").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button5_1").setAttribute("class", "mainbuttons");
        document.getElementById("sub3").setAttribute("class", "descsubs");
    } else {
        errormsg("you need at least $60 to buy this");
    }
}

function b4bought() {
    if (money >= 150) {
        b4b = true;
        moneymult = 2.5;
        money -= 150;
        document.getElementById("button4").setAttribute("class", "mainbuttons hidden");
        document.getElementById("sub2").setAttribute("class", "descsubs hidden");
    } else {
        errormsg("you need at least $150 to buy this");
    }
}

function b5_1bought() {
    if (money >= 250) {
        b5_1b = true;
        b5exp = baseb5exp;
        money -= 250;
        document.getElementById("button5_1").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button5_2").setAttribute("class", "mainbuttons");
        document.getElementById("button6").setAttribute("class", "mainbuttons");
        document.getElementById("sub3").setAttribute("class", "descsubs hidden");
    } else {
        errormsg("you need at least $250 to buy this");
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
        errormsg("you need at least $500 to buy this");
    }
}

function b5_3bought() {
    if (money >= 800) {
        b5_3b = true;
        b5exp *= baseb5exp;
        money -= 800;
        document.getElementById("button5_3").setAttribute("class", "mainbuttons hidden");
        if (b8b == true) {
            document.getElementById("button5_4").setAttribute("class", "mainbuttons");
        }
    } else {
        errormsg("you need at least $800 to buy this");
    }
}

function b6bought() {
    if (money >= 333) {
        b6b = true;
        b6mult = 3;
        money -= 333;
        document.getElementById("button6").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button7").setAttribute("class", "mainbuttons");
    } else {
        errormsg("you need at least $333 to buy this");
    }
}

function b7bought() {
    if (money >= 900) {
        amount = 7;
        b7b = true;
        b7formula = amount / 2;
        money -= 900;
        document.getElementById("button7").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button8").setAttribute("class", "mainbuttons");
        document.getElementById("button9").setAttribute("class", "mainbuttons");
        document.getElementById("button10").setAttribute("class", "mainbuttons");
    } else {
        errormsg("you need at least $900 to buy this");
    }
}

function b8bought() {
    if (money >= 1200) {
        amount++;
        b8b = true;
        money -= 1200;
        document.getElementById("button8").setAttribute("class", "mainbuttons hidden");
        if (b5_3b == true) {
            document.getElementById("button5_4").setAttribute("class", "mainbuttons");
        }
    } else {
        errormsg("you need at least $1,200 to buy this");
    }
}

function b5_4bought() {
    if (money >= 1500) {
        b5_4b = true;
        b5exp *= baseb5exp;
        money -= 1500;
        document.getElementById("button5_4").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button5_5").setAttribute("class", "mainbuttons");
    } else {
        errormsg("you need at least $1,500 to buy this");
    }
}

function b5_5bought() {
    if (money >= 1800) {
        b5_5b = true;
        b5exp *= baseb5exp;
        money -= 1800;
        document.getElementById("button5_5").setAttribute("class", "mainbuttons hidden");
    } else {
        errormsg("you need at least $1,800 to buy this");
    }
}

function b9bought() {
    if (money >= 1650) {
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
        money -= 1650;
        document.getElementById("button9").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button11").setAttribute("class", "mainbuttons");
    } else {
        errormsg("you need at least $1,650 to buy this");
    }
}

function b10bought() {
    if (money >= 3000) {
        amount++;
        b10b = true;
        money -= 3000;
        document.getElementById("button10").setAttribute("class", "mainbuttons hidden");
        document.getElementById("energypaneltoggle").setAttribute("class", "sidebaritem");
        document.getElementById("sidebartoggle").setAttribute("class", "sidebaritem");
    } else {
        errormsg("you need at least $3,000 to buy this");
    }
}

function b11bought() {
    if (money >= 7777) {
        amount++;
        b11b = true;
        money -= 7777;
        moneymult *= 1.5;
        energymult *= 1.5;
        document.getElementById("button11").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button12").setAttribute("class", "mainbuttons");
        document.getElementById("button13").setAttribute("class", "mainbuttons");
    } else {
        errormsg("you need at least $7,777 to buy this");
    }
}

function b12bought() {
    if (money >= 12500) {
        amount++;
        b12b = true;
        money -= 12500;
        document.getElementById("button12").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button14").setAttribute("class", "mainbuttons");
    } else {
        errormsg("you need at least $12,500 to buy this");
    }
}

function b13bought() {
    if (energy >= 350) {
        amount++;
        b13b = true;
        energy -= 350;
        document.getElementById("button13").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button15a").setAttribute("class", "mainbuttons");
        document.getElementById("button15b").setAttribute("class", "mainbuttons");
        document.getElementById("sub4").setAttribute("class", "descsubs");
    } else {
        errormsg("you need at least 350! to buy this");
    }
}

function b14bought() {
    if (money >= 100000) {
        amount++;
        b14b = true;
        money -= 100000;
        document.getElementById("button14").setAttribute("class", "mainbuttons hidden");
    } else {
        errormsg("you need at least $100,000 to buy this");
    }
}

function b15abought() {
    if (money >= 250000) {
        amount++;
        b15b = true;
        moneyadd += 2.5;
        money -= 250000;
        document.getElementById("button15a").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button15b").setAttribute("class", "mainbuttons hidden");
        document.getElementById("sub4").setAttribute("class", "descsubs hidden");
        document.getElementById("button16").setAttribute("class", "mainbuttons");
    } else {
        errormsg("you need at least $250,000 to buy this");
    }
}

function b15bbought() {
    if (money >= 250000) {
        amount++;
        b15b = true;
        energyadd += 2;
        money -= 250000;
        document.getElementById("button15a").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button15b").setAttribute("class", "mainbuttons hidden");
        document.getElementById("sub4").setAttribute("class", "descsubs hidden");
        document.getElementById("button16").setAttribute("class", "mainbuttons");
    } else {
        errormsg("you need at least $250,000 to buy this");
    }
}

function b16bought() {
    if (money >= 456789) {
        amount++;
        b16b = true;
        b7formula = 1.15 ** amount;
        money -= 456789;
        document.getElementById("button16").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button17").setAttribute("class", "mainbuttons");
        document.getElementById("button18").setAttribute("class", "mainbuttons");
    } else {
        errormsg("you need at least $456,789 to buy this");
    }
}

function b17bought() {
    if (money >= 2000000 && energy >= 30000) {
        amount++;
        b17b = true;
        money -= 2000000;
        energy -= 30000;
        document.getElementById("button17").setAttribute("class", "mainbuttons hidden");
    } else {
        errormsg("you need at least $2M and 30,000! to buy this");
    }
}

function b18bought() {
    if (energy >= 15000) {
        amount++;
        b18b = true;
        energy -= 15000;
        document.getElementById("button18").setAttribute("class", "mainbuttons hidden");
        document.getElementById("button19").setAttribute("class", "mainbuttons");
        document.getElementById("sub5").setAttribute("class", "descsubs");
    } else {
        errormsg("you need at least 15,000! to buy this");
    }
}

function b19bought() {
    if (energy >= 25000) {
        amount++;
        b19b = true;
        energy -= 25000;
        powercap += Math.round((Math.log10(money))/(Math.log10(8)));
        document.getElementById("button19").setAttribute("class", "mainbuttons hidden");
        document.getElementById("sub5").setAttribute("class", "descsubs hidden");
        document.getElementById("button20").setAttribute("class", "mainbuttons");
        document.getElementById("sub6").setAttribute("class", "descsubs");
    } else {
        errormsg("you need at least 25,000! to buy this");
    }
}

function b20bought() {
    if (money >= 50000000 && energy >= 100000) {
        amount++;
        b20b = true;
        money -= 50000000;
        energy -= 100000; 
        document.getElementById("button20").setAttribute("class", "mainbuttons hidden");
        document.getElementById("sub6").setAttribute("class", "descsubs hidden");
        document.getElementById("cryptopaneltoggle").setAttribute("class", "sidebaritem");
    } else {
        errormsg("you need at least $50M and 100,000! to buy this");
    }
}

function eb1bought() {
    if (energy >= eb1cost && eb1a < 30) {
        eb1a++;
        energy -= eb1cost;
        eb1cost *= 2.5;
        powerreducetime += 0.1;
        document.getElementById("eb1c").innerHTML = "costs " + commanum(Math.round(eb1cost)) + "<span style='color:rgb(255, 187, 0);'>" + "!" + "</span>";
    } else if (eb1a >= 30) {
        document.getElementById("eb1c").innerHTML = "MAXED";
        errormsg("maxed out");
    } else {
        document.getElementById("eb1c").innerHTML = "costs " + commanum(Math.round(eb1cost)) + "<span style='color:rgb(255, 187, 0);'>" + "!" + "</span>";
        errormsg("you need at least " + commanum(Math.round(eb1cost)) + "! to buy this");
    }
}

function eb2bought() {
    if (energy >= eb2cost && eb2a < 49) {
        eb2a++;
        energy -= eb2cost;
        eb2cost *= 2;
        powerperclick += 1;
        powersubtractor += 1;
        document.getElementById("eb2c").innerHTML = "costs " + commanum(Math.round(eb2cost)) + "<span style='color:rgb(255, 187, 0);'>" + "!" + "</span>";
    } else if (eb2a >= 49) {
        document.getElementById("eb2c").innerHTML = "MAXED";
        errormsg("maxed out");
    } else {
        document.getElementById("eb2c").innerHTML = "costs " + commanum(Math.round(eb2cost)) + "<span style='color:rgb(255, 187, 0);'>" + "!" + "</span>";
        errormsg("you need at least " + commanum(Math.round(eb2cost)) + "! to buy this");
    }
}

function eb3bought() {
    if (energy >= eb3cost) {
        eb3a++;
        energy -= eb3cost;
        eb3cost = eb3cost ** 1.2;
        powercap += 2;
        document.getElementById("eb3c").innerHTML = "costs " + commanum(Math.round(eb3cost)) + "<span style='color:rgb(255, 187, 0);'>" + "!" + "</span>";
    } else if (eb3a >= 49) {
        document.getElementById("eb3c").innerHTML = "MAXED";
        errormsg("maxed out");
    } else {
        document.getElementById("eb3c").innerHTML = "costs " + commanum(Math.round(eb3cost)) + "<span style='color:rgb(255, 187, 0);'>" + "!" + "</span>";
        errormsg("you need at least " + commanum(Math.round(eb3cost)) + "! to buy this");
    }
}

function eb4bought() {
    if (energy >= eb4cost1 && money >= eb4cost2 && eb4a < 11) {
        eb4a++;
        energy -= eb4cost1;
        money -= eb4cost2;
        eb4cost1 *= 10;
        eb4cost2 *= 10;
        eb4mult *= 1.5;
        document.getElementById("eb4c").innerHTML = "costs " + commanum(Math.round(eb4cost1) + "! and $" + commanum(Math.round(eb4cost2)));
    } else if (eb4a >= 11) {
        document.getElementById("eb4c").innerHTML = "MAXED";
        errormsg("maxed out");
    } else {
        document.getElementById("eb4c").innerHTML = "costs " + commanum(Math.round(eb4cost1) + "<span style='color:rgb(255, 187, 0);'>" + "!" + "</span> and <span style='color: aqua;'>" + "$" + "</span>" + commanum(Math.round(eb4cost2)));
        errormsg("you need at least " + commanum(Math.round(eb4cost1)) + "! and $" + commanum(Math.round(eb4cost2)) + " to buy this");
    }
}

// error messages
function errormsg(msg) {
    document.getElementById("errormsg").innerHTML = "error: " + msg;
    document.getElementById("errormsg").classList.toggle("fadeanim");
}

document.getElementById("errormsg").addEventListener("animationend", () => {
    document.getElementById("errormsg").classList.toggle("fadeanim");
});

// other code

// default display before data loads
document.getElementById("cash-display").innerHTML = " 0.00 ";

// loads data
if (localStorage.getItem("saveGame") != null) {
    load();
}

// checks for mobile users
var hasTouchScreen = true;

var UA = navigator.userAgent;
hasTouchScreen = (
    /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
    /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
);

if (hasTouchScreen) {
    document.getElementById("antimobile").setAttribute("class", "");
}

// silly thing from cookie clicker (parsed in very easy-to-understand code)
// p.s. this is my favorite portion of code in this entire game (i figured this out myself!!!)
var phrases = ["what are you doing here?", "are you having fun yet?", "hope you're not trying to cheat...", "howdy!", "how are you doing this fine morning/afternoon/evening/night?", "they know what you did. and they are not happy.", "also try Antimatter Dimensions!", "...end is never the end is never the end is never the end is never the end is never the end is never the..."];
function randomize(max) {
    return Math.floor(Math.random() * max);
}
console.log(phrases[randomize(phrases.length)]);
