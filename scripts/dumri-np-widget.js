// onionring.js is made up of four files - onionring-widget.js (this one!), onionring-index.js, onionring-variables.js and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (è’œ) house, last updated 2020-11-24

// === ONIONRING-WIDGET ===
//this file contains the code which builds the widget shown on each page in the ring. ctrl+f 'EDIT THIS' if you're looking to change the actual html of the widget

var tag = document.getElementById(ringID); //find the widget on the page

thisSite = window.location.href; //get the url of the site we're currently on
thisIndex = null;

// go through the site list to see if this site is on it and find its position
for (i = 0; i < sites.length; i++) {
  if (thisSite.startsWith(sites[i])) { //we use startswith so this will match any subdirectory, users can put the widget on multiple pages
    thisIndex = i;
    break; //when we've found the site, we don't need to search any more, so stop the loop
  }
}

function randomSiten() {
  otherSites = sites.slice(); //create a copy of the sites list
  otherSites.splice(thisIndex, 1); //remove the current site so we don't just land on it again
  randomIndex = Math.floor(Math.random() * otherSites.length);
  location.href = otherSites[randomIndex];
}

//if we didn't find the site in the list, the widget displays a warning instead
if (thisIndex == null) {
  tag.insertAdjacentHTML('afterbegin', `
<table>
  <tr>
    <td>i'm getting my booth set up at the <a href="https://dumbiee.neocities.org/webring/neopets" style="color:orange;text-shadow:1px 1px #000;text-decoration:none;">${ringName}</a> webring! please wait a little longer ...</td>
  </tr>
</table>
  `);
}
else {
  //find the 'next' and 'previous' sites in the ring. this code looks complex
  //because it's using a shorthand version of an if-else statement to make sure
  //the first and last sites in the ring join together correctly
  previousIndex = (thisIndex-1 < 0) ? sites.length-1 : thisIndex-1;
  nextIndex = (thisIndex+1 >= sites.length) ? 0 : thisIndex+1;

  indexText = ""
  //if you've chosen to include an index, this builds the link to that
  if (useIndex) {
    indexText = `<a href='${indexPage}'>index</a>`;
  }

  randomText = ""
  //if you've chosen to include a random button, this builds the link that does that
  if (useRandom) {
    randomText = `<a href='javascript:void(0)' onclick='randomSiten()'><img src="https://images.neopets.com/games/arcade/cat/luck_chance_30x30.gif" alt="random site" width="30px" style="max-width:1vw;></a>`;
  }

  //this is the code that displays the widget - EDIT THIS if you want to change the structure
  tag.insertAdjacentHTML('afterbegin', `
  <table>
    <tr>
      <td class='webring-info'><span class='webring-links'></span>
      <a href="https://dumbiee.neocities.org/webring/neopets/index.html">
      <img src="https://dumbiee.neocities.org/img/webring/neopets/widget.png" alt="part of the virtupets bazaar webring" style="max-width: 2vw;" width="92px"></a></td>
    </tr>
    <tr>
      <td class='webring-links' style="vertical-align:middle">
      <a href='${sites[previousIndex]}'><img src="https://dumbiee.neocities.org/img/webring/neopets/prev.png" alt="prev site" style="padding:0.365vw; max-width:1vw;" width="34px"></a>
        ${randomText}
        ${indexText}
      <a href='${sites[nextIndex]}'><img src="https://dumbiee.neocities.org/img/webring/neopets/next.png" alt="next site" style="padding:0.365vw; max-width:1vw;" width="36px"></a></span></td>
    </tr>
  </table>
  `);

}
