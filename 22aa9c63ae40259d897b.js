import photo1 from "./photo-1604611364011-706e9e1f2573.avif";
import photo2 from "./5649294.png";
import photo3 from "./photo-1620361421000-64328420819f.avif";
import photo4 from "./photo-1726147593580-45f3f73e3781.avif";
import photo5 from "./photo-1726178543393-032f01abacd6.avif";
import photo6 from "./photo-1726180834320-63ebdc3b7548.avif";
import photo7 from "./photo-1726486896376-4d1340e2f672.avif";
import rightArrow from "./chevron-right.svg";
import leftArrow from "./chevron-left.svg";
import filledCircle from "./circle.svg";
import emptyCircle from "./circle-outline.svg";
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

    const circles = document.querySelector('.circles');

    for (const image of photos) {
        images.appendChild(image);

        const empty = document.createElement('img');
        empty.src = emptyCircle;
        empty.classList.add('emptyCircle');
        const filled = document.createElement('img');
        filled.src = filledCircle;
        filled.classList.add('filledCircle');
        filled.style.display = 'none';
        circles.appendChild(empty);
        circles.appendChild(filled);
    }

    const emptyCircles = document.querySelectorAll('.emptyCircle');
    const filledCircles = document.querySelectorAll('.filledCircle');
    const photoList = document.querySelectorAll('.photo');

    let currPhoto = null;
    let prevPhoto = null;

    for (let i = 0; i < emptyCircles.length; i++) {
        emptyCircles[i].addEventListener('click', (event) => {
            prevPhoto = null;
            currPhoto = i;
            filledCircles[i].style.display = 'flex';
            emptyCircles[i].style.display = 'none';
            for (let j = 0; j < photoList.length; j++) {
                if (photoList[j].style.display === 'flex') {
                    prevPhoto = j;
                    emptyCircles[j].style.display = 'flex';
                    filledCircles[j].style.display = 'none';
                    break;
                }
                else {
                    prevPhoto = null;
                }
            }
            displayPhoto(prevPhoto, currPhoto);
        })
    }

    const left = document.createElement('img');
    left.src = leftArrow;
    left.classList.add('icon');
    const right = document.createElement('img');
    right.src = rightArrow;
    right.classList.add('icon');

    frame.appendChild(left);
    frame.appendChild(right);

    left.addEventListener('click', () => {
        let prev = null;
        let curr = null;
        for (let i = 0; i < photoList.length; i++) {
            if (photoList[i].style.display === 'flex') {
                prev = i;
                curr = --i;
                break;
            }
        }
        if (curr === -1 || curr === null) {
            curr = photoList.length - 1;
        }
        displayPhoto(prev, curr);
    })

    right.addEventListener('click', () => {
        let prev = null;
        let curr = null;
        for (let i = 0; i < photoList.length; i++) {
            if (photoList[i].style.display === 'flex') {
                prev = i;
                curr = ++i;
                break;
            }
        }
        if (curr === photoList.length || curr === null) {
            curr = 0;
        }
        displayPhoto(prev, curr);
    })

    return { frame, right, photoList, emptyCircles, filledCircles };

})();

function displayPhoto(prevPhoto, currPhoto) {
    console.log(prevPhoto, currPhoto);
    if (prevPhoto !== null && currPhoto !== null) {
        const current = init.photoList[currPhoto];
        current.style.display = 'flex';
        init.filledCircles[currPhoto].style.display = 'flex';
        init.emptyCircles[currPhoto].style.display = 'none';
        const previous = init.photoList[prevPhoto];
        previous.style.display = 'none';
        init.emptyCircles[prevPhoto].style.display = 'flex';
        init.filledCircles[prevPhoto].style.display = 'none';
        init.frame.insertBefore(current, init.right);
    }
    else {
        const current = init.photoList[currPhoto];
        current.style.display = 'flex';
        init.emptyCircles[currPhoto].style.display = 'none';
        init.filledCircles[currPhoto].style.display = 'flex';
        init.frame.insertBefore(current, init.right);
    }
}