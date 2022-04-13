
import './Banner.css'
const Banner = () => {
    return (
        <>
            <section className="banner_backimg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 my-5 ban_colstxt">
                            <h2 className="text-white text-justify">Making Education easier<br />the way possible </h2>
                            <h2 className="text-justify txt_color">Extensive</h2>
                            <p className="text-white text-justify">Research Out the most compontent & Passianate mentors.</p>
                            <div className=" text-justify mt-5">
                                <button className="cons_btn py-2 px-5 mx-2">Consultion</button>
                                <button className="howwork_btn py-1 px-5 mx-2"><i className="fa fa-caret-right" style={{ fontSize: '25px' }} aria-hidden="true"></i> How We Work</button>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12 form_box px-5 py-5 my-5" style={{ marginTop: '4%' }}>
                            <h3 className="text-white text-justify">Let's turned Your education with us </h3>
                            <p className="text-white text-justify">Enter Basic Details for admission enquiry</p>
                            <form>
                                <div class="form-row">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="First Name" name="name" />
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Last Name" name="lastname" />
                                    </div>
                                </div>
                                <div class="form-row mt-3">
                                    <div class="col">
                                        <input type="email" class="form-control" placeholder="Email" name="name" />
                                    </div>
                                    <div class="col">
                                        <input type="number" class="form-control" placeholder="Phone" name="lastname" />
                                    </div>
                                </div>
                                <div className="lg-12  mt-3">
                                    <select className="form-control" >
                                        <option name="Course" value="">Select Course Type </option>
                                        <option name="Course" value="Software Course" >Software Course</option>
                                        <option name="Course" value="Designing Course" >Designing Course</option>
                                        <option name="Course" value="Angular Course" >Angular Course</option>
                                        <option name="Course" value="Graphics Course" >Graphics Course</option>
                                        <option name="Course" value="React Course" >React JS</option>
                                    </select>
                                </div>
                                <div class="form-group mt-3">
                                    <textarea class="form-control" rows="3" placeholder="Message" textarea />
                                </div>
                                <div style={{ textAlign: 'justify' }}>
                                    <button className="btnform py-2 px-5">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Banner;