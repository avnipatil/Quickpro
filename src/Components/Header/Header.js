import './Header.css'
import shield from '../../images/shield.png'
import graduationcap from '../../images/graduation-cap.png'
import checklist from '../../images/checklist.png'
import abacus from '../../images/abacus.png'
import manwithchild from '../../images/man-with-child.png'
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
                            <div className='col-lg-3 col-md-3 col-sm-12' style={{display:'grid'}}><img src={shield} className="img-fluid headnav_img"/><span className="head_navtxt">Defence Academy</span></div>
                            <div className='col-lg-2 col-md-3 col-sm-12'><img src={graduationcap}/><span className="head_navtxt">Junior Collage</span></div>
                            <div className='col-lg-2 col-md-3 col-sm-12'><img src={manwithchild}/><span className="head_navtxt">School</span></div>
                            <div className='col-lg-3 col-md-3 col-sm-12'style={{display:'grid'}}><img src={abacus} className="headnav_img2"/><span className="head_navtxt">Pre School</span></div>
                            <div className='col-lg-2 col-md-3 col-sm-12'><img src={checklist}/><span className="head_navtxt">Admission Form</span></div>
                        </div>
                    </div>
                </div>    
                <nav class="navbar navbar-expand-sm  justify-content-end">
                    <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown"> Home</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Services</a>
                        <a class="dropdown-item" href="#">Internal Courses</a>
                        <a class="dropdown-item" href="#">Systems</a>
                    </div>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">About</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Our Work</a>
                        <a class="dropdown-item" href="#">Planing</a>
                        <a class="dropdown-item" href="#">Our Team</a>
                        <a class="dropdown-item" href="#">NewsLatter</a>
                    </div>
                    </li>
                
                        <li class="nav-item">
                        <a class="nav-link" href="#">Admission</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Courses</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Facilities</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">News & Events</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
        </>
    )
}
export default Header;