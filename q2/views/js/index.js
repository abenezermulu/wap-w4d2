$(() => {
    $('#ask8Ball').click(() => {
        $.ajax({
            url: 'http://localhost:3000/8ball', 
            type: 'GET', 
            success: (result) => {
                $('#question').val(result);
            }
        });
    });
});