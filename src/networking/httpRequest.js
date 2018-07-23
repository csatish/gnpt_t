
export const sendRequest = (url, params) => {
    let reqOption = {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }

    if(params) {
        reqOption.body = JSON.stringify(params)
    }

    return fetch(url, reqOption)
        .then(response => response.json())
        .catch(error => {
            console.log('Error:', error)
        })
        .then(response => {
            return response
        });
}