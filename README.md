# Private Blockchain Application

## How to test your application functionalities?

1. Run your application using the command `node app.js`
You should see in your terminal a message indicating that the server is listening in port 8000:
> Server Listening for port: 8000

2. To make sure your application is working fine and it creates the Genesis Block you can use POSTMAN to request the Genesis block:
    ![Request: http://localhost:8000/block/height/0 ](getblockbyHeight.PNG)
3. Make your first request of ownership sending your wallet address:
    ![Request: http://localhost:8000/requestValidation ](requestValidation.PNG)
4. Sign the message with your Wallet:
    ![Use the Wallet to sign a message](signWallet.PNG)
5. Submit your Star
     ![Request: http://localhost:8000/submitstar](submitStar.PNG)
6. Retrieve Stars owned by me
    ![Request: http://localhost:8000/blocks/<WALLET_ADDRESS>](getStarbyOwner.PNG)
7. Retrieve Stars by hash
![Request: http://localhost:8000/block/hash/<BLOCKHASH> ](getblockbyHash.PNG)
