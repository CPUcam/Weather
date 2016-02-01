$(document).ready(function(){
  var zip = "";
  $('.btn').click(function(){
    zip = document.getElementById('zip').value;

  if (zip.length == 5) {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&APPID=58229a4e217926a79008cbfb61134884", function(data){
      var temp = Math.round((data.main.temp - 273.15)* 1.8000 + 32.00);
      var high = Math.round((data.main.temp_max - 273.15)* 1.8000 + 32.00);
      var low = Math.round((data.main.temp_min - 273.15)* 1.8000 + 32.00);
      var condition = data.weather[0].id;
      var city = data.name;
      $('.city').html('<p>Showing weather results for ' + city + '</p>');
      $('.wi').addClass("wi-owm-" + condition);
      $('.weather-info').text('High: ' + high + ', Low: ' + low);
      $('.current-temp').text(temp + '\u00B0' + 'F');
      if (temp >= 50 && temp < 120) {
        $('#1').css('opacity', '0.6');
        if (temp >= 60) {
          $('#2').css('opacity', '0.6');
        }
      }
      else if (temp < 50 && temp >= 32) {
        $('#3').css('opacity', '0.6');
        if (temp < 32) {
          $('#4').css('opacity', '0.6');
        }
      }
    });
  }
  else {
    alert("Uh oh! Please enter a valid 5-digit, U.S. zipcode.");
  }
  });
});
