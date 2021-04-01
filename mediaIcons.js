//social media icons - footer

//the url of the icons:
var socialMedia = {
    facebook: "https://www.linkedin.com/in/koralyuster/",
    instagram: "https://www.linkedin.com/in/koralyuster/",
    youtube: "https://www.linkedin.com/in/koralyuster/"
};

var social = function () {
    var output = '<ul>', 
    myList = document.querySelectorAll('.socialmediaicons');

    for(var key in arguments[0]) {
        output += '<li><a href="' + socialMedia[key] + '">' + '<img src= " icons/' + key + '.png" alt= "icon for ' + key + '"> ' + '</a></li>';
    }

    output += '</ul>';

    for(var i = myList.length -1; i >= 0; i--) {
        myList[i].innerHTML = output;
    };
}(socialMedia);