// $('#profilesave').click(function(event) {
//     event.preventDefault();

//     $.ajax({
//         global: false,
//         type: 'POST',
//         url: /user/change,
//         dataType: 'html',
//         // data: {
//         //     name: $("#profile_name").val(),
//         //     surname: $("#profile_surname").val(),
//         //     age: $("#profile_age").val()
//         // },
//         success: function (result) {
//             console.log(result);
//         },
//         error: function (request, status, error) {
//             serviceError();
//         }
//     });
// });


// $(document).ready(function(){
//   $("#profilemodify").mouseenter(function(){
//     alert("The paragraph was clicked.");
//   });
// });




$(document).ready(function(){
    $('#profilesave').click(function(event) {
        event.preventDefault();

        $.ajax({
            global: false,
            type: 'POST',
            url: /user/change,
            dataType: 'html',
            data: {
                name: $("#profile_name").val(),
                surname: $("#profile_surname").val(),
                age: $("#profile_age").val(),
                name: $("#profile_name").val(),
                surname: $("#profile_surname").val()
            },
            success: function (result) {
                console.log(result);
            },
            error: function (request, status, error) {
                serviceError();
            }
        });
    });
});