import pic from "../assets/images/angela.webp";

function Notification({
  id,
  name,
  action,
  target,
  time,
  message,
  picture,
  read,
}) {
  return (
    <>
      <div className={`notification-div ${!read && 'unread-bg'}`} >
        <div className="avatar">
          <img src={pic} alt="#" />
        </div>
        <div className="notification-content">
          <p className="notification-text">
            <span className="notification-name">{name}</span> {action}{" "}
            {target != "" && <span className="notification-target" >{target}</span>}{" "}
            {!read && <span className="unread-dot"></span>}
          </p>
          <p className="notification-time">{time} ago</p>
          {message && <div className="message-div">{message}</div>}
        </div>
        {picture && <img className="comment-pic" src={pic} alt="#" />}
      </div>
      
    </>
  );
}

export default Notification;


