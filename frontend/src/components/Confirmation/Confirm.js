import React from 'react'

const Confirm = ({ togglesShowConfirm }) => {



  return (
      <div className='confirm'>
          <div className="container">
              <h4>Are you sure?</h4>
              <div className="options">
                  <div className="yes" onClick={
                      () => togglesShowConfirm()
                  }>
                      <h4>Yes</h4>
                  </div>
                  <div className="no" onClick={
                      () => togglesShowConfirm()
                  }>
                      <h4>No</h4>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Confirm;