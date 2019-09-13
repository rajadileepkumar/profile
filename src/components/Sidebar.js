import React, { Component } from 'react';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 no-padding order-lg-1 order-md-1 order-sm-2 order-xs-2">
                <div className="profile__contact profile__contact__row__1">
                    <h4 className="profile__contact__heading text-lg-center text-md-center text-sm-center text-center">Contact</h4>
                    <ul className="text-lg-center text-md-center text-sm-center profile__contact__h__listing profile__contact__h__ul">
                        <li className="d-block p-3">
                            <span className="fa fa-home fa-3x" aria-hidden="true"></span><span className="profile__contact__s__p"><a href="mailto:rajadileepkumar34@gmail.com">Bangalore</a></span>
                        </li>
                        <li className="d-block p-3">
                            <span className="fa fa-envelope fa-3x" aria-hidden="true"></span><span className="profile__contact__s__p"><a href="mailto:rajadileepkumar34@gmail.com">rajadileepkumar34@gmail.com</a></span>
                        </li>
                        {/* <li className="d-block p-3">
                            <span className="fa fa-globe fa-3x" aria-hidden="true"></span><span className="profile__contact__s__p">abc.com</span>
                        </li> */}
                        <li className="d-block p-3">
                            <span className="fa fa-phone fa-3x" aria-hidden="true"></span><span className="profile__contact__s__p"><a href="tel:+91-8050359110">+91-8050359110</a></span>
                        </li>
                    </ul>
                </div>
                <div className="profile__contact profile__contact__row__3">
                    <h1 className="profile__contact__heading text-lg-center text-md-center text-sm-center text-center">Skills</h1>
                    <ul className="text-lg-center text-md-center text-sm-center profile__contact__h__listing">
                        <li className="d-block p-3">
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '90%' }}>HTML</div>
                            </div>
                        </li>
                        <li className="d-block p-3">
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '80%' }}>Wordpress</div>
                            </div>
                        </li>
                        <li className="d-block p-3">
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '50%' }}>PHP</div>
                            </div>
                        </li>
                        <li className="d-block p-3">
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '70%' }}>CSS3,BOOTSTRAP,UI/UX</div>
                            </div>
                        </li>
                        <li className="d-block p-3">
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '30%' }}>REACT</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="profile__contact profile__contact__row__2">
                    <h4 className="profile__contact__heading text-lg-center text-md-center text-sm-center text-center">Languages</h4>
                    <ul className="text-lg-center text-md-center text-sm-center profile__contact__h__listing">
                        <li className="d-block p-3">
                            <div className="progress">
                                <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }} >English</div>
                            </div>
                        </li>
                        <li className="d-block p-3">
                            <div className="progress">
                                <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}>Telugu</div>
                            </div>
                        </li>
                        <li className="d-block p-3">
                            <div className="progress">
                                <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>kannada</div>
                            </div>
                        </li>
                        <li className="d-block p-3">
                            <div className="progress">
                                <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}>Hindi</div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="profile__contact profile__contact__row__4">
                    <h4 className="profile__contact__heading text-lg-center text-md-center text-sm-center text-center">Hobbies</h4>
                    <ul className="text-lg-center text-md-center text-sm-center profile__contact__h__listing">
                        <li className="d-inline-block p-3">
                            <span className="fa fa-video-camera fa-3x" aria-hidden="true" data-toggle="tooltip" title="Movies"></span>
                        </li>
                        <li className="d-inline-block p-3">
                            <span className="fa fa-plane fa-3x" aria-hidden="true" data-toggle="tooltip" title="Traveling!"></span>
                        </li>
                        <li className="d-inline-block p-3">
                            <span className="fa fa-music fa-3x" aria-hidden="true" data-toggle="tooltip" title="Music!"></span>
                        </li>
                        <li className="d-inline-block p-3">
                            <span className="fa fa-bicycle fa-3x" aria-hidden="true" data-toggle="tooltip" title="Rideing!"></span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}