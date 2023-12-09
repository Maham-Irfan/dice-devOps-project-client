'use client'
import React, {useState, useEffect} from "react"
import styles from '../page.module.css'
import { saveFile } from "../../../apis"

export default function Client(){
    const [message,setMessage]=useState('')
    useEffect(()=>{

        const fetchdata = async()=>{
           try{
            const response = await fetch("http://3.238.105.109:8080//api")
           const data = await response.json();
        
           const file_content = data.file_content
           const fileContentBytes = Buffer.from(file_content, 'base64');
           console.log(file_content)
           const crypto = require('crypto');
            const computedChecksum = crypto.createHash('md5').update(fileContentBytes).digest('hex');
           
           if (computedChecksum === data.checksum) {
            setMessage("Checksums match. File integrity verified.")
          } else {
            setMessage("Checksums do not match. File may be corrupted.")
          }
          const decodedFileContent = fileContentBytes.toString('utf-8');
          saveFile({file_content:decodedFileContent})
           }catch(error){
            setMessage('Error in fetching the file and its checksum from the back end service')
           }
    

        }
        fetchdata()

    },[])

    return(
      <main className={styles.main}>
      <div className={styles.description}>
        <p>This is a front end service. It fetches a file and its checksum from the api and verifies the integrity of the file by computing a checksum of the received file and comparing it with the received checksum and then saves the received file</p>
        {message == ''?(
                <p>Loading...</p>
            
        ):
        (
            
                <p>{message}</p>
        )}
      </div>
    </main>
    )
}