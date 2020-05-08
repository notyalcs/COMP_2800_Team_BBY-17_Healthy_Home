let alert = document.getElementById("ding");
$("#btn1").click(function() {
    document.getElementById("btn1").disabled = true;
    console.log("clicked 1");
    setTimeout(function() {
        alert.play();
        window.alert(document.getElementById("rem1").textContent);
        document.getElementById("btn1").disabled = false;
    }, 1000)
})

$("#btn2").click(function() {
    document.getElementById("btn2").disabled = true;
    console.log("clicked 2");
    setTimeout(function() {
        alert.play();
        window.alert(document.getElementById("rem2").textContent);
        document.getElementById("btn1").disabled = false;
    }, 2000)
})

$("#btn3").click(function() {

    document.getElementById("btn2").disabled = true;
    console.log("clicked 3");
    setTimeout(function() {
        alert.play();
        window.alert(document.getElementById("rem3").textContent);
        document.getElementById("btn1").disabled = false;
    }, 3000)
})

$("#btn4").click(function() {

    document.getElementById("btn2").disabled = true;
    console.log("clicked 4");
    setTimeout(function() {
        alert.play();
        window.alert(document.getElementById("rem4").textContent);
        document.getElementById("btn1").disabled = false;
    }, 4000)
})


