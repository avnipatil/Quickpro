import './Footer.css'
const Footer = () => {
    return (
        <>
            <section className='my-3 py-5' style={{ backgroundColor: '#80808008' }}>
                <div className='container'>
                    <div className='row' style={{ textAlign: 'initial' }}>
                        <div className='col-lg-3 col-md-3 col-sm-3'>
                            <h5 style={{ textAlign: 'justify' }}>Logo</h5>
                            <p style={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-3'>
                            <h4>Quick Links</h4>
                            <ul className="foot_ul">
                                <li><i className="fa fa-angle-right mr-2" style={{ color: '#0e0e81' }} aria-hidden="true"></i>Admission</li>
                                <li><i className="fa fa-angle-right mr-2" style={{ color: '#0e0e81' }} aria-hidden="true"></i>Student</li>
                                <li><i className="fa fa-angle-right mr-2" style={{ color: '#0e0e81' }} aria-hidden="true"></i>Course</li>
                                <li><i className="fa fa-angle-right mr-2" style={{ color: '#0e0e81' }} aria-hidden="true"></i>Facilities</li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-3'>
                            <h4>Conatct Us</h4>
                            <p><i className="fa fa-map-marker mr-2" style={{ color: '#0e0e81' }} aria-hidden="true"></i>919 North Market Street,<br />Suite 950 Wilmington,<br />Delaware 19801</p>
                            <p><i className="fa fa-envelope mr-2" style={{ color: '#0e0e81' }} aria-hidden="true"></i>contact@logo.com</p>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-3'>
                            <h4>Our Newsletter</h4>
                            <p>Subscribe to our newsletter to get latest updates.</p>
                            <div style={{ display: 'flex' }}>
                                <input type="email" placeholder='Email Here..' style={{ border: 'none' }} />
                                <button className='btn'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer;