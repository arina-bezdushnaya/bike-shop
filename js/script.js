$( function() {
  var dateFormat = "mm/dd/yy",
    from = $( "#from" )
      .datepicker({
        defaultDate: "+1w",
        showOtherMonths: true,
        showButtonPanel: true,
        showOn: "both",
        buttonText: "Select date",
        buttonImage: "icons/date.png",
        numberOfMonths: 3,
        changeMonth: true,
        changeYear: true,
        yearRange: "-10:+10",
        dateFormat: "mm/dd/yy"
      })
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
    to = $( "#to" ).datepicker({
      defaultDate: "+1w",
      showButtonPanel: true,
      showOn: "both",
      buttonText: "Select date",
      buttonImage: "icons/date.png",
      numberOfMonths: 3,
      changeMonth: true,
      changeYear: true,
      yearRange: "-10:+10",
      dateFormat: "mm/dd/yy"
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });

  function getDate( element ) {
    var date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }

    return date;
  }
} );

$( function() {
	$( "#animations" ).on( "change", function() {
		$( "#from" ).datepicker( "option", "showAnim", $( this ).val() );
    $( "#to" ).datepicker( "option", "showAnim", $( this ).val() );
	});
} );

$( function() {
    var availableTags = [
      "Felt",
      "Fortified",
      "Sixthreezero",
      "Critical Cycles",
      "Santa Cruz",
      "Cervelo",
      "Trek",
      "Scott",
      "Kona",
      "Giordano",
      "Giant",
      "Specialized",
      "Cannondale",
      "Mongoose",
      "Schwinn",
      "Fuji",
      "Bianchi",
      "Salsa",
      "Diamondback",
      "Pure Cycles",
      "Marin",
      "Firmstrong",
      "Tommaso"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );
