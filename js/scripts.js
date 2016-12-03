$(document).ready(function() {
  var $mobileMenuButton = $('.header__mobile-menu-button');
  $mobileMenuButton.click( function(event) {
      event.preventDefault();
      var $headerNavigation = $('.header__navigation');
      var $offCanvasContainer = $('.off-canvas-container');
      // $offCanvasContainer.toggleClass('off-canvas-container--slide-left');
      var leftValue = $offCanvasContainer.css("left");
      if ( leftValue == "0px" ) {
        $offCanvasContainer.css("left", "-50%");
      } else {
        $offCanvasContainer.css("left", "0px")
      }
  });
});
