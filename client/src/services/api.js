// const API_URL = "http://localhost:5000/api"

// const api = async(endPoint , options={})=>{
//     const response = await fetch(`${API_URL}${endPoint}`,{
//         headers : {
//             "Content_Type" : "application/json",
//             ...options.headers
//         },
//         ...options
//     })
//     const data =  await response.json();
//     if(!response.ok){
//         throw new Error(data.message ||"smt went wrong")
//     }
//     return data
// }

// export default api 


const BASE_URL = "/data"; 

const api = async (endPoint, options = {}) => {
  const cleanPath = endPoint.startsWith("/") ? endPoint.slice(1) : endPoint;
  const resourceName = cleanPath.split("/")[0];

  const url = `${BASE_URL}/${resourceName}.json`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Failed to load data from ${url}`);
  }

  // MUST declare data first before using it
  const data = await response.json();

  // Filter single item (e.g., /users/1) after data is declared
  const parts = cleanPath.split("/");
  if (parts.length > 1 && Array.isArray(data)) {
    const id = parts[1];
    const singleItem = data.find((item) => String(item.id) === String(id));
    if (!singleItem) throw new Error(`Item with id ${id} not found`);
    return singleItem;
  }

  return data;
};

export default api;