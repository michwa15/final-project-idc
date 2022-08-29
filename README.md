# final-project-idc

Here you can find everything you need in order to run our app

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the server side in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run start-server`

Runs the server side in the development mode.\
With this command the server side is running with `nodemon` and thus any change is automatically saved.

### `npm run start-client`

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

### `npm run initial-data`

This command will push data that stored locally to the cloud db account.\
You should run this command only once before running the app.

### `npm run dev`

Runs both server and client side concurrently.\
This is the command to start our whole app.

## How to Run Our App

**1.** In the root folder (**final-project**) run the command: `npm install`.\
**2.** In the root folder (**final-project**) run the command: `npm run initial-data`.\
**3.** Go to **client-final-project** (from the root run: `cd client-final-project`) and then run the command: `npm install`.\
**4.** Go back to root folder (**final-project**) and start the app by running the command: `npm run dev`.\
**5.** The app is running now and you should be directed to our products page. **Have Fun!**

## Learn More 

By default, every new user that registered to our store, gets an inititative value of `role: user`.\
Users can be either with `role: user` or with `role: admin`. It's important to know that when user is trying to click on the button 
**My Store** that appears as one of the options in our navbar he can be redirected to 2 different pages:
1. If you have `role: user` you will be directed to a page where you won't see anything except for the message "you're not the admin and therefor can't see this page". 
2. If you have `role: admin`, the admin-setting page will be shown and there you'll be able to edit your store as you want. 

**Important:** Every new user will get as default `role: user` and therefore I created for you one user that already have the permission to be admin and in order to log in to our store with this user all you need to do is to fill in `email: admin` and `password: admin` in the login page. 

