import React from "react";
import { Card, Avatar, Skeleton } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import PlaceItems from "./PlaceItems";
import { useState } from "react";
const { Meta } = Card;

const PlaceList = ({ items }) => {
  const [loading, setLoading] = useState(true);
  const onChange = (checked) => {
    setLoading(!checked);
  };
  if (items.length === 0) {
    return (
      // If there is no Place this code will render

      //   <Card
      //     style={{
      //       width: 300,
      //       marginTop: 16,
      //     }}
      //     actions={[
      //       <SettingOutlined key="setting" />,
      //       <EditOutlined key="edit" />,
      //       <EllipsisOutlined key="ellipsis" />,
      //     ]}
      //   >
      //     <Skeleton loading={loading} avatar active>
      //       <Meta
      //         avatar={
      //           <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
      //         }
      //         title="Card title"
      //         description="This is the description"
      //       />
      //     </Skeleton>
      //   </Card>
      <h1 style={{ textAlign: "center" }}>No Places Yet, Maybe Create One ?</h1>
    );
  }
  return (
    <>
      {items.map((place) => {
        return (
          <PlaceItems
            key={place.id}
            id={place.id}
            image={place.imageUrl}
            title={place.id}
            description={place.description}
            creatorId={place.creator}
            coordinates={place.location}
            address={place.address}
          />
        );
      })}
    </>
  );
};

export default PlaceList;
