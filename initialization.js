
// NAVBAR CONSTANTS

const primaryColor = "#fdf7ea";
const secondaryColor = "#ec9832";
const tertiaryColor = "";

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

function randColor()
{
    return "#" + toString(parseInt(toString(Math.floor(Math.random() * 16**6)), 16));
}
// create random color code from #000000 to #FFFFFF
let randPrimary = randColor();
let randSecondary = randColor();

// END NAVBAR CONSTANTS


function initColors(nav)
{
    nav.style.backgroundColor = secondaryColor;
    let navItems = nav.querySelectorAll("div");
    for (let item of navItems)
    {
        // default background and text colors
        item.style.backgroundColor = secondaryColor;
        item.style.color = primaryColor;

        // how they change
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = primaryColor;
            item.style.color = secondaryColor;
        });
        item.addEventListener("mouseout", () => {
            item.style.backgroundColor = secondaryColor;
            item.style.color = primaryColor;
        });
    }
}


window.addEventListener("load", () => {
    // set doc background
    document.body.style.backgroundColor = primaryColor;
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
    initColors(nav);
});