import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="container">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>

            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="chat-header">
                Chaybi
                <time className="text-xs opacity-50"> 12:45</time>
              </div>
              <div className="chat-bubble text-align-left">
                I think the server in the backend is down!
              </div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="chat-header">
                server
                <time className="text-xs opacity-50"> 12:46</time>
              </div>
              <div className="chat-bubble">I hate you!</div>
              <div className="chat-footer opacity-50">Seen at 12:46</div>
            </div>
            <kbd className="kbd">Delete</kbd>
            <Link to="/">
              <button className="mt-5 btn btn-primary">Back Hone</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
