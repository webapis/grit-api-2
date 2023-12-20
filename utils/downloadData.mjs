
import * as dotenv from 'dotenv' 

 import{ downloadCollection } from'./uploadCollection.mjs'

   const genders = [

    { gender: 'all', gender1: 'temp-kadin'  }
  ]

    for (let g of genders) {
        const { gender, gender1 } = g
        await downloadCollection(gender,gender1)
    }
 

