import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class PageNotFound extends Component {
    render() {
        return (
            <div>
                     <br/><br/>
                <div className="container col-md-12 text-center">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="error-template">
                                <h1>
                                    Oops!</h1>
                                <h2>
                                    404 Not Found</h2>
                                <div className="error-details">
                                    Sorry, an error has occured, Requested page not found!
                                </div>
                                <div className="error-actions content-wrapper">
                                    <Link to="/" className="btn btn-primary btn-lg">
                                        <span className="glyphicon glyphicon-home"></span>
                                        Take Me Home </Link>&nbsp;
                                        <Link to="/student" className="btn btn-primary btndefault btn-lg">
                                            <span className="glyphicon glyphicon-envelope">
                                                </span> Contact Support </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
}

export default PageNotFound
