(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    console.log(planetsString)
    //console.log(planetsArray) This should give you back undefined
    //Next line inits our var of planetArray
    planetsArray = planetsString.split("|")
    console.log(planetsArray);
    console.log(planetsString)

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var sting;
    console.log(planetsString.split("|").join("<br>"));

    //bonus
    planetsArray.push("</ul>");
    planetsArray.unshift("<ul>")
    var planetList = planetsArray.join("<li>")
    console.log(planetList)


})();