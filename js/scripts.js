$(document).ready(function() {
  var $mobileMenuButton = $('.header__mobile-menu-button');
  $mobileMenuButton.click( function(event) {
      event.preventDefault();
      var $headerNavigation = $('.header__navigation');
      var $offCanvasContainer = $('.off-canvas-container');
      $offCanvasContainer.toggleClass('off-canvas-container--slide-left');
  });
});
