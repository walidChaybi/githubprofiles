import { Link } from "react-router-dom"

function UserItem({ user: { login, avatar_url }, key }) {
  return (
    <div key={key} className="card shadow-md compact side ">
      <Link
        className="flex-row items-center space-x-4 card-body"
        to={`/user/${login}`}
      >
        <div>
          <div className="avatar">
            <div className="rounded-full  w-14 h-14">
              <img src={avatar_url} alt="profil" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
        </div>
      </Link>
    </div>
  )
}

export default UserItem
