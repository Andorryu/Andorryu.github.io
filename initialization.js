
// COLOR CONSTANTS
const defaultPrimaryColor = "#fdf7ea";
const defaultSecondaryColor = "#ec9832";
const defaultTertiaryColor = "";

// create random color code from #000000 to #FFFFFF
function randColor()
{
    return "#" + Math.floor(Math.random() * 16**6).toString(16);
}

const randPrimaryColor = randColor();
const randSecondaryColor = randColor();
const randTertiaryColor = randColor();

// END COLOR CONSTANTS


// NAVBAR CONSTANTS
const navItems = [
    {
        title: "Home",
        href: "home.html"
    },
    {
        title: "About Me",
        href: "about_me.html"
    },
    {
        title: "Github",
        href: "https://www.github.com/andorryu"
    }
];

// END NAVBAR CONSTANTS

function initNavColors(nav)
{
    nav.style.backgroundColor = defaultSecondaryColor;
    let navItems = nav.querySelectorAll("div");
    for (let item of navItems)
    {
        // default background and text colors
        item.style.backgroundColor = defaultSecondaryColor;
        item.style.color = defaultPrimaryColor;

        // how they change
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = defaultPrimaryColor;
            item.style.color = defaultSecondaryColor;
        });
        item.addEventListener("mouseout", () => {
            item.style.backgroundColor = defaultSecondaryColor;
            item.style.color = defaultPrimaryColor;
        });
    }
}

function initFooterColors() {

}

window.addEventListener("load", () => {
    // set doc background
    document.body.style.backgroundColor = defaultPrimaryColor;
    // NAVBAR
    // grab nav element
    let nav = document.querySelector("nav");
    // create nav structure
    for (let item of navItems)
    {
        let a = nav.appendChild(document.createElement("a")); // create <a> inside <nav>
        let div = a.appendChild(document.createElement("div")); // create <div> inside <a>
        a.setAttribute("href", item.href); // set href
        div.innerHTML = item.title; // set text
    }
    // init nav colors
    initNavColors(nav);

    //FOOTER
    // grab footer element
    let footer = document.querySelector("footer");
    // init footer colors
    initFooterColors(footer);

});