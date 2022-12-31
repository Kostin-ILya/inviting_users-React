import { Skeleton } from './Skeleton'
import { User } from './User'

export const Users = ({ items, isLoading, onSuccess, onAddInvite }) => {
  return (
    <>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {items.map((user) => (
            <User key={user.id} onAddInvite={onAddInvite} {...user} />
          ))}
        </ul>
      )}
      <button className="send-invite-btn" onClick={onSuccess}>
        Send an invitation
      </button>
    </>
  )
}
