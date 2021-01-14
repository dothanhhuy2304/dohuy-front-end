import axios from 'axios';
import {GET_ERRORS,GET_STUDENTS,GET_STUDENT,DELETE_STUDENT} from './types';
const STUDENTS_REST_API_URL = `http://localhost:8080/student/listAll`;
const CREATE_STUDENT_REST_API_URL=`http://localhost:8080/student/save`;
const GET_STUDENT_REST_API_URL=`http://localhost:8080/student/get`;
const UPDATE_STUDENT_REST_API_URL='http://localhost:8080/student/update';
const DELETE_STUDENT_REST_API_URL='http://localhost:8080/student/delete';



   export const getStudents = ()=> async dispath => {
        await axios.get(STUDENTS_REST_API_URL).then((response) => {
            dispath({type:GET_STUDENTS,payload:response.data})
        })
    }

    export const createStudent = (student, history) => async dispath => {
        await axios.post(CREATE_STUDENT_REST_API_URL, student)
            .then((response) => {
                history.push('/student')
            }).catch((err) => {
                dispath({type:GET_ERRORS,payload:err.response.data})
            })
    }

    export const getStudentById = (studentId)=> async dispath => {
        await axios.get(GET_STUDENT_REST_API_URL+"/"+studentId).then((response) => {
            dispath({type:GET_STUDENT,payload:response.data})
        })
    }

    export const updateStudent = (studentId,student,history) => async dispath => {
        await axios.put(UPDATE_STUDENT_REST_API_URL+"/"+studentId,student).then((response) => {
            history.push('/student')
        }).catch((err) => {
            dispath({type:GET_ERRORS,payload:err.response.data})
        })
    }

    export const deleteStudent = (studentId)=> async dispath =>{
            return axios.delete(DELETE_STUDENT_REST_API_URL + "/" +studentId).then((response) => {
                dispath({type:DELETE_STUDENT,payload:studentId})
            })
        }
