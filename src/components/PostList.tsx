import React, { ReactNode } from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";

type Props = {
  title: string;
  body: string;
  publishedAt: Date;
  children?: ReactNode;
};

const PostList = (props: Props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source={"id"} />
        <TextField source={"title"} />
        <DateField source={"publishedAt"} />
        <EditButton basePath={"/posts"} />
        <DeleteButton basePath={"/posts"} />
      </Datagrid>
    </List>
  );
};

export default PostList;
