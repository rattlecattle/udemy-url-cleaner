document.getElementById("udemy-url").onchange = (event) => {
    // Example URL:
    // https://www.udemy.com/course/lightburn-beginner/?couponCode=TIMYBRIGT&utm_source=aff-campaign&utm_medium=udemyads&LSNPUBID=bnwWbXPyqPU&ranMID=47901&ranEAID=bnwWbXPyqPU&ranSiteID=bnwWbXPyqPU-g2EfZGaMXw6KUnqqqhbQFg
    let udemy_url_string = document.getElementById("udemy-url").value;
    let udemy_url = new URL(udemy_url_string);
    let search_prams = udemy_url.searchParams;
    let coupon = search_prams.get("couponCode");
    let final_url = `https://${udemy_url.host}${udemy_url.pathname}?couponCode=${coupon}`
    document.getElementById("cleaned-url").value = final_url
}

document.getElementById("udemy-url").onclick = (event) => {
    document.getElementById("udemy-url").select()
}

document.getElementById("cleaned-url").onclick = (event) => {
    document.getElementById("cleaned-url").select()
}