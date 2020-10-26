var GLOBAL_PRIVATE_VARIABLE = {
    uniquePath(ending, url = location.href){
        // cut protocol
        let urlWithOutProtocol = url.split("://")[1];

        // get protocol
        let protocol = url.split("://")[0];

        let checking = '/frontend/web';

        // get domain
        let domain = urlWithOutProtocol.split("/")[0]

        // checking frontend/web
        if(urlWithOutProtocol.includes(checking)){
            return `${protocol}://${domain}${checking}/${ending}`;
        }else
            return `${protocol}://${domain}/${ending}`;
    },

    onPage(ending, url = location.href){
        return url.includes(ending);
    }
};


$('body').on('click', ".remove-time", function() {

    $.ajax({
        type: 'POST',
        url: GLOBAL_PRIVATE_VARIABLE.uniquePath("remove"),
        data: {
          id : ($(this).attr("data-id"))
        },
        success: function(res){
            // elem.closest(".main-time").remove();
        },
        error: function(e){
            console.log(e)
        }
    });

    $(this).closest(".main-time").remove();
});

if(GLOBAL_PRIVATE_VARIABLE.onPage("add"))
{
    // add hours
    $('body').on('click', ".timer-block-hours", function() {
        $("#hours").val($(this).attr("data-hours"));
    });

    // add minutes
    $('body').on('click', ".timer-block-minutes", function() {
        $("#minutes").val($(this).attr("data-minutes"));
    });

    // add minutes
    $('body').on('click', ".author-block", function() {

        let author = $(this).attr("data-author");
        let status = +$(this).attr("data-active");

        $("#developer").val(author);
        $(this).attr("data-active", "1").addClass("author-block-active");
        clear(author)



    });

}

function clear(element)
{
    $(".author-block").each( (index, item) => {
        if( $(item).attr("data-author") !== element )
            $(item).removeClass("author-block-active").attr("data-active", "0");
    } )
}
