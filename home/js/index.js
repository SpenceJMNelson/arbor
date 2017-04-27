/* $( document ).ready(function() {
    $( ".branch" ).append('<div class="leaf"></div><div class="seed"></div><div class="flower"></div>');
    

}); */

$(document.body).on('click', '.initial-tree-info' ,function(){
        $(this).siblings(".supplemental-tree-info").addClass( "active" );
        $(".initial-tree-info").addClass( "active" );

});

$(document.body).on('click', '.backbutton.toprimary' ,function(){
        $(".initial-tree-info").removeClass( "active" );
        $(".supplemental-tree-info").removeClass( "active" );
});


$(document.body).on('click', '.showleafcontent' ,function(){
        $(".tertiary-tree-info").addClass( "active" );
        $(".tertiarynav-link").removeClass( "active" );
        $(".tertiarynav-link-leaf").addClass( "active" );
        $(".tertiary-content").removeClass( "active" );
        $(".leaf-content").addClass( "active" );
});

$(document.body).on('click', '.showfruitcontent' ,function(){
        $(".tertiary-tree-info").addClass( "active" );
        $(".tertiarynav-link").removeClass( "active" );
        $(".tertiarynav-link-fruit").addClass( "active" );
        $(".tertiary-content").removeClass( "active" );
        $(".fruit-content").addClass( "active" );
});

$(document.body).on('click', '.showflowercontent' ,function(){
        $(".tertiary-tree-info").addClass( "active" );
        $(".tertiarynav-link").removeClass( "active" );
        $(".tertiarynav-link-flower").addClass( "active" );
        $(".tertiary-content").removeClass( "active" );
        $(".flower-content").addClass( "active" );
});


$(document.body).on('click', '.backbutton.tosecondary' ,function(){
        $(".tertiary-tree-info").removeClass( "active" );
});




$(document.body).on('click', '.tertiarynav-link-leaf' ,function(){
        $(".tertiarynav-link").removeClass( "active" );
        $(this).addClass( "active" );
        $(".tertiary-content").removeClass( "active" );
        $(".leaf-content").addClass( "active" );
});

$(document.body).on('click', '.tertiarynav-link-fruit' ,function(){
        $(".tertiarynav-link").removeClass( "active" );
        $(this).addClass( "active" );
        $(".tertiary-content").removeClass( "active" );
        $(".fruit-content").addClass( "active" );
});

$(document.body).on('click', '.tertiarynav-link-flower' ,function(){
        $(".tertiarynav-link").removeClass( "active" );
        $(this).addClass( "active" );
        $(".tertiary-content").removeClass( "active" );
        $(".flower-content").addClass( "active" );
});


$( document ).ready(function() {
    $('#explore-button').click(function(){
    	$(this).addClass('active').siblings('.active').removeClass('active');
    	$('.explore-view').addClass('active').siblings('.active').removeClass('active');
	});

	$('#play-button').click(function(){
    	$(this).addClass('active').siblings('.active').removeClass('active');
    	$('.play-view').addClass('active').siblings('.active').removeClass('active');
	});

	$('#think-button').click(function(){
		$(this).addClass('active').siblings('.active').removeClass('active');
    	$('.think-view').addClass('active').siblings('.active').removeClass('active');
	});

});

// found help here: https://ctrlq.org/code/20004-google-spreadsheets-json

$.getJSON('https://spreadsheets.google.com/feeds/list/1Q36E8DgVodL97kdDYEyx-jlRhPqSjqy1xe2DHQ7DiyU/od6/public/values?alt=json', function(data) {

  //mustache for images
  var template = $('#memberTemplate').html();
  var info = Mustache.to_html(template, data.feed.entry);
  $('#barGuildMemberList').html(info);
  // done with mustache templating

  var options = {
    valueNames: [
      'treenamestd',
      'treenamesci',
      'summary',
      'longevity'
    ]
  };

  var listy = new List('memberWrapper', options);
  
});


$( document ).ready(function() {
    $(function(){
    $(".play-view").click(function(e){
        var x = e.pageX + 'px';
        var y = e.pageY + 'px';
        var tree = $('<div class="tree deciduous"> <div class="trunk"> <div class="branch level-1"> <div class="branch level-2"> <div class="branch level-3"> <div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-3"> <div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-2"> <div class="branch level-3"> <div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-3"> <div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-1"> <div class="branch level-2"> <div class="branch level-3"> <div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-3"> <div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-2"> <div class="branch level-3"> <div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-3"> <div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-1"> <div class="branch level-2"> <div class="branch level-3"> <div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-3"> <div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-2"> <div class="branch level-3"> <div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-3"> <div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="branch level-4"><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div><div class="leaf"></div><div class="seed"></div><div class="flower"></div></div></div></div>').css({
            "position": "absolute",                    
            "left": x,
            "top": y
        });

        $(".field").append(tree);        
    });
    });
});

$( document ).ready(function() {
      jQuery.fn.rotateClasses = function(classes, interval, max) {
    var currentRotation = 1;
    var timer = null;
    var rotateFn = function() {
        var len = classes.length;
        var cycle = currentRotation++ % len;
        this.each(function(id,div){
            $(div).removeClass().addClass(classes[(cycle+id)%len]);
        });

        if(max > 0 && currentRotation > max) clearInterval(timer);
    };

    timer = setInterval(rotateFn.bind($(this)), interval);

    return this;
};


$('.mainbody').rotateClasses(["spring", "springsummer", "summer", "summerfall", "fall", "fallwinter", "winter", "winterspring"], 2000, 1000)

});
