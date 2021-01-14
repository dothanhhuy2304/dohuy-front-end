import React, { Component } from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {createStudent} from '../services/studentService';
import {Link} from 'react-router-dom';
class CreateStudentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            code: '',
            name: '',
            birthday: '',
            country:'',
            dateCreate: '',
            status:'',
            errors:''
        }
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
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


    saveStudent=(event) =>{
        let student = {
            code:this.state.code,
            name:this.state.name,
            birthday:this.state.birthday,
            country:this.state.country,
            dateCreate:this.state.dateCreate,
            status:this.state.status,
        };
        this.props.createStudent(student,this.props.history);
        event.preventDefault();
    }

    cancel=(event) =>{
        event.preventDefault();
        this.props.history.push('/student');
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
                                        <input type="text" className={classnames("form-control",{"is-invalid":this.props.errors.code})}  placeholder="Enter Code" onChange={(event) => this.changeHandler(event, "code")}/>
                                        <p className="text-danger">{this.props.errors.code}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" className={classnames("form-control",{"is-invalid":this.props.errors.name})} placeholder="Enter Full Name" onChange={(event) => this.changeHandler(event, "name")}/>
                                        <p className="text-danger">{this.props.errors.name}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Brithday</label>
                                        <input type="date" className={classnames("form-control",{"is-invalid":this.props.errors.birthday})} onChange={(event) => this.changeHandler(event, "birthday")}/>
                                        <p className="text-danger">{this.props.errors.birthday}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Country</label>
                                        <input type="text" className={classnames("form-control",{"is-invalid":this.props.errors.country})} placeholder="Enter Country" onChange={(event) => this.changeHandler(event, "country")}/>
                                        <p className="text-danger">{this.props.errors.country}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Date Create</label>
                                        <input type="date" className={classnames("form-control",{"is-invalid":this.props.errors.dateCreate})} onChange={(event) => this.changeHandler(event, "dateCreate")}/>
                                        <p className="text-danger">{this.props.errors.dateCreate}</p>
                                    </div>
                                    <div className="form-group form-check">
                                        <input type="radio" className={classnames("form-check-input",{"is-invalid":this.props.errors.status})} name="status" value={true} onChange={this.changeHandlerRadio}/>
                                        <label className="form-check-label">Active</label>
                                    </div>
                                    <div className="form-group form-check">
                                        <input type="radio" className={classnames("form-check-input",{"is-invalid":this.props.errors.status})} name="status" value={false}  onChange={this.changeHandlerRadio}/>
                                        <label className="form-check-label">Not Active</label>
                                        <p className="text-danger">{this.props.errors.status}</p>
                                    </div>
                                    <Link to="/student" className="btn btn-primary" onClick={this.saveStudent}>Submit</Link>
                                    <Link to="/student" className="btn btn-danger" onClick={this.cancel}>Cancel</Link>
                        </div>

                </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state) => ({
    errors:state.errors
})

export default connect(mapStateToProps,{createStudent})(CreateStudentComponent)
