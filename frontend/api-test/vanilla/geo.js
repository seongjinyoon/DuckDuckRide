
function requestLoc() {
    return $.ajax({
      url:"https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCFzo5u_OOvUmE-NGVR1v7bGsLPGdYcxFs",
      method: "POST",
      crossDomain: true,
      dataType: "json",
      success: function(data) {
        $("#output").html(JSON.stringify(data));
      },
      error: function(xhr, status, error) {
        console.log("Error:", error);
      }
    });
  }
  
requestLoc();

let str = requestLoc();
$('#geo').text(str);