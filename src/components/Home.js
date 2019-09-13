import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Sidebar from './Sidebar';
import Header from './Header';
import Content from './Content';



export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }
    componentDidMount() {
        this.setState({ isLoading: false })

    }
    render() {
        return (
            <React.Fragment>
                {this.state.isLoaded === true ? (
                    <div className="loader">
                        <Loader
                            type="Bars"
                            color="#00BFFF"
                            height="100"
                            width="100"
                        />
                    </div>
                ) : (
                        <div className="profile__full__body">
                            <Header />
                            <div className="profile__main__body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="row">
                                                <Sidebar />
                                                <Content />
                                            </div >
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </React.Fragment>

        )
    }
}