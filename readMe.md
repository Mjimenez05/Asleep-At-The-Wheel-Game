# Asleep at the Wheel 

## The Game

In a nutshell, Doc fell asleep at the wheel of the Delorian. Its your job to keep him in the sky avoiding the plasma beams of time travel. When you inevitably crash, save your high score with your three initials or three letters of your choice. Good luck and steady flying.

## Technologies Used

1. React app
2. Bootstrap
3. Mongodb
4. React-howler
5. Express
6. Mongoose
7. Axios
8. Node
9. Heroku

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.

## Version 2.0

1. add more sprite/character models.
2. user log in with character and top score saving
3. upgrades for boost
4. different maps/levels
5. custom sound track with the use of a spotify api log in 
6. upgrade UI system 
7. clean up flight systems