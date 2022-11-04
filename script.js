//VARIABLES

const image = document.getElementById("image"),
 statusDisplay = document.getElementById("status"),
 bgColor = document.getElementById("main");


function setColor() {
    bgColor.classList.add("online")
}
async function connectionStatus() {
    try {
        const fetchResult = await fetch("https://upload.wikimedia.org/wikipedia/en/thumb/7/d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=" + (new Date()).getTime());

        image.src = "./images/online.png";
        setColor();
        return fetchResult.status >= 200 && fetchResult.status < 300;
    }
    catch (error) {
        //console.console.log(error);
        statusDisplay.textContent = "OOPS!!! your internet connection is down";

        image.src = "./images/images.png";

        bgColor.classList.remove("online");
    }
}

//monitor the connection 


setInterval(async() => {
    const result = await connectionStatus();
    if (result) {
        statusDisplay.textContent = "You are online connection looks good!"

        setColor();
    }
}, 5000);

//check connection when the page loads 

window.addEventListener("load", async (event) => {
    if (connectionStatus()) {
        statusDisplay.textContent = "You are online!"
    } else {
        statusDisplay.textContent = "You are offline"
    }
})
