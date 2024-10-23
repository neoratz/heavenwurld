function goToRandomLink() {
    const links = [
        // add new links here
        "/about.html",
        "/links.html",
        "/collection.html",
        "/wolfzirkus.html",
    ];

    let randomLinkIndex = Math.floor(Math.random() * links.length);
    let randomLink = links[randomLinkIndex];
    window.location = randomLink;
}

let randomLinkElement = document.querySelector('.randomLink');
randomLinkElement.addEventListener('click', goToRandomLink);