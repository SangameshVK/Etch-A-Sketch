$(document).ready(
    function(){
        $('button').click(function(){
            $('tr').remove();
            var grid= prompt('how many squares per side?');
        for(var i=0; i<grid;++i)
            $('table').append("<tr></tr>");
        for(var j=0; j<grid;++j)
          $('tr').append("<td></td>");
        $('td').mouseenter(function(){
                $(this).addClass('mark');
                });
           });        
     });