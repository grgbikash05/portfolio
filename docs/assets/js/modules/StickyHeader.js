import $ from 'jquery';
import '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
    constructor() {
        this.headerElement = $('.navbar');
        this.headerTriggerElement = $('.myimagebox');
        this.pageSections = $('.page-section');
        this.headerLinks = $('.nav-link');
        this.createHeaderWaypoint();
        this.createPageSectionsWaypoints();
    }

    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function(direction) {
                if(direction == "down") {
                    that.headerElement.removeClass('bg-transparent');
                    that.headerElement.addClass('bg-primary');
                } else {
                    that.headerElement.addClass('bg-transparent');
                    that.headerElement.removeClass('bg-primary');
                }
            }
        });
    }

    createPageSectionsWaypoints() {
        var that = this;
        this.pageSections.each(function() {
            var currentPageSection = this;
            console.log(this);
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if(direction == "down") {
                        var matchingLinkHeader = currentPageSection.getAttribute('data-matching-links');
                        that.headerLinks.removeClass('active');
                        $(matchingLinkHeader).addClass('active');
                    }
                },
                offset: "5%",
            });

            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if(direction == "up") {
                        var matchingLinkHeader = currentPageSection.getAttribute('data-matching-links');
                        that.headerLinks.removeClass('active');
                        $(matchingLinkHeader).addClass('active');
                    }
                },
                offset: "-40%",
            });
        });
    }
}

export default StickyHeader;