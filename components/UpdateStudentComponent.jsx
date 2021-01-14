/* eslint-disable no-unreachable */
import React, { Component} from 'react';
import  { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {getStudentById,updateStudent} from '../services/studentService';
import classnames from 'classnames';

class UpdateStudentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:this.props.match.params.id,
            code: '',
            name: '',
            birthday: '',
            country:'',
            dateCreate: '',
            status:'',
            errors: '',
        }
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors:nextProps.errors})
        }
        if(nextProps.student){
            this.setState({
                code:nextProps.student.code,
                name:nextProps.student.name,
                birthday:nextProps.student.birthday,
                country:nextProps.student.country,
                dateCreate:nextProps.student.dateCreate,
                status:nextProps.student.status
            })
        }
    }



    // static getDerivedStateFromProps(nextProps,prevState){
    //     if(nextProps.errors!==prevState.errors){
    //         return{errors:nextProps.errors}
    //     }else{}
    //      if(nextProps.student!==prevState.student){
    //         return{
    //                     code:nextProps.student.code,
    //                     name:nextProps.student.name,
    //                     birthday:nextProps.student.birthday,
    //                     country:nextProps.student.country,
    //                     dateCreate:nextProps.student.dateCreate,
    //                     status:nextProps.student.status
    //         }
    //     }else{
    //         return null;
    //     }
    // }


    // componentDidUpdate(prevProps, prevState) {

    //     if(prevProps.errors!==this.props.errors){
    //             return this.setState({errors:prevProps.errors})
    //    }

    //     if (prevProps.student !== this.props.student) {
    //         this.setState({
    //             code:prevProps.student.code,
    //             name:prevProps.student.name,
    //             birthday:prevProps.student.birthday,
    //             country:prevProps.student.country,
    //             dateCreate:prevProps.student.dateCreate,
    //             status:prevProps.student.status
    //         })
    //     }
    //   }
      


    componentDidMount(){
        this.props.getStudentById(this.props.match.params.id);
    }

    changeHandler = (event,fileName) =>{
        this.setState({
            [fileName]: event.target.value
        })
    }

    changeHandlerRadio =(event) =>{
        var target=event.target;
        var name=target.name;
        var value=target.value;
        this.setState({
            [name]: value
        });
    }

    updateStudent=(event) =>{
        let student = {
            code:this.state.code,
            name:this.state.name,
            birthday:this.state.birthday,
            country:this.state.country,
            dateCreate:this.state.dateCreate,
            status:this.state.status,
        };
        this.props.updateStudent(this.state.id,student,this.props.history);
        event.preventDefault();
    }
    render() {
        return (
            <div className="container">
                <div className="col-md-12">
                    <div className="row">
                        <h1 className="col-md-11 text-center">Form Student</h1>
                        <div className="col-md-11">
                                    <div className="form-group">
                                        <label>Code</label>
                                        <input type="text" className={classnames("form-control",{"is-invalid":this.props.errors.code})} placeholder="Enter Code" value={this.state.code} onChange={(event) => this.changeHandler(event,"code")}/>
                                        <p className="text-danger">{this.props.errors.code}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" className={classnames("form-control",{"is-invalid":this.props.errors.name})} placeholder="Enter Full Name" value={this.state.name} onChange={(event) => this.changeHandler(event,"name")}/>
                                        <p className="text-danger">{this.props.errors.name}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Brithday</label>
                                        <input type="date" className={classnames("form-control",{"is-invalid":this.props.errors.birthday})} value={this.state.birthday} onChange={(event) => this.changeHandler(event, "birthday")}/>
                                        <p className="text-danger">{this.props.errors.birthday}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Country</label>
                                        <input type="text" className={classnames("form-control",{"is-invalid":this.props.errors.country})} placeholder="Enter Country" value={this.state.country} onChange={(event) => this.changeHandler(event, "country")}/>
                                        <p className="text-danger">{this.props.errors.country}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Date Create</label>
                                        <input type="date" className={classnames("form-control",{"is-invalid":this.props.errors.dateCreate})} value={this.state.dateCreate} onChange={(event) => this.changeHandler(event, "dateCreate")}/>
                                        <p className="text-danger">{this.props.errors.dateCreate}</p>
                                    </div>
                                    <div className="form-group form-check">
                                        <input type="radio" className={classnames("form-check-input",{"is-invalid":this.props.errors.status})} name="status" value={true}  onChange={this.changeHandlerRadio}/>
                                        <label className="form-check-label">Active</label>
                                    </div>
                                    <div className="form-group form-check">
                                        <input type="radio" className={classnames("form-check-input",{"is-invalid":this.props.errors.status})} name="status" value={false} onChange={this.changeHandlerRadio}/>
                                        <label className="form-check-label">Not Active</label>
                                        <p className="text-danger">{this.props.errors.status}</p>
                                    </div>
                                    <button className="btn btn-primary" onClick={this.updateStudent}>Submit</button>
                                    <Link to="/student" className="btn btn-danger">Cancel</Link>
                        </div>

                </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    errors:state.errors,
    student:state.student.student
})

export default connect(mapStateToProps,{getStudentById,updateStudent})(UpdateStudentComponent)
