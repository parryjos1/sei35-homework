const arrayOfLinks = document.querySelectorAll(".span3 ul li a");

for(let x = 0; x < arrayOfLinks.length; x++) {
    let temp = arrayOfLinks[x].href;
    let thumbUrl = youtube.generateThumbnailUrl(temp);
    let imgElement = document.createElement('img');
    imgElement.src = thumbUrl;
    imgElement.style.marginLeft = '30px';
    arrayOfLinks[x].appendChild(imgElement);
}
