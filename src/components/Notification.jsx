function Notification({
  id,
  avatar,
  name,
  action,
  target,
  time,
  message,
  picture,
  read,
  changeReadStatus,
}) {
  return (
    <>
      <div
        className={`notification-div ${!read && "unread-bg"}`}
        onClick={() => changeReadStatus(id)} 
      >
        <div className="avatar">
          <img src={avatar} alt="#" />
        </div>
        <div className="notification-content">
          <p className="notification-text">
            <a className="notification-name" href="#">{name}</a> {action}{" "}
            {target != "" && (
              <a className="notification-target" href="#">{target}</a>
            )}{" "}
            {!read && <span className="unread-dot"></span>}
          </p>
          <p className="notification-time">{time} ago</p>
          {message && <div className="message-div"><a href="#">{message}</a></div>}
        </div>
        {picture && <img className="comment-pic" src={picture} alt="#" />}
      </div>
    </>
  );
}

export default Notification;
