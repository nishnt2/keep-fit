// export function pgFormatDate(date) {
//   function zeroPad(d) {
//     return ("0" + d).slice(-2)
//   }
//   var parsed = new Date(date)
//   return [parsed.getUTCFullYear(), zeroPad(parsed.getMonth() + 1), zeroPad(parsed.getDate()), zeroPad(parsed.getHours()), zeroPad(parsed.getMinutes()), zeroPad(parsed.getSeconds())].join(" ");
// }


import { writeBinaryFile, BaseDirectory, createDir, exists } from "@tauri-apps/api/fs";

export default async function addData(id , data){
 
  await createDir(`keepfit\\${id}`,{dir: BaseDirectory.Desktop}).catch((onreject) =>{
    console.log(onreject);
  });
  await writeFile(data.photo, `keepfit\\${id}\\photo.jpeg`);
  await writeFile(data.aadhar, `keepfit\\${id}\\aadhar.jpeg`);

}

export async function createBase(){
  await createDir('keepfit', {dir: BaseDirectory.Desktop});
}
export async function writeFile( file, filepath){
  await writeBinaryFile(filepath, await file.arrayBuffer() , { dir: BaseDirectory.Desktop,append: true }).catch((onrejected) =>{
    console.log(onrejected);
  })
}