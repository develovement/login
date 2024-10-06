document.querySelector('.login-button').addEventListener('click', function() {
    
    var username = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;

  
    var scriptURL = 'https://script.google.com/macros/s/AKfycbyKLMGb7pl53O4eTfx3pJ4HnhM7FoZ5HXX0yKvQt2-AQ-OUF-jU791-KvTjybpcDRwDBg/exec';

   
    var formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

   
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => response.text())
        .then(result => {
            alert('Login berhasil!');
            console.log('Success:', result);
        })
        .catch(error => {
            alert('Gagal mengirim data, coba lagi.');
            console.error('Error:', error);
        });
});