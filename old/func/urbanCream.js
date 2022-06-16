//import { octokit } from "https://cdn.skypack.dev/@octokit/core";

window.onload = function() {
    const title = document.querySelector("#Title");
    title.addEventListener("mouseover",  function() { cycleFontFamily("Title");  });
    title.addEventListener("mouseleave", function() { revertFontFamily("Title"); });

    ghIMG();
    }

function ghIMG() {
    //const img_gitHub_pfp = await octokit.request('GET /users/urbanCoffee/avatar_url', {avatar_URL: 'avatar_url'});
    //document.getElementById("gitHub_pfp").setAttribute('src', img_gitHub_pfp);
    const img = document.getElementById("gitHub_pfp");
        img.setAttribute('src', './images/bhbhb_1.png');
        img.setAttribute('display', 'block');
        //img.style.padding = "auto 50px 10px 50px";
        //img.style.height='auto';
        //img.style.width='auto';
        img.style.borderColor = 'red';
        img.style.borderRadius='25px';
    }

let fontInc = 0;
function cycleFontFamily(a) {
    const titleIQ = document.getElementById(a);
    fFamily = ['Impact', '\"Permanent Marker\"', '\'Arial Black\'', 'sans-serif'];
    gFamily = ['url(./images/coffeeHouse.gif)', 'url(./images/waterFall.gif)', 'url(./images/blahblah_v2.gif)', 'url(./images/load-1.gif)', 'url(./images/gif-3.gif)'];
    titleIQ.style.fontFamily = fFamily[ fontInc++ ];
    titleIQ.style.fontStyle = 'italic';
    //titleIQ.style.backgroundColor = 'khaki';
    titleIQ.style.backgroundImage = gFamily[ Math.floor( Math.random()*5 ) ];
    titleIQ.style.backgroundRepeat = 'no-repeat';
    titleIQ.style.backgroundSize = "cover";
    titleIQ.style.backgroundPosition = "center";
    titleIQ.style.color = 'black';
    titleIQ.style.textShadow = '2px 0 0 white, -2px 0 0 white, 0 2px 0 white, 0 -2px 0 white, 2px 2px 0 white, -2px -2px white, -2px 2px 0 white, 2px -2px 0 white';
    fontInc = fontInc % 4;
    }
function revertFontFamily(a) {
    const titleIQ = document.getElementById(a);
    titleIQ.style.fontFamily = 'Times New Roman';
    titleIQ.style.fontStyle = 'normal';
    titleIQ.style.backgroundImage = 'none';
    titleIQ.style.backgroundColor = '#2d2d2d';
    titleIQ.style.color = 'khaki';
    titleIQ.style.textShadow = 'none';
    }