import React, { Component } from 'react';
import Profile from './../assets/images/profile.jpg';
export default class Header extends Component {
    render() {
        return (
            <div className="profile__header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-2 col-12">
                                    <div className="profile_pic">
                                        <img src={Profile} alt="profile" className="rounded profile_image" />
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-12 col-lg-push-1">
                                    <div className="profile__info">
                                        <p className="profile__name">Raja Dileep Kumar</p>
                                        <p className="profile__description">
                                            Having 4.5 years of experience working in Web development of PHP, MySQL, Wordpress, HTML, CSS, Bootstarp, Javascript, Jquery, Ajax,React
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
