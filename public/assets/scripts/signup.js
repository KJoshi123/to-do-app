$(document).ready(function(){

    $('form').on('submit', async ()=>{
        const email = $("#name").val();
        const password = $("#password").val();
        console.log("username : ", username, " password: ",password);

        /*$.ajax({
            type: 'POST',
            url: '/signup',
            contentType: 'application/json',
            async: true,
            data: { email, password},
            success: function(data){
                console.log(data);
            },
            fail: function(data){
                console.log(data);
            }
        });*/

        try{
            const res = await fetch('/signup', {
                method:'POST',
                body:{ email: email, password: password}
            });
            console.log(res);
        }
        catch(error){
            console.log(error)
        }
    });
});
