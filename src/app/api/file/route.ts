import { NextResponse, NextRequest } from "next/server"
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const writeFile = promisify(fs.writeFile);

export async function POST(req: NextRequest) {
    try{     
        const body = await req.json()
        const file_content = body.file_content; 

        const directoryPath = path.join(process.cwd(), 'clientdata');

        if (!fs.existsSync(directoryPath)) {
          fs.mkdirSync(directoryPath, { recursive: true });
        }
  
        
        const filePath = path.join(directoryPath, 'my_file.txt');
        await writeFile(filePath, file_content);
        return NextResponse.json({message:"File saved successfully"},{status:200})
    }
    catch(error){
        console.log(error,"error")
        return NextResponse.json({message:"Error in saving file"},{status:500})
    }
}
