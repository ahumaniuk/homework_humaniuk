//    send a request to get data from
//https://reqres.in/api/users?page=1&per_page=5

import fetch from 'node-fetch';
import fs from 'fs/promises';

fetch('https://reqres.in/api/users?page=1&per_page=5')
    .then(response => response.json())
    .then(data => fs.writeFile('output.json', JSON.stringify(data, null, 2)))
    .then(() => console.log('Successfully wrote data to output.json'))
    .catch(error => console.error('Error:', error));

    
//create a function with actions: read the json.file => 
//iterate and save all names into array    
async function readNamesFromFile() {
  try {
      // read file
      const data = await fs.readFile('output.json', 'utf-8');
  
      // parse JSON 
      const parsedData = JSON.parse(data);
  
      // create empty array to store names
      let namesArray = [];
  
      // iterate over data and save names
      parsedData.data.forEach(user => {
          namesArray.push(user.first_name + ' ' + user.last_name);
      });
  
      // print or return the names (whichever you prefer)
      console.log(namesArray);
  } catch (error) {
      console.error("Error: ", error);
  }
}
  
readNamesFromFile();   

//use the file from the attachments
async function readNamesFromFileLocally() {
  try {
      // Read the file
      const data = await fs.readFile('C:\\Users\\AnastasiiaHumaniuk\\Documents\\hillel\\homework_humaniuk\\response_1694287579730.json', 'utf-8');

      // Parse the JSON data
      const parsedData = JSON.parse(data);

      // Create an empty array to store names
      let namesArray = [];

      // Iterate over the data and save names
      parsedData.data.forEach(user => {
          namesArray.push(user.first_name + ' ' + user.last_name);
      });

      // Print the names or return them as per your requirement
      console.log(namesArray);
      
  } catch (error) {
      console.error("An error occurred: ", error);
  }
}

readNamesFromFileLocally();