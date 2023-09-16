import React from 'react'
import one from "./img/one.jpg"
import two from "./img/two.jpg"
import three from "./img/three.jpg"
import {Footer} from './Footer';

const About = () => {
  return (
    <>
    <div>
      <div className="container">
        <div className="row featurette d-flex justify-content-center  align-items-center ">
          <div className="col-md-7 ">
            <h2 className="featurette-heading">It all started with iNotebook Idea <span className="text-muted">It’ll store
              your notes</span>
            </h2>
            <p className="lead">Welcome to NotesStore, your one-stop destination for all your note-taking needs.
            </p>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src={one} alt="" />
          </div>
        </div>

        <div className="row featurette d-flex justify-content-center  align-items-center my-3">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">We started Icoder's in 1950 <span className="text-muted">It’ll blow your
              mind.</span>
            </h2>
            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting
              prose here.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="img-fluid" src={two} alt="" />

          </div>
        </div>

        <div className="row featurette d-flex justify-content-center  align-items-center my-3">
          <div className="col-md-7">
            <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your
              mind.</span>
            </h2>
            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting
              prose here.
            </p>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src={three} alt="" />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>

  )
}

export default About