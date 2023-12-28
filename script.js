document.getElementById('whatsapp-button').addEventListener('click', function() {
    // Change the phone number and message as needed
    var phoneNumber = '1234567890'; // Replace with your WhatsApp number
    var message = 'Hello, I have a question.'; // Replace with your pre-filled message

    // Create the WhatsApp URL with the phone number and message
    var whatsappURL = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);

    // Open the WhatsApp window
    window.open(whatsappURL, '_blank');
});
