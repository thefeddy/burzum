
const nestedSort = (prop1, prop2 = null, direction = 'asc') => (e1, e2) => {
    const a = prop2 ? e1[prop1][prop2] : e1[prop1],
        b = prop2 ? e2[prop1][prop2] : e2[prop1],
        sortOrder = direction === "asc" ? 1 : -1
    return (a < b) ? -sortOrder : (a > b) ? sortOrder : 0;
}

fetch(`/js/data.json`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json())
    .then((response) => {
        let temp = [];

        for (const data in response) {
            temp.push(response[data]);
        }
        console.log(temp);

        let sorted = temp.sort(nestedSort('platform', 'system', 'asc'));

        console.log(sorted)
    })
    .catch((error) => {

    });
