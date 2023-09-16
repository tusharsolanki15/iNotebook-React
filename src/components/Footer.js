import React from 'react'
import { Link } from 'react-router-dom'
import insta from "./img/insta.png"
import facbook from "./img/facbook.png"
import x from "./img/x.png"

export const Footer = () => {
    const sty={
        height: "45px"
    }

  return (
    <div >
        <footer className=" container d-flex flex-wrap justify-content-end align-items-end py-3 my-4 border-top ">
            <div className="col-md-4 d-flex align-items-center">
                <Link to="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    <svg className="bi" width="30" height="24">
                    </svg>
                </Link>
                <span className="mb-3 mb-md-0 text-body-secondary">© 2023-2024  iNotebook, Inc . <Link to="#">Privacy</Link> . <Link to="#">Terms</Link> </span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
    
                <li className="ms-3 "><Link className="text-body-secondary" to="https://www.instagram.com/"><img style={sty} src={insta} alt="insta" /></Link></li>
                <li className="ms-3 "><Link className="text-body-secondary" to="https://www.facebook.com/" ><img  style={{height: "45px"}} src={facbook} alt="Facebook" /></Link></li>
                <li className="ms-3"><Link className="text-body-secondary" to="https://twitter.com/home"><img  style={sty} src={x} alt="X"  />
                </Link></li>
            </ul>
        </footer>
    </div>
  )
}
