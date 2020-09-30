let cookieBanner = $(".cookie-banner");
let cookieBtn = $(".accept-cookie-btn");

let checkCookie = () => {
    // if (document.cookie.indexOf("cookie_accepted") < 0) {
        document.cookie = "cookie_accepted=1; expires=7; path=/;";
    // }
    cookieBanner.hide();
};

let getCookie = (cookieName) => {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookiesArr = decodedCookie.split(";");
    for (let i = 0; i <cookiesArr.length; i++) {
        let singleCookie = cookiesArr[i];
        while (singleCookie.charAt(0) == " ") {
            singleCookie = singleCookie.substring(1);
        }
        if (singleCookie.indexOf(name) == 0) {
            return singleCookie.substring(name.length, singleCookie.length);
        }
    }
    return "";
};

if (getCookie("cookie_accepted") == 0 && cookieBanner.length) {
    cookieBanner.show();
}

cookieBtn.on("click", checkCookie);
