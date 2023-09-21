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
            <h2 className="featurette-heading">We started iNotebook in 2023 <span className="text-muted">It’ll blow your
              mind.</span>
            </h2>
            <p className="lead">At iNotebook, our mission is simple: to make note-taking and organization effortless for everyone. We believe that well-organized notes can enhance productivity and creativity, and we want to empower you to achieve your goals through effective note management.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="img-fluid" src={two} alt="" />

          </div>
        </div>

        <div className="row featurette d-flex justify-content-center  align-items-center my-3">
          <div className="col-md-7">
            <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll secure your Notes</span>
            </h2>
            <p className="lead">Your privacy and data security are our top priorities. We use the latest encryption technology to ensure that your notes are safe and secure.
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