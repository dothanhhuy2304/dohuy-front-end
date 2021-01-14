import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {getStudentById} from '../services/studentService';
import {connect} from 'react-redux';

class ViewStudentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id:this.props.match.params.id,
        }
    }
    componentDidMount() {
        this.props.getStudentById(this.props.match.params.id);
    }

    static getDerivedStateFromProps(nextProps,prevState){
        if(nextProps.errors!==prevState.errors){
            return({errors:nextProps.errors})
        }else{}
        if(nextProps.student!==prevState.student){
            return({
                        code:nextProps.student.code,
                        name:nextProps.student.name,
                        birthday:nextProps.student.birthday,
                        country:nextProps.student.country,
                        dateCreate:nextProps.student.dateCreate,
                        status:nextProps.student.status
            })
        }else{
            return null;
        }
    }

  render() {
    return (
      <div className="container">
          <div className="container">
            <div className="col-md-12">
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.id}</td>
                            <td>{this.state.code}</td>
                            <td>{this.state.name}</td>
                            <td>{this.state.birthday}</td>
                            <td>{this.state.country}</td>
                            <td>{this.state.dateCreate}</td>
                            <td>{this.state.status?"Activated":"Not Activated"}</td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/student" className="btn btn-primary">Back to home</Link>
            </div>
         </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
        student:state.student.student
})
export default connect(mapStateToProps,{getStudentById}) (ViewStudentComponent)
