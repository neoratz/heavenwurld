let flavorTextOptions = [
    "410,757,864,530 hiccups",
    "YAY FOR CATURDAY! http://icanhascheezburger.com/",
    "*drink’s a delishes coffy.*",
    "So ya.... welcome to the lair of awesomeness X3",
    "│▌║█▌│█│║║│║██│║█│",
    "██████████ 100% Manga, Anime, Chracter creating, WAFFLEZ FREAK! :3",
    "cσρчяїgнт ©2010 ForestStar7",
    "Dear Neocities Users, All Accounts Will Be Deleted This Following December. Paste This On Your Website To Save Your Website From Being Deleted. Don't Change This Info, Or Else Your Website Will Be Deleted, It Is Because There's About 1,000,000 Fake Accounts. Sorry for This! - Neocities Team",
    "92% of teenagers have turned to Faithstep and Heav N Bass.If you are part of the 8% that still listen to real music, copy and paste this message to another 5 websites. Dont let Angelmusic die.",
    "1)Say your name 10 times 2)say your dog or cat or mouses name 5 times 3)say your bus driver 3 times 4)PASTE THIS TO FOUR OTHER COMMENTS IN 777 MINUTES. WHEN UR DONE PRESS F13 AND UR HEAVENWURLD NAME WILL APPEAR IN BIG LETTERS ON THE SCREEN.",
    "Raspberry milk is important.",
    "welcome to permitteds lands .you will be blessed soon.",
    "ᖙyᖙ–]▽⊸ᖘ] -- Made With Only The Most Preciousest and Exoticest Yoyleberries",
    "<3 Enjoy Your Seventh Life <3"
];

let flavorTextElement = document.querySelector('.flavorText');
let flavorTextIndex = Math.floor(Math.random() * flavorTextOptions.length);
let flavorText = flavorTextOptions[flavorTextIndex];
flavorTextElement.innerText = flavorText;
