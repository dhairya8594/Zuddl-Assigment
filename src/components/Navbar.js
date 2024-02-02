import React from 'react'
import '../styles/Navbar.css';
import Dropdown from 'react-bootstrap/Dropdown';

export default function navbar() {
  return (
    <>
<nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Taco's Tacos   
     <i class='bx bx-star'></i>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link "  href="/">&#128054;Taco & Co.         
           <button className='bbtn'>free</button>
          </a>
        </li>
        <br/>
        <li class="nav-item">
        
          <a class="nav-link" href="/"><i class='bx bxs-user'/> Team Visible</a>
        </li>
       
      </ul>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Show Menu
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Menu 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Menu 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Menu 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  </div>
</nav>
      
    </>
  )
}
