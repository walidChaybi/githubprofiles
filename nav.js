;<nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
  <div className="container mx-auto">
    <div className="flex-none px-2 mx-2 items-center">
      <Link to="/" className="text-3xl">
        <FaGithub size={75} className="inline pr-2 " />
        <p className="inline">Github Finder</p>
      </Link>
    </div>
    <div className="flex-1 px-2 mx-2">
      <div className="flex justify-end">
        <Link to="/" className="text-2xl btn btn-ghost btn-md rounded-btn ">
          Home
        </Link>
        <Link
          to="/about"
          className="text-2xl  btn btn-ghost btn-md rounded-btn"
        >
          About
        </Link>
      </div>
    </div>
  </div>
</nav>
