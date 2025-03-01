// NotificationPopup.jsx
import { useState } from "react";
import "./NotificationPopup.css"; // 需要创建一个 CSS 文件存放样式

const NotificationPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAllowClick = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="notificationCard">
      <p className="notificationHeading">🐑小提示🐑</p>
      <p className="notificationPara" style={{marginTop: '15px'}}>🎉欢迎来到我的网站！</p>
      <p className="notificationPara">🐞网站仍在建设中,如果您发现了BUG, 欢迎通过页面最下方的Github链接通知我</p>
      <p className="notificationPara">💻网站暂时没有响应式设计, 所以请务必使用电脑浏览器打开</p>
      <p className="notificationPara">❗网站中有很多好玩的可交互元素, 你可以到处移动鼠标以及点来点去, 比如最上方的我的照片！</p>
      <p className="notificationPara">🎉谢谢您的观看</p>
      <div className="buttonContainer" style={{marginTop: '15px'}}>
        <button className="AllowBtn" onClick={handleAllowClick}>关闭小提示</button>
      </div>
    </div>
  );
};

export default NotificationPopup;
