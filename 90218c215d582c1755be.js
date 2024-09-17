import photo1 from "./photo-1604611364011-706e9e1f2573.avif";
import photo2 from "./5649294.png";
import photo3 from "./photo-1620361421000-64328420819f.avif";
import photo4 from "./photo-1726147593580-45f3f73e3781.avif";
import photo5 from "./photo-1726178543393-032f01abacd6.avif";
import photo6 from "./photo-1726180834320-63ebdc3b7548.avif";
import photo7 from "./photo-1726486896376-4d1340e2f672.avif";
import rightArrow from "./chevron-right.svg";
import leftArrow from "./chevron-left.svg";
import "./style.css";

const init = (() => {

    const photos = [];

    const images = document.querySelector('.images');
    const frame = document.querySelector('.frame');

    const image0 = document.createElement('img');
    image0.src = photo1;
    image0.width = '500';
    image0.height = '500';
    image0.classList.add('photo');
    image0.style.display = 'none';
    photos.push(image0);

    const image1 = document.createElement('img');
    image1.src = photo2;
    image1.width = '500';
    image1.height = '500';
    image1.classList.add('photo');
    image1.style.display = 'none';
    photos.push(image1);

    const image2 = document.createElement('img');
    image2.src = photo3;
    image2.width = '500';
    image2.height = '500';
    image2.classList.add('photo');
    image2.style.display = 'none';
    photos.push(image2);

    const image3 = document.createElement('img');
    image3.src = photo4;
    image3.width = '500';
    image3.height = '500';
    image3.classList.add('photo');
    image3.style.display = 'none';
    photos.push(image3);

    const image4 = document.createElement('img');
    image4.src = photo5;
    image4.width = '500';
    image4.height = '500';
    image4.classList.add('photo');
    image4.style.display = 'none';
    photos.push(image4);

    const image5 = document.createElement('img');
    image5.src = photo6;
    image5.width = '500';
    image5.height = '500';
    image5.classList.add('photo');
    image5.style.display = 'none';
    photos.push(image5);

    const image6 = document.createElement('img');
    image6.src = photo7;
    image6.width = '500';
    image6.height = '500';
    image6.classList.add('photo');
    image6.style.display = 'none';
    photos.push(image6);

    for (const image of photos) {
        images.appendChild(image);
    }

    const left = document.createElement('img');
    left.src = leftArrow;
    left.width = '50';
    left.style.opacity = '0.5';
    const right = document.createElement('img');
    right.src = rightArrow;
    right.width = '50';
    right.style.opacity = '0.5';

    frame.appendChild(left);
    frame.appendChild(right);

    let currPhoto = null;
    let prevPhoto = null;

    const photoList = document.querySelectorAll('.photo');

    left.addEventListener('click', () => {
        if (currPhoto === null) {
            currPhoto = 0;
            displayPhoto(prevPhoto, currPhoto);
        }
        else {
            prevPhoto = currPhoto;
            currPhoto--;
            if (currPhoto === -1) {
                currPhoto = photoList.length - 1;
                displayPhoto(prevPhoto, currPhoto);
            }
            else {
                displayPhoto(prevPhoto, currPhoto);
            }
        }
    })

    right.addEventListener('click', () => {
        if (currPhoto === null) {
            currPhoto = 0;
            displayPhoto(prevPhoto, currPhoto);
        }
        else {
            prevPhoto = currPhoto;
            currPhoto++;
            if (currPhoto === photoList.length) {
                currPhoto = 0;
                displayPhoto(prevPhoto, currPhoto);
            }
            else {
                displayPhoto(prevPhoto, currPhoto);
            }
        }
    })

    return { frame, left, right, photoList, currPhoto };

})();

function displayPhoto(prevPhoto, currPhoto) {
    console.log(prevPhoto, currPhoto);
    if (prevPhoto !== null && currPhoto !== null) {
        const current = init.photoList[currPhoto];
        current.style.display = 'flex';
        const previous = init.photoList[prevPhoto];
        previous.style.display = 'none';
        init.frame.insertBefore(current, init.right);
    }
    else {
        const current = init.photoList[currPhoto];
        current.style.display = 'flex';
        init.frame.insertBefore(current, init.right);
    }
}