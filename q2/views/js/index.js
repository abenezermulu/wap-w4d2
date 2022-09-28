$(() => {
    // $('#ask8Ball').click(() => {
    //     $.ajax({
    //         url: 'http://localhost:3000/8ball', 
    //         type: 'GET', 
    //         success: (result) => {
    //             $('#question').val(result);
    //         }
    //     });
    // });

    $('#question').keypress(function (e) {
        var key = e.which;
        if(key == 13){
            $.ajax({
                url: 'http://localhost:3000/8ball', 
                type: 'GET', 
                success: (result) => {
                    $('#question').val(result);
                }
            });
        }
      });
});