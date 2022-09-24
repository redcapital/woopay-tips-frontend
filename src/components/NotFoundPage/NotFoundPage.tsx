import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div>
      404 страница не найдена
      <br />
      <Link to="/">На главную</Link>
    </div>
  );
};
NotFoundPage.displayName = "NotFoundPage";

export default NotFoundPage;
