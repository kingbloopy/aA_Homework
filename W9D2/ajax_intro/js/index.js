console.log("Hello from the JavaScript console!");

$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b',
  type: 'GET',
  success: function(weather) {
    console.log('success!');
    console.log(weather);
  },
  error: function(){
    console.log('error!')
  }
})

console.log('this is a test')

// Your AJAX request here

// Add another console log here, outside your AJAX request
