# GS-Project

### Update
1. Backend
    1. `InvestingForecastService.java` update the path to the data with your own local path (eg. `C:Users/...`)
    2. `pom.xml` update the Java version to the version your are using 

### How to run
#### To Start the Backend Server
1. prereq: maven 
2. Install
    1. `cd` into `eng-possibilities-svcs-backend/eng-possibilities-svcs-tests`
    2. run `mvn install` to get the `eng-possibilities-svcs-backend/eng-possibilities-svcs-tests/target` folder. a JAR file should appear inside. 
3. Running the Server
    1. Open a new terminal.
    2. run `java -jar target/forecast-backend-0.0.1-SNAPSHOT.jar`. This will start the server in localhost:8080

#### To Run the Frontend
1. prereq: node installed
2. Install
    1. `cd` into `eng-possibilities-ui/` folder
    2. run `npm install` to get the required packages. `eng-possibilities-ui/node_modules` folder should appear.
3. Running the Frontend
    1. Open a new terminal (make sure you have the backend server running in a separate terminal!)
    2. run `npm start` to start the frontend. It should automatically load up `http:localhost:3000`

#### Troubleshooting
1. To see if backend is running properly, `http://localhost:8080/api/v1/forecast` into a new tab or window. It should show the data
2. To see if the frontend is accepting requests, right-click on the window and select Inspect. Go to the Console tab (next to Elements). If you see "No 'Access-Control-Allow-Origin' header is present on the requested resource" and you are using Chrome, add the following plugin to Chrome: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en. This bypasses some security, so make sure to turn it off when you are not running this code!

