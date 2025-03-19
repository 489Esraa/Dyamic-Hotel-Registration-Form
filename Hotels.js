const customerReviews = [
    { 
        
        location: "Port Fouad, Port Said", 
        message: "Entire apartment • Two bedrooms • One living room • One bathroom",
        price: "$40 night",
        image: "src/pic1.jpg"
    },
    { 
         location: "Port Fouad, Port Said", 
        message: "Entire apartment • Two bedrooms • One living room • One bathroom",
        price: "$40 night",
        image: "src/pic2.jpg"
    },
    { 
         location: "Port Fouad, Port Said", 
        message: "Entire apartment • Two bedrooms • One living room • One bathroom",
        price: "$40 night",
        image: "src/pic3.jpg"
    },
    { 
         location: "Port Fouad, Port Said", 
        message: "Entire apartment • Two bedrooms • One living room • One bathroom",
        price: "$40 night",
        image: "src/pic4.jpg"
    }
];

let currentReview = 0;

const reviewText = document.querySelector(".rw-review");
const reviewerName = document.querySelector(".rw-reviewer-name");
const reviewerLocation = document.querySelector(".rw-reviewer-place");
const reviewerImage = document.querySelector(".rw-reviewer-img");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateReview() {
    const {  image,price, location, message } = customerReviews[currentReview];
    reviewText.textContent = message;
    reviewerName.textContent = price;
    reviewerLocation.textContent = location;
    reviewerImage.src = image;
    reviewerImage.alt = message;
}

prevBtn.addEventListener("click", () => {
    currentReview = (currentReview === 0) ? customerReviews.length - 1 : currentReview - 1;
    updateReview();
});

nextBtn.addEventListener("click", () => {
    currentReview = (currentReview === customerReviews.length - 1) ? 0 : currentReview + 1;
    updateReview();
});

// Initialize with the first review
updateReview();


