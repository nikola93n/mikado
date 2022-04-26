//Isotope
      // init Isotope
      var $grid = $('#portfolio-list').isotope({
        // options
        filter: '*',
        resizable: false,
        });
        $grid.imagesLoaded().progress( function(){
            $grid.isotope('layout');
        });
        // filter items on button click
        $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
  
  
  

      
      
  
        