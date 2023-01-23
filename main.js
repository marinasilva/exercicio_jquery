$(document).ready(function () {    
    $('header button').click(function() {
      $('form').slideDown();
    })

    $('#btn-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const newTask = $('#new-task').val();
        const newItem = $('<li style="display: none"></li>');        
        $(`
            <div class="task-item">
                <p>${newTask}</p>                
            </div>
        `).appendTo(newItem);

        $(newItem).appendTo('ul');
        $(newItem).fadeIn(1000);

        $('#new-task').val('');
    })

    $('ul').on('click','li',function(){        
        $(this).toggleClass('riscado');

    })
})

