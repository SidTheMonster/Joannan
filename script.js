document.getElementById('wish-button').addEventListener('click', function() {
    var wishInput = document.getElementById('wish-input');
    var wishesList = document.getElementById('wishes');
    
    if (wishInput.value) {
        var newWish = document.createElement('li');
        newWish.textContent = wishInput.value;
        wishesList.appendChild(newWish);
        wishInput.value = ''; // Clear the input after sending
    } else {
        alert('Please type a wish before sending!');
    }
});
