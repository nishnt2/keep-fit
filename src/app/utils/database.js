
// import { MongoClient } from "mongodb";


// const uri =  'mongodb://localhost:27017/'
// const dbName = 'users'
// const client = new MongoClient();

// const connectDatabase = async () => {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log("Connected successfully to server");
//   const db = client.db(dbName);
//   return db;
// };

// connectDatabase()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

// export default DB= connectDatabase();

import Database from "tauri-plugin-sql-api"; 
import { pgFormatDate } from "./user";

export async function  dbConnect() {
    const db = await Database.load("postgres://postgres:8520@localhost/keepfit").catch((onReject) =>{
      console.log(onReject)
    });
    return db;
}

// async function createUsersDb(db){
//     const result = await db.execute('') 
// }

export async function initialize() {
    const db = await dbConnect();
    const data = await db.select("select * from users").catch((onReject) =>{
      createUsersDb(db);
    });
    
}

export async function addUser(data){

  const db = await  dbConnect();
  const result = await db.execute(
  "INSERT into users (id, name, phone_no, date, gender, date_of_birth, aadhar_no) VALUES ($1, $2, $3, $4, $5, $6 , $7)",
    [data.name + data.anumber, data.name, data.phone, data.date, data.gender, data.dob, data.anumber],
  ).catch((onReject) =>{
      console.log(onReject)
    });
  console.log(result);

}

export default async function getUsers(){
  const db = await dbConnect();
  const data = await db.execute('select id,name from users').catch((onReject)=>{
    console.log(onReject);
  });
  console.log( data )
    
}