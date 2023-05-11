import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/">Action</Link></li>
                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="/">Disabled</Link>
            </li>
          </ul>

          <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={() => { props.toggleMode('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
              <div className="bg-danger rounded mx-2" onClick={() => { props.toggleMode('danger') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                <div className="bg-success rounded mx-2" onClick={() => { props.toggleMode('success') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                  <div className="bg-warning rounded mx-2" onClick={() => { props.toggleMode('warning') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                  <div className="bg-info rounded mx-2" onClick={() => { props.toggleMode('info') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                  <div className="bg-light rounded mx-2" onClick={() => { props.toggleMode('light') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                  <div className="bg-dark rounded mx-2" onClick={() => { props.toggleMode('dark') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                  
          </div>

          {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-3 my-3`}>
            <input className="form-check-input" onClick={() => { props.toggleMode(null) }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div> */}
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
          </form>

        </div>
      </div>
    </nav>
  )
}


Navbar.propTypes = { title: PropTypes.string.isRequired }