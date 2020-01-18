$(document).ready(function () {
    //$('#header').css({ opacity: 1 });
    //$('#titulo').css({ opacity: 1 });

    $('#sec1').viewportChecker({
        classToAdd: 'animated visible fadeIn', // Class to add to the elements when they are visible,      
        //repeat: true

    });
    $('#titulosec1').viewportChecker({
        classToAdd: 'animated visible bounceInLeft', // Class to add to the elements when they are visible,  
        //repeat: true

    });
    $('#titulosub1').viewportChecker({
        classToAdd: 'animated visible bounceInRight', // Class to add to the elements when they are visible,  
        //repeat: true

    });
    console.log('fin');

});