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
