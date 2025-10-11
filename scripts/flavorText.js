let flavorTextOptions = [
    "410,757,864,530 hiccups",
    "YAY FOR CATURDAY! http://icanhascheezburger.com/",
    "*drink’s a delishes coffy.*",
    "So ya.... welcome to the lair of awesomeness X3",
    "│▌║█▌│█│║║│║██│║█│",
    "I used to throw bricks at people. ^_^",
    "██████████ 100% Manga, Anime, Chracter creating, WAFFLEZ FREAK! :3",
    "cσρчяїgнт ©2010 ForestStar7",
    "Dear Neocities Users, All Accounts Will Be Deleted This Following December. Paste This On Your Website To Save Your Website From Being Deleted. Don't Change This Info, Or Else Your Website Will Be Deleted, It Is Because There's About 1,000,000 Fake Accounts. Sorry for This! - Neocities Team",
    "92% of teenagers have turned to Faithstep and Heav N Bass.If you are part of the 8% that still listen to real music, copy and paste this message to another 5 websites. Dont let Angelmusic die.",
    "1)Say your name 10 times 2)say your dog or cat or mouses name 5 times 3)say your bus driver 3 times 4)PASTE THIS TO FOUR OTHER COMMENTS IN 777 MINUTES. WHEN UR DONE PRESS F13 AND UR HEAVENWURLD NAME WILL APPEAR IN BIG LETTERS ON THE SCREEN.",
    "A worn-out old man getting lost isn't moe in the slightest!",
    "I shall now become... the very concept of pudding itself.",
    "(There's a four thousand year old Egyptian wall painting that simply says 'kids these days.')",
    "Oh, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho,",
    "The power of 'uguu' shall protect you.",
    "Raspberry milk is important.",
    "「は~いアニキ！Ｆｕｃｋ　Ｍｏｒｎｉｎｇ！」",
    "welcome to permitteds lands .you will be blessed soon.",
    "I'm gonna go get 'tortured' for a bit.",
    "Today's lucky item: ................................................................................................................................. Carefreeness.",
    "You're not by yourself and you're not all alone. Don't forget that. That's because you can be together with about one trillion microbes."
];

let flavorTextElement = document.querySelector('.flavorText');
let flavorTextIndex = Math.floor(Math.random() * flavorTextOptions.length);
let flavorText = flavorTextOptions[flavorTextIndex];
flavorTextElement.innerText = flavorText;
