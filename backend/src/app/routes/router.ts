import StudentController from '../controller/studentsController.js';

import {Router} from 'express'

const router = Router();

const studentController = new StudentController()

router.get('/users/:id', studentController.findSingleUser);



export default router