import * as sdk from "matrix-js-sdk";
const myUserId = "@example:localhost";
const myAccessToken = "QGV4YW1wbGU6bG9jYWxob3N0.qPEvLuYfNBjxikiCjP";

const matrixClient = sdk.createClient({
  baseUrl: "http://localhost:8008",
  accessToken: myAccessToken,
  userId: myUserId,
});

matrixClient.startClient().then(() => {
  console.log("started");
});
