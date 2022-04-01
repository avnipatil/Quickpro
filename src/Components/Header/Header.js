import './Header.css'
import shield from '../../images/shield.png'
const Header =()=>{
    return(
        <>
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-6' style={{textAlign:'justify'}}>
                        <h1 className='logotxt'>Logo</h1>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6'>
                        <div className='row text-right' >
                            <div className='col-lg-3 col-md-1 col-sm-2'><img src={shield} className="img-fluid"/>Defence Academy</div>
                            <div className='col-lg-2 col-md-1 col-sm-2'>Junior Collage</div>
                            <div className='col-lg-2 col-md-1 col-sm-2'>School</div>
                            <div className='col-lg-3 col-md-1 col-sm-2'>Pre School</div>
                            <div className='col-lg-2 col-md-1 col-sm-2'>Admission Form</div>
                        </div>
                    </div>
                </div>    
            </div>
        </section>
        </>
    )
}
export default Header;