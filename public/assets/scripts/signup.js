$(document).ready(function(){

    $('form').on('submit', async ()=>{
        const email = $("#name").val();
        const password = $("#password").val();
        console.log("username : ", username, " password: ",password);

        try{
            const res = await fetch('/signup', {
                method:'POST',
                body:{ email: email, password: password},
                headers: { 'Content-Type' : 'application/json'}
            });
            const response = await res.json();
            console.log(response);
        }
        catch(error){
            console.log(error)
        }
    });
});
