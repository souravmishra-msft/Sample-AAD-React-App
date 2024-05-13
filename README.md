| Services | Platforms | Author | SDK | Endpoint |
|----------|-----------|--------|-----|----------|
| Entra ID | React JS  | souravmishra-msft@outlook.com | MSAL-React 2.0.16 | Microsoft Identity Platform | 

# Objective

This sample is to demonstrate the implementation of the idle timeout when using Microsoft Identity Platform. 
The sample is a single-page application created using ReactJS and this sample implements a custom hook called "useActiveHook.js" to identify the inactivity on the application page. If the inactivity or idle time is more than a certain period, the application automatically force logs out the user.

## Detailed Description

There are ideally two main parts in this project:

1. Implementing MSAL-React to handle the user login and making a token acquisition call to fetch the access-tokens. 
2. Post user logs in successfully to this application, the custom react hook `useActiveHook.js` starts monitoring the acitivity on the screen like `keypress`, `mousemove`, `touchmove`, `click` and `scroll`. If any of the following events occurs, the hook attaches an eventListener to that particular event.

## How to run this project?

Step 1: Register the sample application with your Microsoft Entra Tenant.
- Open [https://portal.azure.com](https://portal.azure.com) and navigate to `App registrations` section.
- Click on `New registration`.
- Provide a name to your app. For eg: `AAD-Sample-React-App`.
- Under **Supported account types** select `Accounts in any organizational directory (Any Microsoft Entra ID tenant - Multitenant)`, since this app is configured a multi-tenant app.
- Under **Redirect URI** section select the platform as `Single-page Application (SPA)` and enter `http://localhost:3000` as your redirect_uri. 
- Then click on **Register**.
- Once the application is registered in Entra ID, under the **Overview** blade, you will find the client-id. Copy and paste it on a notepad, since we will need this client-id in the upcoming steps.
- Select **Token Configuration** blade (if using the new portal, this blade is bundled under **Manage**) and add `login_hint` as an optional claim to the **ID-Token**.
- To create the `login_hint` optional claim select `Add optional claim` and select `ID` as `Token type`. Scroll through the list of optional claims and select `login_hint`. The select **Add** to add and create login_hint optional claim for the **ID-Token**.

Step 2: Download the project files and run the sample.
- Clone or fork the repository: https://github.com/souravmishra-msft/Sample-AAD-React-App.git
- Open the code in VS-Code or any other editor of your choice.
- Run `npm install` to install all the required npm packages that this code needs.
- Open the `authConfig.js` and locate the **client-id** field. Paste the value of the client-id you copied from the previous step here.
- Now your project is ready. To run this project, use `npm run start` command.

## User Experience:
After launching the app, you should see the page that says **Please Login**. After login, if you wait for **5 seconds**, you will see a popup, that would ask you if you want to stay on this page or logout. There would also be a timer running for **15 seconds**. Within 15 seconds if you do not make a selection, the app will logout automatically.

> **Note:** This sample monitors the inactivity for 5 seconds only for demo purposes. Please update the 5 seconds interval as per your requirement. Locate the following `const isActive = useActive(5000);` in the **App.js** file and update the value present in the `useActive` hook to your desired time interval after which the inactivity popup should appear.


The `login_hint` optional claim that we configured above, would help in logging the user out without asking the user to select the account.




 



