import React, { ReactNode } from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
} from "react-admin";

type Props = {
  title: string;
  body: string;
  publishedAt: Date;
  children?: ReactNode;
};

const UserList = (props: Props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source={"id"} />
        <TextField source={"name"} />
        <EmailField source={"email"} />
        <EditButton basePath={"/users"} />
        <DeleteButton basePath={"/users"} />
      </Datagrid>
    </List>
  );
};

export default UserList;
