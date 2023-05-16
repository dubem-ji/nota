import React from 'react'

const Confirm = ({ togglesShowConfirm, confirmOption }) => {

    const handleConfirm = (option) => {
        confirmOption(option);
        togglesShowConfirm();
    }

  return (
      <div className='confirm'>
          <div className="container">
              <h4>Are you sure?</h4>
              <div className="options">
                  <div className="yes" onClick={
                      () => handleConfirm(true)
                  }>
                      <h4>Yes</h4>
                  </div>
                  <div className="no" onClick={
                      () => handleConfirm(false)
                  }>
                      <h4>No</h4>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Confirm;