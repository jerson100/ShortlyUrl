const BASE_URL = 'https://rel.ink/api/links/';

export class ApiUrl{

    static async generarURL(url){

        const response = await fetch(BASE_URL,{
            method: 'POST',
            body:JSON.stringify({url}),
            headers:{
                "Content-Type": 'application/json'
            }
        })

        if(!response.ok){

            throw response.status;

        }

        const json = await response.json();

        return json;

    }

}