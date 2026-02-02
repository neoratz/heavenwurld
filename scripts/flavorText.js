let flavorTextOptions = [
    "410,757,864,530 hiccups",
    "YAY FOR CATURDAY! http://icanhascheezburger.com/",
    "*drink’s a delishes coffy.*",
    "So ya.... welcome to the lair of awesomeness X3",
    "│▌║█▌│█│║║│║██│║█│ SCAN NOW TO RECEIVE YOUR 100 DOLLAR COUPON ON ANYTHING",
    "██████████ 100% Manga, Anime, Chracter creating, WAFFLEZ FREAK! :3",
    "cσρчяїgнт ©2010 ForestStar7",
    "Dear Neocities Users, All Accounts Will Be Deleted This Following December. Paste This On Your Website To Save Your Website From Being Deleted. Don't Change This Info, Or Else Your Website Will Be Deleted, It Is Because There's About 1,000,000 Fake Accounts. Sorry for This! - Neocities Team",
    "92% of teenagers have turned to Faithstep and Heav N Bass.If you are part of the 8% that still listen to real music, copy and paste this message to another 5 websites. Dont let Angelmusic die.",
    "1)Say your name 10 times 2)say your dog or cat or mouses name 5 times 3)say your bus driver 3 times 4)PASTE THIS TO FOUR OTHER COMMENTS IN 777 MINUTES. WHEN UR DONE PRESS F13 AND UR HEAVENWURLD NAME WILL APPEAR IN BIG LETTERS ON THE SCREEN.",
    "citrus★mint★candy★drop★kick",
    "The epicness is over 9000!",
    "It's like you put awesome sauce on an epic plate of bodaciousness.",
    "Cutie Angel with Full of Love",
    "She is so Cool Girl!! and my Honey Angel Baby!!",
    "a fail so epicly funny it might just be a hilarius win",
    "HEAVENWURLD IS THE WEBSITE FOR EVERY POP&CUTE GIRL",
    "落ちついて聞いてください、いいですか？ Please calm down and listen,Okey? 来年、私のたくさんのクワカブが羽化します。My many beetles and stag beetles will emerging next year.",
    "Ccram my mouth with crumbled brown sugar walnuts, then wash them down with milk. A gorgeous moment.",
    "Feeling strawberry.",
    "It's a good day to do what has to be done by me."
];

let flavorTextElement = document.querySelector('.flavorText');
let flavorTextIndex = Math.floor(Math.random() * flavorTextOptions.length);
let flavorText = flavorTextOptions[flavorTextIndex];
flavorTextElement.innerText = flavorText;
