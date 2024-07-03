const mediumImgEl = document.getElementById("mediumImg");
const smallImgEl = document.getElementById("smallImg");

const springXs = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
const springMd = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
const summerXs = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
const summerMd = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
const autumnXs = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
const autmnMd = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
const winterXs = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
const winterMd = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";

function springBtn(){
    mediumImgEl.src = springMd;
    smallImgEl.src= springXs;
}
function summerBtn(){
    mediumImgEl.src = summerMd;
    smallImgEl.src= summerXs;
}
function atumnBtn(){
    mediumImgEl.src = autmnMd;
    smallImgEl.src= autumnXs;
}
function winterBtn(){
    mediumImgEl.src = winterMd;
    smallImgEl.src= winterXs;
}