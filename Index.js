

const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9")

let count = 0;
let flag = false;
// Computer will run this
function Result() {
    if (((b1.value != "" && b2.value != "" && b3.value != "") && (b1.value == "0" && b2.value == "0" && b3.value == "0")) ||
        ((b4.value != "" && b5.value != "" && b6.value != "") && (b4.value == "0" && b5.value == "0" && b6.value == "0")) ||
        (((b7.value != "" && b8.value != "" && b9.value != "")) && (b7.value == "0" && b8.value == "0" && b9.value == "0")) ||
        ((b1.value != "" && b4.value != "" && b7.value != "") && (b1.value == "0" && b4.value == "0" && b7.value == "0")) ||
        ((b4.value != "" && b5.value != "" && b6.value != "") && (b2.value == "0" && b5.value == "0" && b8.value == "0")) ||
        ((b4.value != "" && b5.value != "" && b6.value != "") && (b3.value == "0" && b6.value == "0" && b9.value == "0")) ||
        ((b4.value != "" && b5.value != "" && b6.value != "") && (b1.value == "0" && b5.value == "0" && b9.value == "0")) ||
        ((b4.value != "" && b5.value != "" && b6.value != "") && (b3.value == "0" && b5.value == "0" && b7.value == "0"))) {
        window.alert("Player 0 WON the Match")
    } else if (((b1.value != "" && b2.value != "" && b3.value != "") && (b1.value == "0" && b2.value == "0" && b3.value == "0")) ||
        ((b4.value != "" && b5.value != "" && b6.value != "") && (b4.value == "X" && b5.value == "X" && b6.value == "X")) ||
        (((b7.value != "" && b8.value != "" && b9.value != "")) && (b7.value == "X" && b8.value == "X" && b9.value == "X")) ||
        ((b1.value != "" && b4.value != "" && b7.value != "") && (b1.value == "X" && b4.value == "X" && b7.value == "X")) ||
        ((b4.value != "" && b5.value != "" && b6.value != "") && (b2.value == "X" && b5.value == "X" && b8.value == "X")) ||
        ((b4.value != "" && b5.value != "" && b6.value != "") && (b3.value == "X" && b6.value == "X" && b9.value == "X")) ||
        ((b4.value != "" && b5.value != "" && b6.value != "") && (b1.value == "X" && b5.value == "X" && b9.value == "V")) ||
        ((b4.value != "" && b5.value != "" && b6.value != "") && (b3.value == "X" && b5.value == "X" && b7.value == "V"))) {
        window.alert("Player X WON the Match")
    }
}
function Random() {
    if (document.getElementById('b1').value !== "") { // To check weather all boxex are filled
        if (document.getElementById('b1').value !== ""
            && document.getElementById('b2').value !== ""
            && document.getElementById('b3').value !== ""
            && document.getElementById('b4').value !== ""
            && document.getElementById('b5').value !== ""
            && document.getElementById('b6').value !== ""
            && document.getElementById('b7').value !== ""
            && document.getElementById('b8').value !== ""
            && document.getElementById('b9').value !== "") {
            console.log("return ")
            return
        }
        else {
            let x = parseInt(Math.random() * 10)
            let y = parseInt(Math.random() * 10)
            console.log(x, y)
            if (x > 3 || x == 0 || y == 0 || y > 3) {
                console.log("x>3")
                return Random()
            }
            else {
                if (x == 1 && y == 1) {
                    if (document.getElementById('b1').value !== "") { // To check weather all boxex are filled

                        return Random()
                    } else {
                        document.getElementById("b1").value = "X";
                        Result()
                        count++;
                        flag = false;
                    }
                } else if (x == 1 && y == 2) {
                    if (document.getElementById('b2').value !== "") {
                        return Random()
                    } else {
                        document.getElementById("b2").value = "X";
                        Result()
                        count++;
                        flag = false;
                    }
                }
                else if (x == 1 && y == 3) {
                    if (document.getElementById('b3').value !== "") {
                        return Random()
                    } else {
                        document.getElementById("b3").value = "X";
                        Result()
                        count++;
                        flag = false;
                    }
                }
                else if (x == 2 && y == 1) {
                    if (document.getElementById('b4').value !== "") {
                        return Random()
                    } else {
                        document.getElementById("b4").value = "X";
                        Result()
                        count++;
                        flag = false;
                    }
                }
                else if (x == 2 && y == 2) {
                    if (document.getElementById('b5').value !== "") {
                        return Random()
                    } else {
                        document.getElementById("b5").value = "X";
                        Result()
                        count++;
                        flag = false;
                    }
                }
                else if (x == 2 && y == 3) {
                    if (document.getElementById('b6').value !== "") {
                        return Random()
                    } else {
                        document.getElementById("b6").value = "X";
                        Result()
                        count++;
                        flag = false;
                    }
                }
                else if (x == 3 && y == 1) {
                    if (document.getElementById('b7').value !== "") {
                        return Random()
                    } else {
                        document.getElementById("b7").value = "X";
                        Result()
                        count++;
                        flag = false;
                    }
                }
                else if (x == 3 && y == 2) {
                    if (document.getElementById('b8').value !== "") {
                        return Random()
                    } else {
                        document.getElementById("b8").value = "X";
                        Result()
                        count++;
                        flag = false;
                    }
                }
                else if (x == 3 && y == 3) {
                    if (document.getElementById('b9').value !== "") {
                        return Random()
                    } else {
                        document.getElementById("b9").value = "X";
                        Result()
                        count++;
                        flag = false;
                    }
                }
            }
        }
    }
}
// Click Function
function Clickb1() {
    if (document.getElementById("b1").value === "" && flag == false) {
        document.getElementById("b1").value = 0;
        Result()
        count++;
        flag = true
    }
    if (flag == true && count <= 8) {
        setTimeout(Random, 3000)  // It will delay system response by 3 sec
    }

}
function Clickb2() {
    if (document.getElementById("b2").value === "" && flag == false) {
        document.getElementById("b2").value = 0;
        Result()
        flag = true;
    }
    if (flag == true && count <= 8) {
        setTimeout(Random, 3000)
    }
}
function Clickb3() {
    if (document.getElementById("b3").value === "" && flag == false) {
        document.getElementById("b3").value = 0;
        Result()
        flag = true;
    }
    if (flag == true && count <= 8) {
        setTimeout(Random, 3000)
    }
}
function Clickb4() {
    if (document.getElementById("b4").value === "" && flag == false) {
        document.getElementById("b4").value = 0;
        Result()
        flag = true;
    }
    if (flag == true && count <= 8) {
        setTimeout(Random, 3000)
    }
}
function Clickb5() {
    if (document.getElementById("b5").value === "" && flag == false) {
        document.getElementById("b5").value = 0;
        Result()
        flag = true;
    }
    if (flag == true && count <= 8) {
        setTimeout(Random, 3000)
    }
}
function Clickb6() {
    if (document.getElementById("b6").value === "" && flag == false) {
        document.getElementById("b6").value = 0;
        Result()
        flag = true;
    }
    if (flag == true && count <= 8) {
        setTimeout(Random, 3000)
    }
}
function Clickb7() {
    if (document.getElementById("b7").value === "" && flag == false) {
        document.getElementById("b7").value = 0;
        Result()
        flag = true;
    }
    if (flag == true && count <= 8) {
        setTimeout(Random, 3000)
    }
}
function Clickb8() {
    if (document.getElementById("b8").value === "" && flag == false) {
        document.getElementById("b8").value = 0;
        Result()
        flag = true;
    }
    if (flag == true && count <= 8) {
        setTimeout(Random, 3000)
    }
}
function Clickb9() {
    if (document.getElementById("b9").value === "" && flag == false) {
        document.getElementById("b9").value = 0;
        Result()
        flag = true;
    }
    if (flag == true && count <= 8) {
        setTimeout(Random, 3000)
    }
}

Result()