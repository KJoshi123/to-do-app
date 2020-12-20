$(document).ready(function(){

    $('form').on('submit', function(){
        
        $.ajax({
            type:'POST',
            url:'/todo',
            data: {taskName: $('form input[name=taskName]').val(),
                    description: $('form input[name=description]').val(),
                        deadline: $('form input[name=deadline]').val()},
            success: function(data){
                location.reload();
            },
            fail: function(data){
                console.log(data);
            }
        
        })
        
    })
});

function deleteItem(object){
    console.log(object);
    $.ajax({
        type:'POST',
        url:'/todo/deleteTask',
        data: {taskName: object},
        success: function(data){
            location.reload();
        },
        fail: function(data){
            console.log(data);
        }
    
    });
}

function doneItem(object){
    console.log(object);
    $.ajax({
        type:'POST',
        url:'/todo/doneTask',
        data: {taskName: object},
        success: function(data){
            location.reload();
        },
        fail: function(data){
            console.log(data);
        }
    
    });
}