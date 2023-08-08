import Notification from "./Notification";

function App() {
  const notifications = [
    {
      id: crypto.randomUUID(),
      name: "Mark Webber",
      action: "react",
      target: "My first tournament today!",
      time: "1m",
      read: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Angela Gray",
      action: "follow",
      target: "",
      time: "5m",
      read: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Jacob Thompson",
      action: "join",
      target: "Chess Club",
      time: "1 day",
      read: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Rizky Hasanuddin",
      action: "pm",
      target: "",
      time: "5 days",
      message: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
      I'm already having lots of fun and improving my game.`,
      read: true,
    },
    {
      id: crypto.randomUUID(),
      name: "Kimberly Smith",
      action: "comment",
      target: "",
      time: "1 week",
      read: true,
    },
    {
      id: crypto.randomUUID(),
      name: "Nathan Peterson",
      action: "react",
      target: "5 end-game strategies to increase your win rate",
      time: "2 weeks",
      read: true,
    },
    {
      id: crypto.randomUUID(),
      name: "Anna Kim",
      action: "leave",
      target: "Chess Club",
      time: "2 weeks",
      read: true,
    },
  ];

  return (
    <>
      <div className="main">
        <div className="header">
          <div className="header-left">
            <h1>Notifications</h1>
            <div className="notifications-counter">3</div>
          </div>
          <div className="header-right">
            <button className="mark-read-btn">Mark all as read</button>
          </div>
        </div>
        <div className="notification-list">
          {notifications.map((notification) => {
            return <Notification {...notification} key={notification.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
