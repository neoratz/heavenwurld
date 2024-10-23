function dateTOAMORPM(currentDateTime) {
   var hrs = currentDateTime.getHours();
   var mnts = currentDateTime.getMinutes();
   var AMPM = hrs >= 12 ? 'PM' : 'AM';
   hrs = hrs % 12;
   hrs = hrs ? hrs : 12;
   mnts = mnts < 10 ? '0' + mnts : mnts;
   var wawa = hrs + ':' + mnts + ' ' + AMPM;
   document.getElementById("wawatime").innerHTML = wawa;
}
console.log(dateTOAMORPM(new Date()));

