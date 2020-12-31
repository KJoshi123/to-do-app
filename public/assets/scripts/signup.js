$(document).ready(function(){

    $('form').on('submit', ()=>{
        const email = $("#name").val();
        const password = $("#password").val();
        console.log("username : ", username, " password: ",password);

        $.ajax({
            url: "/signup",
            method: "POST",
            data: { email, password}
        }).done( function(response){
            console.log(response);
        }).fail( function(error) {
            console.log(error);
        });
    })
});
