document.getElementById("btn1").onclick = btn1clicked;

function btn1clicked() {
    document.getElementById("btn1").disabled = true;
    console.log("clicked");
    setTimeout(function() {
        window.alert(document.getElementById("desc1").innerHTML);
        document.getElementById("btn1").disabled = false;
    }, 5000)
};


