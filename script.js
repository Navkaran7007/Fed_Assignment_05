async function fetchMarsPhotos(date) {
    try {
        const apiKey = "dpbv75vgcu3FDzDLx7edYt3s3XrqfAcYQde9KGbd"; 
        const response = await fetch(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${apiKey}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
    } catch (e) {
        console.error("Error fetching Mars photos:", e);
    }
}
const dateForm = document.getElementById('date-form');
const dateInput = document.getElementById('date-input');
const factsContainer = document.getElementById('factsContainer');

dateForm.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event) {
    event.preventDefault();
    
    const selectedDate = dateInput.value;
    clearPreviousPhotos();
    
    if (!selectedDate) {
        showError("Please enter a valid date.");
        return;
    }
    
    await fetchAndDisplayPhotos(selectedDate);
}

document.addEventListener("DOMContentLoaded", () => {
    const exactDate = "2012-08-06"; 
    fetchAndDisplayPhotos(exactDate);
});


function clearPreviousPhotos() {
    const photoIds = ['photo1', 'photo2', 'photo3'];
    
    photoIds.forEach(photoId => {
        const imageElement = document.getElementById(photoId);
        const dateElement = document.getElementById(photoId.replace('photo', 'date'));
        dateElement.textContent = 'Photo Date:';
    });
}

async function fetchAndDisplayPhotos(date) {
    try {
        const response = await fetchMarsPhotos(date);
        const photos = response.photos;
        
        if (!photos?.length) {
            showError("No photos available for this date.");
            return;
        } 
        displayPhotos(photos.slice(0, 3));
    } catch (e) {
        showError("Failed to fetch photos. Please try again.");
        console.log(e);
    }
}

function displayPhotos(photos) {
    photos.forEach((photo, index) => {
        const photoNumber = index + 1;
        const photoElement = document.getElementById(`photo${photoNumber}`);
        const dateElement = document.getElementById(`date${photoNumber}`);
        
        photoElement.src = photo.img_src;
        dateElement.textContent = `Photo Date: ${photo.earth_date}`;
    });
}
function showError(message) {
    factsContainer.textContent = message;
}