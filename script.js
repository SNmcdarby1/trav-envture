// Sidenav
var e = element();
const icons = document.querySelector('.sidenav');
M.SideNav.init(SideNav, {
    menu
});

const icons = document.querySelector('.nav-item');
M.Nav - item.init(Nav - item, {
    menu
});

const icons = document.querySelectorByClassName('toggle-button')[0]
const navbarLinks = document.querySelectorByClassName('nav-links active')[0]

toggleButton.addEventListener('click'.anchor() === {
    navlinks()
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
});

// Or with jQuery

$(document).ready(function() {
    $('.carousel').carousel();
});
$('#myTab a').on('click', function() {

    VarDate.apply(Function)
    $(active).preventDefault()
    $(this).tab('show')
    $('#myTab a[href="#index"]').tab('show') // Select tab by name
    $('#myTab li:first-child a').tab('show') // Select first tab
    $('#myTab li:last-child a').tab('show') // Select last tab
    $('#myTab li:nth-child(3) a').tab('show') // Select third tab
});


const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
        "Abi Dhabi": null,
        "Rio": null,
        "Spain": null,
        "Aruba": null,
        "Kenya": null,
        "London": null,
        "Dublin": null,
        "Cancun Mexico": null,
        "Hawai": null,
        "Florida": null,
        "New York": null,
        "Jamaica": null,
        "France": null,
        "Australia": null,
        "China": null,
        "Netherlands": null,
        "China": null,
        "Malaysia": null,
        "Newzealand": null,
        "Ontrio": null,
        "Auckland": null,

    }
});
// Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

// Scrollspy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});

const ac = document.querySelector('.a.mobie-nav');
M.Autocomplete.init(ac, {
    data: {
        "Abi Dhabi": null,
        "Rio": null,
        "Spain": null,
        "Aruba": null,
        "Kenya": null,
        "London": null,
        "Dublin": null,
        "Cancun Mexico": null,
        "Hawai": null,
        "Florida": null,
        "New York": null,
        "Jamaica": null,
        "France": null,
        "Australia": null,
        "China": null,
        "Netherlands": null,
        "China": null,
        "Malaysia": null,
        "Newzealand": null,
        "Ontrio": null,
        "Auckland": null,

    }
});
// Material Boxed
$("button").click(function() {
    $("button").toggleClass(".tab");
});
$(newFunction('')).css("background-color", "yellow");


var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", newFunction_1()];

$('#myCarousel').on('slid.bs.carousel', function(_) {
    $('#myCarousel').carousel('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
});
$(document).ready(function() {
    $("p").click(function() {
        $(this).hide();
    });
});
$('#myCarousel').carousel('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
$(document).ready(function() {
    $("p").click(function() {
        $(this).hide();
    });
});
$(function() {
    $('#myTab li:last-child a').tab('show')
});
card - columns {
    @include media - breakpoint - only(lg) {
        column - count: 4;
    }
    @include media - breakpoint - only(xl) {
        column - count: 5;
    }
}

function newFunction_1() {
    return "Bulgaria";
}

function newFunction() {
    $grid - columns;
    12;
    $grid - gutter - width;
    30;
    px;
    $grid - breakpoints;
    (xs: 0, _sm: 540, px, {
        return: ,
        md: ,
        768: px,
    }, {
        return: ,
        lg: ,
        992: px,
    }, {}) => ;
    ();
    return;
    any;
    xl: 1200;
    px; {
        return;
        $container - max - widths;
        () => {
            540;
            px,
            720;
            px,
            960;
            px,
            1140;
            px;
        };
        return;
    };
}
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Tabs
function openLink(evt, linkName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("myLink");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" teal", "");
    }
    document.getElementById(linkName).style.display = "block";
    evt.currentTarget.className += " teal";
}

// Click on the first tablink on load
document.getElementsByClassName("tablink")[0].click(); <
script type = "text/javascript" >
    // This example displays an address form, using the autocomplete feature
    // of the Google Places API to help users fill in the information.

    // This example requires the Places library. Include the libraries=places
    // parameter when you first load the API. For example:
    // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

    var placeSearch, autocomplete;
var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
};

function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */
        (document.getElementById('autocomplete')), {
            types: ['geocode']
        });

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {

}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
<
/script> <
script
src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDoAhH36BoUXnvwwe4WS38Zx_tShnv-p8c&libraries=places&callback=initAutocomplete"
async defer > < /script>


    <
    script >
    var firstApp = angular.module('firstApp', []);

function formController($scope, $http) {
    $scope.formData = {};
    $scope.processForm = function() {
        $http({
                method: 'GET',
                url: '',
                data: $.param($scope.formData),
                headers: {
                    'Content-Type': ''
                }
            })
            .success(function(data) {
                console.log(data);
            });
    };
} <
/script> < /
div > <
    p > Join our newsletter. < /p> <
label > E - mail < /label> <
input class = "w3-input w3-border"
type = "text"
placeholder = "Your Email address" >
    <
    button type = "button"
class = "w3-button w3-red w3-margin-top" > Subscribe < /button> < /
div > <
    /div>

    <
    !--Contact-- >

    <
    /div>

    <
    !--Contact-- >

    <
    Section class = "container-fluid inline-block" >
    <
    div class = "background-image"
id = "bgimg1" >
    <
    hr class = "my-4 inline-block col-sm-4"
id = "bgimg1" >


    <
    !--End page content-- >
    <
    /div> <!--w3school snippet-- > <!--Footer-- > <
footer class = "container-fluid  opacity margin-bottom" >
    <
    h5 > Find Us On < /h5> <
div class = "xlarge padding-16" >
    <
    i class = "fa fa-facebook-official hover-opacity" > < /i> <
i class = "fa fa-instagram hover-opacity" > < /i> <
i class = "fa fa-snapchat hover-opacity" > < /i> <
i class = "fa fa-pinterest-p hover-opacity" > < /i> <
i class = "fa fa-twitter hover-opacity" > < /i> <
i class = "fa fa-linkedin hover-opacity" > < /i> < /
div >



    <
    button class = "bar-item button tablink"
onclick = "openLink(event, 'Hotel');" > < i
class = "fa fa-bed margin-right" > < /i>Hotel</button >
    <
    button class = "bar-item button tablink"
onclick = "openLink(event, 'Car');" > < i
class = "fa fa-car margin-right" > < /i>Rental</button >

    <
    p > Powered by < a href = "https://www.w3schools.com/w3css/default.asp"
target = "_blank"
class = "hover-text-green" > Xascapade < /a></p >

    <
    /footer>

    <
    script >
    // Tabs
    function openLink(evt, linkName) {
        var i, x, tablinks;
        x = document.getElementsByClassName("myLink");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < x.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" teal", "");
        }
        document.getElementById(linkName).style.display = "block";
        evt.currentTarget.className += " teal";
    }
// autocomplete w3schhol snippet
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    // Get the video
    var video = document.getElementById("myVideo");

    // Get the button
    var btn = document.getElementById("myBtn");

    // Pause and play the video, and change the button text
    function myFunction() {
        if (video.paused) {
            video.play();
            btn.innerHTML = "Pause";
        } else {
            video.pause();
            btn.innerHTML = "Play";
        }
    }
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    // Tabs
    function openLink(evt, linkName) {
        var i, x, tablinks;
        x = document.getElementsByClassName("flight");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("ddlAirline");
        for (i = 0; i < x.length; i++) {
            flights[i].className = flights[i].className.replace(" teal", "");
        }
        document.getElementById(flights).style.display = "ddlAirline";
        evt.currentTarget.className += " teal";
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    });
}