let aniTextOptions = [
    "410,757,864,530 hiccups",
    "I used to throw bricks at people. ^_^",
    "A worn-out old man getting lost isn't moe in the slightest!",
    "I shall now become... the very concept of pudding itself.",
    "(There's a four thousand year old Egyptian wall painting that simply says 'kids these days.')",
    "Oh, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho, ho,",
    "The power of 'uguu' shall protect you.",
    "「は~いアニキ！Ｆｕｃｋ　Ｍｏｒｎｉｎｇ！」",
    "I'm gonna go get 'tortured' for a bit.",
    "Today's lucky item: ................................................................................................................................. Carefreeness.",
    "You're not by yourself and you're not all alone. Don't forget that. That's because you can be together with about one trillion microbes.",
    "GO HOME MILITARY BITCH.",
    "Anyway!! I'm really interested in your mother now!! I'm going to see her sometime. Be prepared!",
    "...I'm so lonely, like a poor kitten crying in a cardboard box because no one wants her. Mi-Mi-...",
    "Everyone might die tomorrow in a big catastrophe, so you should be really nice to everyone today.",
    "Why don't you come to the planetarium? The beautiful twinkling of eternity that will never fade, no matter what... All the stars in the sky are waiting for you.",
    "They're called princess points, and they recover at a rate of one every two minutes. They're like a special type of MP, basically.",
    "A computer virus can't be this cute!!",
    "Just because I'm a cute maid doesn't mean I have to clean.",
    "Yummm, I wanna go back to my castle and munch sweet tacos!",
    "I have to update my sadness web diary.",
    "The happier the girl, the stronger her elemental power.",
    "I'm called a slaughtering machine and I'll be turning nine soon."
];

let aniTextElement = document.querySelector('.aniText');
let aniTextIndex = Math.floor(Math.random() * aniTextOptions.length);
let aniText = aniTextOptions[aniTextIndex];
aniTextElement.innerText = aniText;
