import React, { ReactNode } from "react";
import { Edit, SimpleForm, TextInput, EmailField } from "react-admin";

type Props = {
  title: string;
  body: string;
  publishedAt: Date;
  children?: ReactNode;
};

const UserEdit = (props: Props) => {
  return (
    <Edit title={"Edit a Post"} {...props}>
      <SimpleForm>
        <TextInput disabled source={"id"} />
        <TextInput source={"name"} />
        <TextInput source={"email"} />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
