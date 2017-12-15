console.log('loaded');

$(document).ready(do_setup);

function do_setup() {
  $(".navbar a, footer a[href='#myPage']").click(do_scroll);
  $(window).scroll(do_window);
}

function do_scroll(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function() {
      window.location.hash = hash;
    });
  }
}

function do_window() {
  console.log('Inside do_window');
  $(".slideanim").each(function() {
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
}

function initMap() {
  var myCenter = new google.maps.LatLng(41.878114, -87.629798);
  var mapProp = {
    center: myCenter,
    zoom: 12,
    scrollwheel: false,
    draggable: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  var marker = new google.maps.Marker({
    position: myCenter
  });
  marker.setMap(map);
}