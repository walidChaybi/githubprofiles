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
    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `bearer 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`,
      },
    })
    const { items } = await res.json()
    setUsers(items)
    setLoading(false)
  }

  // getting Single user
  const fetchUser = async (login) => {
    setLoading(true)

    const res = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `bearer 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`,
      },
    })
    const user = await res.json()
    setUser(user)
    setLoading(false)
  }

  const fetchUserRepo = async (user) => {
    setLoading(true)

    const res = await fetch(`${GITHUB_URL}/users/${user}/repos`, {
      headers: {
        Authorization: `bearer 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`,
      },
    })
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
