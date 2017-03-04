$( document ).ready(function() {
    $(function(){
    $(document).click(function(e){
        var x = e.pageX + 'px';
        var y = e.pageY + 'px';
        var trunk = $('<div class="trunk">');
        var branch = $('<div class="branch"><div class="leaves leaf-group"></div></div>');
        var leaves = $('<div class="leaves">');
        var shadow = $('<div class="shadow">');
        var tree = $('<div class="tree">').css({
            "position": "absolute",                    
            "left": x,
            "top": y
        });
        tree.append(trunk);
        trunk.append(branch);
        trunk.append(leaves);
        $(".tree-field").append(tree);        
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
        this.find('> div').each(function(id,div){
            $(div).removeClass().addClass(classes[(cycle+id)%len]);
        });

        if(max > 0 && currentRotation > max) clearInterval(timer);
    };

    timer = setInterval(rotateFn.bind($(this)), interval);

    return this;
};


$('body').rotateClasses(["spring", "summer", "fall", "winter"], 2000, 1000)

});

