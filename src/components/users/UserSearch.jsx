import { useState, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
function UserSearch() {
  const [text, setText] = useState("")
  const { users, setUsers, fetchUsers } = useContext(GithubContext)
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (text.length > 0) {
              fetchUsers(text)
              setText("")
            } else {
              alert("please enter at least 1 charactere")
            }
          }}
        >
          <div className="form-control">
            <div className="relative">
              <input
                autoFocus
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search "
                value={text}
                onChange={(e) => {
                  setText(e.target.value)
                }}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users?.length > 0 && (
        <div>
          <button
            onClick={() => {
              setUsers([])
            }}
            className="btn btn-ghost btn-lg"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default UserSearch
