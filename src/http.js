class EasyHTTP {
   
   async get(url) {
      const response = await fetch(url);
      const respData = await response.json();
      return respData;
   }

   async post(url, data) {
      const response = await fetch(url, {
         method: 'POST',
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(data)
      });
      
      const respData = await response.json();
      return respData;
   }

   async put(url, data) {
      const response = await fetch(url, {
         method: 'PUT',
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(data)
      });

      const respData = await response.json();
      return respData;   
   }

   async delete(url) {
      const response = fetch(url, {
         method: 'DELETE',
         headers: {
            'Content-type': 'application/json'
         },
      });
      
      const respData = await response;
      if (respData.status === 200) {  
         console.log('Resource deleted...')  ;
      } else {
         console.error(respData);
      }

      return respData;
   }
}

export const http = new EasyHTTP();