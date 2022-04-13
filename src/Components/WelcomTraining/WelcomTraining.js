import './WelcomTraining.css'
import avtar from '../../images/avtar.jpg'

const WelcomTraining = () => {
    return (
        <>
            <section className='my-5'>
                <div className='container'>
                    <div className='row wel_box py-5'>
                        <div className='col-lg-3 col-sm-12 col-md-3'>
                            <img src={avtar} className="img-fluid wel_perimg" />
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-6' style={{ textAlign: 'justify' }}>
                            <h4>Welcome To,<span style={{ color: 'orangered' }}>Trainning School</span></h4>
                            <p style={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div className='col-lg-3 col-sm-12 col-md-3'>
                            <h3 className='year29 mt-5'>29 Years</h3>
                            <h5 style={{ color: 'darkblue', textAlign: 'justify' }}>Work Experience</h5>
                            <p style={{ color: 'lightblue', textAlign: 'justify' }}>Get Free Guide<i className="fa fa-arrow-right mx-3" aria-hidden="true"></i></p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default WelcomTraining;