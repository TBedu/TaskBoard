function acceptTouching() {
    document.getElementById("EULA_accept").remove();
}
var photo = 1;
function changePhoto() {
    console.log("It worked, it worked!")
    photo++;
    var place = "./assets/img/background/" + photo + ".jpg";
    document.body.style.backgroundImage = "url('" + place + "')";
    console.log(place);
    if (photo == 10) photo = 0;
}