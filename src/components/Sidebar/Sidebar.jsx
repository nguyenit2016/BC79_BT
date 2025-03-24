import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [filmsOpen, setFilmsOpen] = useState(false);
  return (
    <div className="d-flex flex-column bg-dark text-white vh-100 p-3" style={{ width: "250px" }}>
      <div className="mb-4">
        <h5 className="text-warning">CYBERLEARN</h5>
        <p className="small text-muted">ĐÀO TẠO CHUYÊN GIA LẬP TRÌNH</p>
      </div>

      <ul className="nav flex-column">
        <li className="nav-item">
          <a href="#" className="nav-link text-white d-flex align-items-center">
                 Users
          </a>
        </li>
        
        <li className="nav-item">
          <div
            className="nav-link text-white d-flex justify-content-between align-items-center"
            onClick={() => setFilmsOpen(!filmsOpen)}
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex align-items-center">
               Films
            </div>
            
          </div>
          {filmsOpen && (
            <ul className="nav flex-column ms-3">
              <li className="nav-item">
                <Link className="nav-link text-white" to='/admin/films'>Films</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link text-white' to='/admin/films/addnew'>Add new</Link>
              </li>
            </ul>
          )}
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link text-white d-flex align-items-center">
             Showtime
          </a>
        </li>
      </ul>
    </div>
  )
}
