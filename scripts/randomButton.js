function goToRandomLink() {
    const links = [
        // add new links here
        "/about",
        "/links",
        "/collection",
        "/wolfzirkus",
    ];

    let randomLinkIndex = Math.floor(Math.random() * links.length);
    let randomLink = links[randomLinkIndex];
    window.location = randomLink;
}

let randomLinkElement = document.querySelector('.randomLink');
randomLinkElement.addEventListener('click', goToRandomLink);