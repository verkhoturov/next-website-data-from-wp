import React from "react";
import Link from "next/link";
import Image from "next/image";
import { H2, Paragraph } from "../common";

import itemImg_1 from "./img/item-1.png";
import itemImg_3 from "./img/item-2.png";
import itemImg_2 from "./img/item-3.png";

import styles from "./index.module.css";

interface ItemProps {
  desc: string | React.ReactNode;
  imgLink: string;
}

const Item: React.FC<ItemProps> = ({ desc, imgLink }) => {
  return (
    <div className={styles.item}>
      <Image
        className={styles.img}
        loader={() => imgLink}
        src={imgLink}
        alt="Dikor catalog"
        width={386}
        height={390}
        layout="responsive"
      />

      <div className={styles.desc}>
        <Paragraph>{desc}</Paragraph>

        <Link href={`/catalog`}>
          <a>Смотреть всю коллекцию</a>
        </Link>
      </div>
    </div>
  );
};

export const ProductCatalog = () => {
  return (
    <>
      <div className={styles.titleWapper}>
        <H2>Каталог продукции</H2>
      </div>

      <div className={styles.inner}>
        <Item
          imgLink={itemImg_1.src}
          desc={
            <>
              Коллекция Premium – <br /> это гипсовые 3D панели в виниловом
              декоративном покрытии
            </>
          }
        />
        <Item
          imgLink={itemImg_2.src}
          desc={
            <>
              Коллекция Shine – <br /> это световые гипсовые 3D панели
            </>
          }
        />
        <Item
          imgLink={itemImg_3.src}
          desc={
            <>
              Коллекция Platinum – <br /> это световые гипсовые
            </>
          }
        />
      </div>
    </>
  );
};