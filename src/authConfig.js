import { } from '@azure/msal-browser';

export const msalConfig = {
    auth: {
        clientId: '<client-id>',
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