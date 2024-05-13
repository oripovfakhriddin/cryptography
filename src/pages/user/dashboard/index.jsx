import { Fragment } from "react";

import UserHelloImg from "../../../assets/img/home/user-hello.png";

import "./style.scss";

const UserDashboardPage = () => {
  return (
    <Fragment>
      <section>
        <div className="dashboard__content__box">
          <div className="user__hello__img__box">
            <img src={UserHelloImg} alt="User Img Hello" />
          </div>
          <div className="dashboard__content__block">
            <h1 className="content__title">Assalomu aleykum hurmatli foydalanuvchi!</h1>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default UserDashboardPage;
