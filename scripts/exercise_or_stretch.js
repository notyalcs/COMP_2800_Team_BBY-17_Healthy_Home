$(".r").on("click", function(){
    let buttonText = $(this).text();
    console.log(buttonText);
    localStorage.setItem('stretch', buttonText);
    window.location.href="chooseRoutine.html";
});