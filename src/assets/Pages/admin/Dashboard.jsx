import React from 'react'
import { Link } from 'react-router-dom'
import { FaBoxOpen, FaThList } from 'react-icons/fa'

const Dashboard = () => {
  return (
    <div className="container mt-2 me-5 p-3">
      <h1 className=" fw-bold text-uppercase">Admin Panel</h1>

      <div className="row d-flex justify-content-center">
        <div className="col-md-4">
          <div className="card shadow border-0 text-center p-4" style={{ borderRadius: '20px' }}>
            <div className="card-body">
              <div className="mb-3" style={{ fontSize: '50px', color: '#BDEB69' }}>
                <FaBoxOpen />
              </div>
              <h4 className="card-title fw-bold">PRODUCTS</h4>
              <p className="text-muted">Manage products , delete , add and edit...</p>
              <Link className='btn btn-dark w-100 py-2 rounded-pill' to="/dashboard/product">
                Go to Products
              </Link>
            </div>
          </div>
        </div>

        {/* Category ******************************************/}


        <div className="col-md-4">
          <div className="card shadow border-0 text-center p-4" style={{ borderRadius: '20px' }}>
            <div className="card-body">
              <div className="mb-3" style={{ fontSize: '50px', color: '#17a2b8' }}>
                <FaThList />
              </div>
              <h4 className="card-title fw-bold">CATEGORIES</h4>
              <p className="text-muted">Manage categories , delete , add and edit...</p>
              <Link className='btn btn-dark w-100 py-2 rounded-pill' to="/dashboard/category">
                Go to Categories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;