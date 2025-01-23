import { IUser } from "../../interface/IUser";
import StudentsRepository from "../repository/studentsRepo.js";

const studentRepo=new StudentsRepository()


export default class StudentUseCase{
    findUser =async(userId:number): Promise<{status:number, message:string, data?:IUser}>=>{
        try {
           const data = await studentRepo.findById(userId)
           if(!data){
            return{status:400, message:"no data found"}
           }
           return {status:200, message:"Data found", data}
        } catch (error) {
            console.log("Error occured ");
            return { status: 500, message: "Internal server error" };
        }
    }
}