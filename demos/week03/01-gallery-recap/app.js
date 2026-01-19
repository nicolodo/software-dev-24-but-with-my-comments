const thumbnailContainer = document.getElementById("thumbnailContainer");
const bigContainer = document.getElementById("bigContainer");
const left = document.getElementById("leftBtn");
const right = document.getElementById("rightBtn");
const toggle = document.getElementById("toggle");

let currentIndex = 0;
let isShown = true;

const images = [
  {
    src: "https://cdn.britannica.com/66/161466-050-6877BAC6/chimpanzees-male-all-lives-females-community-mother.jpg",
    alt: "A family of chimpanzees",
  },
  {
    src: "https://assets.worldwildlife.org/www-prd/images/wwfcmsprodimagesMountain_Gorilla_Silverback_W.width-1000.jpg",
    alt: "A mountain gorilla standing in a forest",
  },
  //   {
  //     src: "https://discovery.sndimg.com/content/dam/images/discovery/fullset/2019/11/7/GettyImages-967580662.jpg.rend.hgtvcom.1280.960.suffix/1573252249390.jpeg",
  //     alt: "A close up of a gibbon",
  //   },
  {
    src: "https://media.cnn.com/api/v1/images/stellar/prod/2026-01-07t171108z-1344062164-rc2auiapbq2s-rtrmadp-3-congo-gorilla-twins.JPG?c=original",
    alt: "A mother gorilla with newborn twins",
  },
  {
    src: "https://www.orangutans-sos.org/content/uploads/2022/09/179A6248-copy.jpg",
    alt: "A baby orangutan sticking its tongue out",
  },
  {
    src: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/vision-dam/digital/parks-platform/parks-global-assets/disney-world/attractions/animals/gorillas/Gorilla-Looking-into-Distance-16x9.jpg?2022-07-11T15:13:59+00:00",
    alt: "A gorilla side-eyeing the camera",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Hylobates_lar_pair_of_white_and_black_01.jpg/2560px-Hylobates_lar_pair_of_white_and_black_01.jpg",
    alt: "A pair of lar gibbons",
  },
];

function createThumbs() {
  images.forEach((image, index) => {
    const imgElem = document.createElement("img");
    imgElem.src = image.src;
    imgElem.alt = image.alt;
    imgElem.className = "thumbnails";
    imgElem.tabIndex = 0;

    imgElem.addEventListener("click", () => {
      currentIndex = index;
      createBig(image);
    });
    imgElem.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        currentIndex = index;
        createBig(image);
      }
    });

    thumbnailContainer.append(imgElem);
  });
}

createThumbs();

function createBig(image) {
  bigContainer.innerHTML = null;
  const bigImg = document.createElement("img");
  bigImg.src = image.src;
  bigImg.alt = image.alt;
  bigImg.className = "big-image";
  bigContainer.append(bigImg);
  // Alternative way:
  // bigContainer.style.backgroundImage = `url(${image.src})`
}

createBig(images[0]);

left.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  //currentIndex = currentIndex-1;
  createBig(images[currentIndex]);
});
right.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  createBig(images[currentIndex]);
});

window.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === "ArrowLeft") {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    //currentIndex = currentIndex-1;
    createBig(images[currentIndex]);
  } else if (event.key === "ArrowRight") {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    createBig(images[currentIndex]);
  }
});

toggle.addEventListener("click", () => {
  if (isShown) {
    thumbnailContainer.style.display = "none";
    isShown = false;
    toggle.style.top = "5vh";
  } else {
    thumbnailContainer.style.display = "flex";
    isShown = true;
    toggle.style.top = "25vh";
  }
});
