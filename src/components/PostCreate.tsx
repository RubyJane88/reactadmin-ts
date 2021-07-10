import React, { ReactNode } from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

type Props = {
  title: string;
  body: string;
  publishedAt: Date;
  children?: ReactNode;
};

const PostCreate = (props: Props) => {
  return (
    <Create title={"Create a Post"} {...props}>
      <SimpleForm>
        <TextInput source={"title"} />
        <TextInput multiline source={"body"} />
        <DateInput label={"Published"} source={"publishedAt"} />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
