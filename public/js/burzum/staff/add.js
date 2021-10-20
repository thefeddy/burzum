
const staff = {
    init: () => {
        ClassicEditor
            .create(document.querySelector('#editor'))
            .then(editor => { })
            .catch(error => { console.error(error); });

        document.querySelector('form').addEventListener('submit', (event) => {
            event.preventDefault();

            const form = document.querySelector('form');
            const formData = new FormData(form);

            let request = new XMLHttpRequest();
            request.open('POST', '/admin/staff/add/');
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
                document.querySelector('.preview-slide').style.backgroundImage = `url(${event.target.result})`;

            });
            reader.readAsDataURL(event.target.files[0]);
        });

        document.querySelector('input[name="name"]').addEventListener('keyup', (event) => {
            document.querySelector('.preview .name').innerHTML = event.target.value;
        });

        document.querySelector('select[name="role"]').addEventListener('change', (event) => {
            document.querySelector('.preview .role').innerHTML = event.target.value;
        });

        document.querySelector('select[name="role"]').addEventListener('change', (event) => {
            const role = event.target.value;
            document.querySelectorAll('.row').forEach(row => row.classList.remove('is-showing'));

            if (document.querySelector(`.${role}`)) {
                document.querySelector(`.${role}`).classList.add('is-showing');
            }

        });
    }
}

staff.init();