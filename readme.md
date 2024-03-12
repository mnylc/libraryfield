# Setting Up Development Enviorment

Since the Froghouse website has many pages and sub-pages, the development
process requires Node.js to run a localhost enviorment. This establishes
a localized root folder ensuring all file paths work from that point.

## Requirements
- [Node.js](nodejs.org) 
  - You can run your file in [http-server](https://www.npmjs.com/package/http-server).

## Installing Node.js
1. In CMD, run the command `npm install http-server -g`

## Viewing Localhost Server
1. Navigate to the specific path of your file folder in CMD and run the command `http-server`
2. Go to your browser and type `localhost:8080`. Your Application should run.

If you want to view your localhost server on another device, you can replace `localhost` 
the IP address of the device you are using to develop with the `8080` port, in input that
into a browser on another device.

For example: `0.0.0.0:8080`