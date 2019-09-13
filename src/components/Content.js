import React, { Component } from 'react';
// import env from '../assets/images/Energy Transfer Logo Horizontal Stack.jpg';
// import genghis from '../assets/images/gengisgrill.png';
// import rhw from '../assets/images/rhw-logo.png';
// import roffeswayne from '../assets/images/Roffe-swayne.png';
// import bsge from '../assets/images/bsge-logo.jpg';
// import nifa from '../assets/images/nifa.svg';

export default class Content extends Component {
    render() {
        return (
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 order-lg-2 order-md-2 order-sm-1 order-xs-1">
                <div className="profile__summary">
                    <div className="profile__summary__body profile__summary__body__row__2">
                        <h3>Work Experience</h3>
                        <ul className="pl-5">
                            <li>Working as a Seniour Software Engineer at Utthunga Technologies Pvt. Ltd., Bangalore from Oct-2018 to March 2019 till date.</li>
                            <li>Working as a Software Engineer at Minjar Cloud Solutions Pvt. Ltd., Bangalore from March-2017 to March 2018.</li>
                            <li>Working as a Software Engineer at Aksatech Solutions Pvt. Ltd., Bangalore from July’2015-March-2017.</li>
                            <li>Worked as Software Engineer at Bitla Software, Bangalore from June’2014-June’2015.</li>
                        </ul>
                    </div>
                    <div className="profile__summary__body profile__summary__body__row__2">
                        <h3>Education</h3>
                        <ul className="pl-5">
                            <li>Master of Computer Application from NMIT,Bangalore, Karnataka.with 69%.</li>
                            <li>Bachlore of Computer Application from NMIT,Bangalore, Karnataka.with 69%.</li>
                            <li>Intermediate Board Education, AP.with 52%.</li>
                            <li>SSLC Board Education, AP.with 70.19%.</li>
                        </ul>
                    </div>
                    <div className="profile__summary__body profile__summary__body__row__2">
                        <h3>Projects</h3>
                        <ul className="profile__list__projects">
                            <li className="card card__project">
                                <div className="card__image">
                                    {/* <img src={env} alt="energytransfer" className="card-img-top"/> */}
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title"><a href="https://www.lepainquotidien.com" target="_blank" rel="noopener noreferrer">Le Pain Quotidien</a></h4>
                                    <p className="card-text">A common theme in all Le Pain Quotidien locations is a long, wooden "communal table". For the first restaurant in Brussels, founder Alain Coumont found a large table made of wood reclaimed from the floors of retired Belgian trains.</p>
                                </div>
                            </li>
                            <li className="card card__project">
                                <div className="card__image">
                                    {/* <img src={env} alt="energytransfer" className="card-img-top"/> */}
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title"><a href="https://www.jolly-roger.co.uk/" target="_blank" rel="noopener noreferrer">Jolly Roger</a></h4>
                                    <p className="card-text">Jolly Roger (Amusement Rides) Limited is the world’s leading manufacturer of licensed and premium coin operated kiddie rides. Since 1988, Jolly Roger has built its leadership position for quality and reputation by incorporating innovative design.</p>
                                </div>
                            </li>
                            <li className="card card__project">
                                <div className="card__image">
                                    {/* <img src={env} alt="energytransfer" className="card-img-top"/> */}
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title"><a href="https://www.energytransfer.com/" target="_blank" rel="noopener noreferrer">Energy Transfer</a></h4>
                                    <p className="card-text">Energy Transfer is one of America's largest and most diversified midstream energy companies. See how we're working to safely transport the oil and gas</p>
                                </div>
                            </li>
                            <li className="card card__project">
                                <div className="card__image">
                                    {/* <img src={genghis} alt="Genghis Grill" className="card-img-top"/> */}
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title"><a href="https://www.genghisgrill.com/" target="_blank" rel="noopener noreferrer">Genghis Grill</a></h4>
                                    <p className="card-text">At Genghis Grill, you build your own bowl from over 80 fresh, delicious ingredients. Everyone's favorite Mongolian BBQ where you forge your own flavor!.</p>
                                </div>
                            </li>
                            <li className="card card__project">
                                <div className="card__image">
                                    {/* <img src={rhw} alt="rhw" className="card-img-top"/> */}
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title"><a href="https://www.rhw.co.uk/" target="_blank" rel="noopener noreferrer">RHW</a></h4>
                                    <p className="card-text">rhw Solicitors in Guildford, Surrey, provide specialist legal advice to individuals & business on family law, employment law, inheritance tax advice & more.</p>
                                </div>
                            </li>
                            <li className="card card__project">
                                <div className="card__image">
                                    {/* <img src={roffeswayne} alt="roffeswayne" className="card-img-top"/> */}
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title"><a href="https://www.roffeswayne.com/" target="_blank" rel="noopener noreferrer">Roffe Swayne</a></h4>
                                    <p className="card-text">Our skilled team of Roffe Swayne chartered accountants, business advisers and tax advisers will support you in your business growth ambitions.</p>
                                </div>
                            </li>
                            <li className="card card__project">
                                <div className="card__image">
                                    {/* <img src={bsge} alt="bsge" className="card-img-top"/> */}
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title"><a href="https://www.bsge.org.uk/" target="_blank" rel="noopener noreferrer">BSGE</a></h4>
                                    <p className="card-text">The British Society for Gynaecological Endoscopy improves standards & training in minimal access surgery techniques for women with gynaecological.</p>
                                </div>
                            </li>
                            <li className="card card__project">
                                <div className="card__image">
                                    {/* <img src={nifa} alt="bsge" className="card-img-top"
                                    /> */}
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title"><a href="https://nifa.wpengine.com/" target="_blank" rel="noopener noreferrer">NIFA</a></h4>
                                    <p className="card-text">Find experienced, qualified forensic accountants to provide independent and flexible services for you or your company.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}