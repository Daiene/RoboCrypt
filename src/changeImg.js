export function changeImg(roboImage, image, startAnimation) {
    roboImage.style.backgroundImage = image;
    roboImage.style.marginBottom = '25px';
    startAnimation();
}