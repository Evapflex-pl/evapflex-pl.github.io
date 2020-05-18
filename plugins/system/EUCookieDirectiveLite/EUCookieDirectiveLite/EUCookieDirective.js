function SetCookie(cookieName,cookieValue,nDays) {
    var today = new Date();
    var expire = new Date();
    if (nDays==null || nDays==0) nDays=1;
    expire.setTime(today.getTime() + 3600000*24*nDays);
    document.cookie = cookieName+"="+escape(cookieValue) + ";expires="+expire.toGMTString()+"; path=/";
    document.getElementById("cookieMessageContainer").style.display="none";
}

function hideCookiesInfoIfAccepted() {
    if (document.cookie.indexOf('cookieAcceptanceCookie=accepted') !== -1) {
        // cookies already accepted
        document.getElementById("cookieMessageContainer").style.display="none";
    }
 }

hideCookiesInfoIfAccepted();
