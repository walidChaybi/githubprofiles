import { createContext, useState, useReducer } from "react"

const GithubContext = createContext()
const GITHUB_URL = "https://api.github.com"

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [isLoading, setLoading] = useState(false)

  const fetchUsers = async (text) => {
    setLoading(true)
    const params = new URLSearchParams({
      q: text,
    })
    const res = await fetch(`${GITHUB_URL}/search/users?${params}`)
    const { items } = await res.json()
    setUsers(items)
    setLoading(false)
  }

  // getting Single user
  const fetchUser = async (login) => {
    setLoading(true)

    const res = await fetch(`${GITHUB_URL}/users/${login}`)
    const user = await res.json()
    setUser(user)
    setLoading(false)
  }

  const fetchUserRepo = async (user) => {
    setLoading(true)

    const res = await fetch(`${GITHUB_URL}/users/${user}/repos`)
    const data = await res.json()
    setRepos(data)
    setLoading(false)
  }

  return (
    <GithubContext.Provider
      value={{
        users,
        user,
        repos,
        setRepos,
        fetchUserRepo,
        setUser,
        fetchUser,
        setUsers,
        isLoading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
