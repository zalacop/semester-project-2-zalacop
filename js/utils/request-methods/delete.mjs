export async function deleteMethod(listingId) {
    try {
        const accessToken = localStorage.getItem('accessToken');
        const deleteData = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        }
        if(!accessToken) {
            console.log("User is not authenticated!")
        }
        return deleteData;
    } catch (error) {
        throw new Error("Oops, something went wrong!");
    }
}