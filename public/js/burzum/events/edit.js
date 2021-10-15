
const events = {
    init: () => {

        document.querySelectorAll('textarea').forEach((desc) => {
            ClassicEditor
                .create(desc)
                .then(editor => { })
                .catch(error => { console.error(error); });
        });


        document.querySelector('form').addEventListener('submit', (event) => {
            event.preventDefault();
            events.save();
        });

        document.querySelector('.add').addEventListener('click', () => {
            events.add();
        });
    },
    add: () => {
        let html = `<div class="schedule">
            <div class="row">
                <div class="field col-3">
                    <label>Name</label>
                    <input type="text"  name="name" required>
                </div>
                <div class="field col-3">
                    <label>Start</label>
                    <input type="time" name="start" required>
                </div>
                <div class="field col-3">
                    <label>End</label>
                    <input type="time" name="end" required>
                </div>
                <div class="field">
                    <label>Description</label>
                    <textarea name="description" class="description"></textarea>
                </div>
            </div>
        </div>`;

        document.querySelector('#schedule').innerHTML += html;

        ClassicEditor
            .create(document.querySelector('#schedule .schedule:last-child textarea'))
            .then(editor => { })
            .catch(error => { console.error(error); });
    },

    save: () => {
        let event = {
            staff: { id: document.getElementById('staff_id').value },
            id: document.getElementById('id').value,
            date: document.getElementById('date').value,
            schedule: []
        };
        let schedules = [];

        document.querySelectorAll('.schedule').forEach((schedule) => {
            console.log(schedule)
            let data = {
                id: schedule.getAttribute('data-id'),
                name: schedule.querySelector('input[name="name"]').value,
                start: schedule.querySelector('input[name="start"]').value,
                end: schedule.querySelector('input[name="end"]').value,
                description: schedule.querySelector('.ck-content').innerHTML,
                location: 'inside'
            }

            if (data.id == null) {
                delete data.id;
            }

            schedules.push(data)
        });

        event.schedule = schedules;

        console.log(event)

        fetch(`/admin/events/update/`, {
            method: 'Put',
            body: JSON.stringify(event),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then((response) => {
                console.log(response)

            })
            .catch((error) => {

            });

    }
}

events.init();

[{ "name": "dfsaf", "date": "", "staff": { "id": 3 }, "schedule": [{ "name": "test", "description": "test", "start": "2021-09-13T06:46:30.218Z", "end": "2021-09-13T06:46:30.218Z", "location": "test" }, { "name": "test", "description": "test", "start": "2021-09-13T06:46:30.218Z", "end": "2021-09-13T06:46:30.218Z", "location": "test" }] }]