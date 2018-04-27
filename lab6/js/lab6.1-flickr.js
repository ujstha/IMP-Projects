//JSON response is wrapped in a function jsonFlickrFeed
function jsonFlickrFeed(json) {

  for (var i = 0; i < json.items.length; i++) {

    $(".flickr-image").append('<div class="appended-div" style="background:url(' + json.items[i].media.m + ') top no-repeat; background-size:cover;background-repeat:no-repeat;" ></div>');
    //creats/appends a div with class name appended-div with declared styles.
    //puts a background that is fetched image from flickr
    //had to append because in css the index can't be called
  }

};
//function to load image from flickr
function loadFlickrImage() {

  var tagName = $('#tag-name').val();//takes a value from input box with id tag-name

  $(".flickr-image").html("");//prints image to div in html

  $.ajax({
    //https://www.sitepoint.com/load-flickr-photos-using-jsonapi/
    url: 'https://api.flickr.com/services/feeds/photos_public.gne', //from where photo is fetched
    dataType: 'jsonp',
    data: {
      "tags": tagName, //takes a value from tagName var that has search button id 
      "format": "json"//format for the images
    }

  });

    document.getElementById('loop').innerHTML = "You Searched for: " + tagName;
    document.getElementById('tag-name').value = "";

};
function keyPress(event) {
    if(event.keyCode == 13){
        loadFlickrImage();
    }
}


