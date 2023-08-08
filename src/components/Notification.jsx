function Notification({ id, name, action, target, time, message, picture, read }) {
  return (
    <>
      <div className="notification-div">
        <div className="avatar">
          <img src="#" alt="#" />
        </div>
        <div className="notification-content">
          <p>
            <span className="notification-name">{name}</span> {action}{" "}
            <span className="notification-target">{target}</span>{" "}
            {!read && <span className="unread-dot"></span>}
          </p>
          <p>{time} ago</p>
          {message && <div className="message-div">{message}</div>}
        </div>
        {picture && <div>{picture}</div>}
      </div>
    </>
  );
}

export default Notification;

/*

Dot class example

.dot {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

*/