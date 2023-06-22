"use client";

import { useEffect, useState } from "react";
import styles from "./card.module.css";

interface OrderCardProps {
  cardTitle: string;
  subTitle: string;
  orders: OrderListItemProps[];
}

const OrderCard = ({
  cardTitle: title,
  subTitle: subTitle,
  orders,
}: OrderCardProps) => {
  const [orderList, setOrderList] = useState([] as OrderListItemProps[]);

  useEffect(() => {
    setOrderList([
      { header: "John Doe", subHeader: "379 Front Fender" },
      { header: "Jane Doe", subHeader: "Bunk Skirts" },
    ]);
  }, []);

  return orderList.map((order, index) => (
    <div key={index} className={styles.container}>
      <h1 className={styles.title}>{order.header}</h1>
      <h3 className={styles.subTitle}>{order.subHeader}</h3>
      <ul className="list-none"></ul>
    </div>
  ));
};

export interface OrderListItemProps {
  header: string;
  subHeader: string;
  extaInfo: string[];
}

const OrderListItem = ({ header, subHeader, ...props }: OrderListItemProps) => {
  return (
    <>
      <div className={styles.orderHeader}>{header}</div>
      <div className={styles.orderSubHeader}>{subHeader}</div>
      <div className={styles.orderInfo}></div>
    </>
  );
};

export default OrderCard;
