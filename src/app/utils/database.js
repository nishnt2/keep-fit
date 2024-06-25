import Database from "tauri-plugin-sql-api"; 
import { BaseDirectory } from "@tauri-apps/api/fs";
import addData from "./fs";
import { desktopDir } from "@tauri-apps/api/path";

//import { pgFormatDate } from "./user";

export async function  dbConnect() {
    const db = await Database.load("postgres://postgres:8520@localhost/keepfit").catch((onReject) =>{
      console.log(onReject)
    });
    return db;
}

// async function createUsersDb(db){
//     const result = await db.execute('') 
// }




export default async function addUser(data){
  const deskDir = await desktopDir();
  try{
    const db = await  dbConnect();
    const result = await db.execute(
    "INSERT into users (id, name, phone_no, photo_path, date, gender, date_of_birth, aadhar_no, aadhar_path) VALUES ($1, $2, $3, $4, $5, $6 , $7,$8,$9)",
      [data.id, data.name,  data.phone, deskDir + `keepfit\\${data.anumber}\\photo.jpeg`, data.date, data.gender, data.dob, data.anumber, deskDir+`keepfit\\${data.anumber}\\aadhar.jpeg`],
    ).catch((onReject) =>{
        throw onReject;
      })
    await addData(data.id, { photo : data.photo, aadhar : data.aadhar}).catch((onrejected)=>{
      throw onrejected;
    });
  }
  catch(error){
    console.log(error)
  }
}

// export default async function getUsers(){
//   const db = await dbConnect();
//   const data = await db.execute('select id,name from users').catch((onReject)=>{
//     console.log(onReject);
//   });
//   console.log( data )
    
// }