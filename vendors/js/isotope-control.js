// init Isotope
var $grid = $('#portfolio-list').isotope({
    // options...
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });