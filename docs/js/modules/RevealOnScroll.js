import $ from "jquery";
import "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
    constructor() {
        this.revealItem = $(".aboutme, .card, .technicalskillsprogress");
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.revealItem.addClass("revealitem");
    }

    createWaypoints() {
        this.revealItem.each(function() {
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass('revealitem--is-visible');
                },
                offset: "100%"
            });
        });
    }
}

export default RevealOnScroll;