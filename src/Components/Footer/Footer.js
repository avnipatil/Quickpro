import './Footer.css'
const Footer =()=>{
    return(
        <>
        <section className='my-3 py-5'style={{backgroundColor:'#80808008'}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-3 col-sm-3'>
                        <h5 style={{textAlign:'justify'}}>Logo</h5>
                        <p style={{textAlign:'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-3'>
                      <h4>Quick Links</h4>
                        <ul className="foot_ul">
                            <li>Admission</li>
                            <li>Student</li>
                            <li>Course</li>
                            <li>Facilities</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-3'>
                    <h4>Conatct Us</h4>
                    <p>919 North Market Street,<br/>Suite 950 Wilmington,<br/>Delaware 19801</p>
                    <p>contact@logo.com</p>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-3'>
                    <h4>Our Newsletter</h4>
                        <p>Subscribe to our newsletter to get latest updates.</p>
                        <div style={{display:'flex'}}> 
                           <input type="email" placeholder='Email Here..' style={{border:'none'}}/>
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