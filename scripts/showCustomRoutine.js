//expands the custom routine 1 on click
$('#b1').on('click', function () {
    document.getElementById('desc1').style.display = document.getElementById('desc1').style.display === 'none' ? '' : 'none';
    if(document.getElementById('desc1').style.display == 'none'){
        $(this).val('Expand');
    }else{
        $(this).val('Collapse');
    }
});
//expands the custom routine 2 on click
$('#b2').on('click', function () {
    document.getElementById('desc2').style.display = document.getElementById('desc2').style.display === 'none' ? '' : 'none';
    if(document.getElementById('desc2').style.display == 'none'){
        $(this).val('Expand');
    }else{
        $(this).val('Collapse');
    }
});

//expands the custom routine 3 on click
$('#b3').on('click', function () {
    document.getElementById('desc3').style.display = document.getElementById('desc3').style.display === 'none' ? '' : 'none';
    if(document.getElementById('desc3').style.display == 'none'){
        $(this).val('Expand');
    }else{
        $(this).val('Collapse');
    }
});

//expands the custom routine 4 on click
$('#b4').on('click', function () {
    document.getElementById('desc4').style.display = document.getElementById('desc4').style.display === 'none' ? '' : 'none';
    if(document.getElementById('desc4').style.display == 'none'){
        $(this).val('Expand');
    }else{
        $(this).val('Collapse');
    }
});