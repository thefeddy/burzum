
const bar = {
    init: () => {
        ClassicEditor
            .create(document.querySelector('#editor'))
            .then(editor => { })
            .catch(error => { console.error(error); });

        document.querySelector('form').addEventListener('submit', (event) => {
            event.preventDefault();

            const form = document.querySelector('form');
            const formData = new FormData(form);
            console.log(formData);
            let request = new XMLHttpRequest();

            request.open('PUT', '/admin/events/');
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
    }
}

bar.init();