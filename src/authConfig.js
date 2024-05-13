export const msalConfig = {
    auth: {
        clientId: 'db592d32-7af0-4a55-ac86-e5c04105df21',
        authority: 'https://login.microsoftonline.com/common',
        redirectUri: 'http://localhost:3000',
        postLogoutRedirectUri: 'http://localhost:3000',
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: true
    }
};

export const loginRequest_user = {
    scopes: ["user.read"]
}