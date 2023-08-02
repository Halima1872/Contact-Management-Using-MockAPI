const Storage = {
    getItem: async function (key) {
        try{
            const response = await fetch(`https://64c9fd58b2980cec85c2b38c.mockapi.io/users/${key}`,{
            method : 'GET',
                headers : {'content-type': 'application/json'},
    })
        if(response.ok){
            return response.json();   
        }
        else{
            throw new Error("Failed to fetch data");
        }
        }catch(e){
            console.log(e);
        }
    },

    
    getItems: async function (key) {
        try{
            const response = await fetch(`https://64c9fd58b2980cec85c2b38c.mockapi.io/${key}`,{
            method : 'GET',
                headers : {'content-type': 'application/json'},
    })
        if(response.ok){
            return response.json();   
        }
        else{
            throw new Error("Failed to fetch data");
        }
        }catch(e){
            console.log(e);
        }
    }
    ,
    setItem: async function (key, value) {
        try{
            const response = await fetch(`https://64c9fd58b2980cec85c2b38c.mockapi.io/${key}`,{
            method : 'POST',
                headers : {'content-type': 'application/json'},
                body: JSON.stringify(value)
        })
        if(response.ok){
            return true;   
        }
        else{
            throw new Error("Failed to send data");
        }
    }catch(e){
            console.log(e);
        }
},
    getContact: async function (key) {
        try{
            const response = await fetch(`https://64c9fd58b2980cec85c2b38c.mockapi.io/users/${key}/contacts`,{
            method : 'GET',
                headers : {'content-type': 'application/json'},
    })
        if(response.ok){
            return response.json();   
        }
        else{
            throw new Error("Failed to fetch data");
        }
        }catch(e){
            console.log(e);
        }

    },
    setContact: async function (key, value) {
        try{
            const response = await fetch(`https://64c9fd58b2980cec85c2b38c.mockapi.io/users/${key}/contacts`,{
            method : 'POST',
                headers : {'content-type': 'application/json'},
                body: JSON.stringify(value)
        })
        if(response.ok){
            return true;   
        }
        else{
            throw new Error("Failed to send data");
        }}catch(e){
            console.log(e);
        }
}
}
export default Storage;