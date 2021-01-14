import React, { Component } from 'react';
import {deleteStudent,getStudents} from '../services/studentService';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class StudentComponent extends Component {
    constructor(props) {
        super(props)
        this.state={
            students: []
        }
    }

    addStudent = () => {
        this.props.history.push('/create-student');
    }

    updateStudent = (id) =>{
        this.props.history.push(`/update-student/${id}`);
    }

    deleteStudent = (id) =>{
        if(window.confirm('Are you sure delete this student?')){
        this.props.deleteStudent(id);
        }
    }

    viewStudent = (id) =>{
        this.props.history.push(`/view-student/${id}`);
    }

    componentDidMount(){
        this.props.getStudents();
    }
    render() {
        return (
            <div className="container">
                <div className="col-md-12">
                    <div className="row">
                        <h1 className="col-md-11 text-center">List Student</h1>
                        <button className="btn btn-primary" onClick={this.addStudent}>Add Student</button>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Code</th>
                                <th>Full Name</th>
                                <th>Birthday</th>
                                <th>Country</th>
                                <th>Date Create</th>
                                <th>Status</th> 
                                <th>Action</th>    
                             </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.students.map((student,index) => 
                                  <tr key={student.id}>
                                      <td>{index+1}</td>
                                      <td>{student.code}</td>
                                      <td>{student.name}</td>
                                      <td>{student.birthday}</td>
                                      <td>{student.country}</td>
                                      <td>{student.dateCreate}</td>
                                      <td>{student.status?'Activated':'Not Activated'}</td>
                                      <td>
                                          <button className="btn btn-success" onClick={ ()=> this.updateStudent(student.id)}>Update</button>
                                          <Link to="/student"className="btn btn-danger" onClick={ ()=> this.deleteStudent(student.id)}>Delete</Link>
                                          <button className="btn btn-warning" onClick={ ()=> this.viewStudent(student.id)}>View</button>
                                      </td>
                                  </tr>
                              )
                            }
                        </tbody>
                      </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    students:state.student.students
})

export default connect(mapStateToProps,{getStudents,deleteStudent})(StudentComponent)
