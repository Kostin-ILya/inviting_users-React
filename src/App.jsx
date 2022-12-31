import { useEffect, useState } from 'react'

import { Success } from './components/Success'
import { Users } from './components/Users'
import { Search } from './components/Users/Search'

import './index.scss'

const App = () => {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const [invites, setInvites] = useState([])

  const [isLoading, setLoading] = useState(true)
  const [isSuccess, setSeccess] = useState(false)

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((result) => setUsers(result.data))
      .catch((err) => {
        console.warn(err)
        alert('Data loading error')
      })
      .finally(() => setLoading(false))
  }, [])

  const onTypeSearch = (term) => {
    setSearch(term)
  }
  const onSuccess = () => {
    setSeccess(true)
  }
  const onBackBtn = () => {
    setInvites([])
    setSeccess(false)
  }

  const onAddInvite = (id) => {
    if (invites.findIndex((invite) => invite.id === id) === -1) {
      setInvites((prev) => [
        ...prev,
        users[users.findIndex((user) => user.id === id)],
      ])
    } else {
      setInvites((prevInvites) => prevInvites.filter((obj) => obj.id !== id))
    }
  }

  const searchUsers = (arr, text) => {
    if (text.length === 0) {
      return arr
    } else {
      return arr.filter(({ first_name, last_name, email }) => {
        const fullInfo = (first_name + last_name + email).toLowerCase()

        return fullInfo.includes(text.toLowerCase())
      })
    }
  }

  return (
    <div className="App">
      <>
        {!isSuccess ? (
          <>
            <Search search={search} onTypeSearch={onTypeSearch} />
            <Users
              items={searchUsers(users, search)}
              onSuccess={onSuccess}
              onAddInvite={onAddInvite}
              isLoading={isLoading}
            />
          </>
        ) : (
          <Success quantity={invites.length} onBackBtn={onBackBtn} />
        )}
      </>
    </div>
  )
}

export default App
