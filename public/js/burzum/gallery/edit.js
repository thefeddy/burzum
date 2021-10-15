
const gallery = {
    init: () => {
        document.querySelector('form').addEventListener('submit', (event) => {
            event.preventDefault();

            const form = document.querySelector('form');
            const formData = new FormData(form);

            let request = new XMLHttpRequest();

            request.open('PUT', '/admin/gallery/');
            request.upload.addEventListener('progress', function (event) {
                let percent = (event.loaded / event.total) * 100;
                document.querySelector('#file').setAttribute('value', percent);
                document.querySelector('#file').classList.add('is-showing');
            });
            request.addEventListener('load', function (event) {
                document.querySelector('#file').classList.remove('is-showing');
                document.querySelector('.message').innerHTML = JSON.parse(request.response).message;
            });

            request.send(formData);
        });

        document.querySelector('input[type="file"]').addEventListener('change', (event) => {
            const reader = new FileReader();
            reader.addEventListener('load', (event) => {
                document.querySelector('.preview img').setAttribute('src', event.target.result);
            });
            reader.readAsDataURL(event.target.files[0]);
        });

    }
}

gallery.init();