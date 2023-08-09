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
            <span className="notification-name">{name}</span> {action}{" "}
            {target != "" && (
              <span className="notification-target">{target}</span>
            )}{" "}
            {!read && <span className="unread-dot"></span>}
          </p>
          <p className="notification-time">{time} ago</p>
          {message && <div className="message-div">{message}</div>}
        </div>
        {picture && <img className="comment-pic" src={picture} alt="#" />}
      </div>
    </>
  );
}

export default Notification;
