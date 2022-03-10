import * as fs from 'fs';
export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
      const contactList = await fs.promises.readdir("contactdata");

      await fs.writeFile(`contactdata/${contactList.length +1}.json`, JSON.stringify(req.body), ()=>{})
      res.status(200).json({msg:"successfully uploaded contact queries.", success:true})
    } else {
      // Handle any other HTTP method
      res.status(400).json({msg:"only post requwst is acceptable.", success: false})
    }
  }