function uploadFiles() {
    const input = document.getElementById('uploadInput');
    const status = document.getElementById('status');

    if (input.files.length === 0) {
        status.innerHTML = "Lütfen dosya seçin!";
        return;
    }

    let formData = new FormData();
    for (let file of input.files) {
        formData.append('files[]', file);
    }

    // Burada dosyaları bir API'ye gönderebiliriz
    // Örneğin, dosyaların PHP sunucusuna yüklenmesi için aşağıdaki gibi bir örnek istek kullanılabilir:
    fetch('https://example.com/upload.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            status.innerHTML = "Dosyalar başarıyla yüklendi!";
        } else {
            status.innerHTML = "Bir hata oluştu!";
        }
    })
    .catch(error => {
        status.innerHTML = "Yükleme hatası: " + error;
    });
}
