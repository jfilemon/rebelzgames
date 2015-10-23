$(function() {
    initDropDowns($("div.shy-menu"));
});

function initDropDowns($menu) {

    $menu.children(".shy-menu-hamburger").on("click", function() {
        var thisTrigger = jQuery(this),
            thisMenu = thisTrigger.parent(),
            thisPanel = thisTrigger.next();

        if (thisMenu.hasClass("is-open")) {
            thisMenu.removeClass("is-open");
            jQuery(document).off("click");
            thisPanel.off("click");
        } else {
            $menu.removeClass("is-open");
            thisMenu.addClass("is-open");

            jQuery(document).on("click", function() {
                $menu.removeClass("is-open");
            });
            thisPanel.on("click", function(e) {
                e.stopPropagation();
            });
        }

        return false;
    });

    $menu.find(".shy-menu-panel a").on("click", function() {
        $menu.children(".shy-menu-hamburger").trigger('click');
    });
}
