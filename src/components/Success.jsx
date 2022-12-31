import React from 'react'

export const Success = ({ quantity, onBackBtn }) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Successfully!</h3>
      <p>Invitations were sent out to all {quantity} users.</p>
      <button className="send-invite-btn" onClick={onBackBtn}>
        Назад
      </button>
    </div>
  )
}
