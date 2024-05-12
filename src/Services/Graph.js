import axios from 'axios';


export const GetUserProfile = async (token) => {
    const userProfileAPI = 'https://graph.microsoft.com/beta/me';

    let headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };

    return await axios
        .get(userProfileAPI, { headers: headers })
        .then(response => {
            // console.log(response.data);
            return response?.data;
        })
        .catch(error => {
            return error;
        });
}


export const GetUserProfilePic = async (token) => {
    const userProfileImageAPI = 'https://graph.microsoft.com/v1.0/me/photo/$value';

    let headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };

    return await axios
        .get(userProfileImageAPI, { headers: headers, responseType: 'blob' })
        .then(response => {
            const url = window.URL || window.webkitURL;
            const blobUrl = url.createObjectURL(response.data);
            return blobUrl;
        })
        .catch(error => {
            return error;
        });

}