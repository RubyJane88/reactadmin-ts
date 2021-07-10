import React, { ReactNode } from "react";
import { Create, EmailField, SimpleForm, TextInput } from "react-admin";

type Props = {
  title: string;
  body: string;
  publishedAt: Date;
  children?: ReactNode;
};

const UserCreate = (props: Props) => {
  return (
    <Create title={"Create a User"} {...props}>
      <SimpleForm>
        <TextInput source={"name"} />
        <TextInput source={"email"} />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
