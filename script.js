function toggleDetails(placeId) {
    var placeDetails = document.getElementById(placeId);
    if (placeDetails.style.display === "none") {
        placeDetails.style.display = "block";
    } else {
        placeDetails.style.display = "none";
    }
}