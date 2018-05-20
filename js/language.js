$(".language select").bind('change', function() {
		//change css depending on what is selected
        var sel = $(".language select").val();
        if (sel=='english') {
           $(".english").css("display", "inline");
           $(".vietnamese").css("display", "none");
        }else if (sel=='vietnamese') {
           $(".english").css("display", "none");
           $(".vietnamese").css("display", "inline");
        }
        }
        