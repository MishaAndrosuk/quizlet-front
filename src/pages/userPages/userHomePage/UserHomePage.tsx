import { useEffect, useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { Card } from "primereact/card";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Test } from "../../../store/reducers/tests/types";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import { PrimeIcons } from "primereact/api";
import "./UserHomePage.css";

import React from "react";

const UserHomePage = () => {
    return (
        <div className="cards">

            <div className="card" >
                <i className={`pi ${PrimeIcons.CLONE} icon`} ></i>
                <span>Карточки</span>
            </div>

            <div className="card">
                <i className={`pi ${PrimeIcons.REFRESH} icon`}></i>
                <span>Заучивание</span>
            </div>

            <div className="card">
                <i className={`pi ${PrimeIcons.FILE} icon`}></i>
                <span>Тест</span>
            </div>

            <div className="card">
                <i className={`pi ${PrimeIcons.SEARCH} icon`}></i>
                <span>Подбор</span>
            </div>

            <div className="card">
                <i className={`pi ${PrimeIcons.BARS} icon`}></i>
                <span>Блоки</span>
            </div>
        </div>
    );
};

export default UserHomePage;
