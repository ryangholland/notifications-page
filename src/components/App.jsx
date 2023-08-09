import { useState } from "react";
import Notification from "./Notification";
import angela from "../assets/images/angela.webp";
import anna from "../assets/images/anna.webp";
import jacob from "../assets/images/jacob.webp";
import kimberly from "../assets/images/kimberly.webp";
import mark from "../assets/images/mark.webp";
import nathan from "../assets/images/nathan.webp";
import rizky from "../assets/images/rizky.webp";
import chesspic from "../assets/images/chesspic.webp";

function App() {
  const data = [
    {
      id: crypto.randomUUID(),
      name: "Mark Webber",
      avatar: mark,
      action: "reacted to your recent post",
      target: "My first tournament today!",
      time: "1m",
      read: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Angela Gray",
      avatar: angela,
      action: "followed you",
      target: "",
      time: "5m",
      read: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Jacob Thompson",
      avatar: jacob,
      action: "has joined your group",
      target: "Chess Club",
      time: "1 day",
      read: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Rizky Hasanuddin",
      avatar: rizky,
      action: "sent you a private message",
      target: "",
      time: "5 days",
      message: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
      I'm already having lots of fun and improving my game.`,
      read: true,
    },
    {
      id: crypto.randomUUID(),
      name: "Kimberly Smith",
      avatar: kimberly,
      action: "commented on your picture",
      target: "",
      time: "1 week",
      picture: chesspic,
      read: true,
    },
    {
      id: crypto.randomUUID(),
      name: "Nathan Peterson",
      avatar: nathan,
      action: "reacted to your recent post",
      target: "5 end-game strategies to increase your win rate",
      time: "2 weeks",
      read: true,
    },
    {
      id: crypto.randomUUID(),
      name: "Anna Kim",
      avatar: anna,
      action: "left the group",
      target: "Chess Club",
      time: "2 weeks",
      read: true,
    },
  ];

  const [notifications, setNotifications] = useState(data);

  const getUnread = () => {
    return notifications.reduce((total, curr) => {
      return curr.read ? total + 0 : total + 1;
    }, 0);
  };

  const [totalUnread, setTotalUnread] = useState(getUnread);

  const markRead = () => {
    setNotifications(
      notifications.map((notification) => {
        notification.read = true;
        return notification;
      })
    );
    setTotalUnread(getUnread);
  };

  const changeReadStatus = (id) => {
    setNotifications(
      notifications.map((notification) => {
        if (notification.id === id) notification.read = !notification.read;
        return notification;
      })
    );
    setTotalUnread(getUnread);
  };

  return (
    <>
      <div className="main">
        <div className="header">
          <div className="header-left">
            <h1>Notifications</h1>
            <div className="notifications-counter">{totalUnread}</div>
          </div>
          <div className="header-right">
            <button className="mark-read-btn" onClick={markRead}>
              Mark all as read
            </button>
          </div>
        </div>
        <div className="notification-list">
          {notifications.map((notification) => {
            return (
              <Notification
                {...notification}
                key={notification.id}
                changeReadStatus={changeReadStatus}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
