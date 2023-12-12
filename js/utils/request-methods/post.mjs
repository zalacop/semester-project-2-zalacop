export async function postMethod(data) {
    try {
        const accessToken = localStorage.getItem('accessToken');
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(data)
        }
        return postData;
    } catch (error) {
        console.log(error);
    }
}