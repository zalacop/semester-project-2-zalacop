export default async function putMethod(data) {
    try {
        const accessToken = localStorage.getItem('accessToken');
        
        if (!accessToken) {
            console.log("User is not authenticated!");
            alert("User is not authenticated!");
        }

        const putData = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(data)
        };

        return putData;
    } catch (error) {
        throw new Error("Oops, something went wrong!");
    }
}
