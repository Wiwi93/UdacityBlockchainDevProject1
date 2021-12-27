 function  requestMessageOwnershipVerification(address) {
        return new Promise(async (resolve) => {
            let time = new Date().getTime().toString().slice(0,-3);
            let msg = address + ':' + time + ':starRegistry';
            resolve(msg);
        });
    }


    console.log(requestMessageOwnershipVerification('ahdrfhkg'));

    {
        "address" : 
    }

    {
        "address":
        "signature":
        "message":
        "star" : {

        }
    }