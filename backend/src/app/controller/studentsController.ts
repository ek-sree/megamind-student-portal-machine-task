import { Request, Response } from "express";
import StudentUseCase from "../use-case/studentsUseCase.js";

export default class StudentController{
    private studentUseCase: StudentUseCase;

    constructor() {
        this.studentUseCase = new StudentUseCase();
    }

    findSingleUser=async(req:Request, res:Response): Promise<void>=>{
        try {
            console.log('req reach?');
            
            const {id} = req.params
            console.log("params id?",id);
            
            const response = await this.studentUseCase.findUser(parseInt(id))
            console.log("REsss",response);
            
            res.status(response.status).json({message:response.message, data:response.data})
        } catch (error) {
            console.log(" error on controller", error);
            res.status(500).json({ 
                message: "Internal server error" 
            });
        }
    }

}