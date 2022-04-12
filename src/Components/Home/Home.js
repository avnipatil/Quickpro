import './Home.css'
import touch from '../../images/touch.png'
import student from '../../images/student.png'
import male from '../../images/male.png'
import internet from '../../images/internet.png'
import WelcomTraining from '../WelcomTraining/WelcomTraining'
import Banner from '../Banner/Banner'
const Home =()=>{
    return(
        <>
        <Banner/>
        <section>
            <div className="container my-5">
                <h5 className="insti_head">Institutional Goals</h5>
                <h4>Well, <span style={{color:'orangered'}}>lots of Reasons </span>but most <span style={{color:'orangered'}}>Importantly</span> because....</h4>
                <div className="row my-4">
                    <div className="col-lg-3 col-sm-3 col-md-3">
                        <img src={touch}/>
                        <h5 className='hand_subhead my-2'>Hands-on-learning</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="col-lg-3 col-sm-3 col-md-3">
                      <img src={student}/>
                      <h5 className='hand_subhead my-2'>Student Engagement</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="col-lg-3 col-sm-3 col-md-3">
                      <img src={male}/>
                      <h5 className='hand_subhead my-2'>Experience Staff</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="col-lg-3 col-sm-3 col-md-3">
                      <img src={internet}/>
                      <h5 className='hand_subhead my-2'>Globalization</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </section>
        <WelcomTraining/>
        </>
    )
}
export default Home;