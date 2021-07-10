import React, { ReactNode } from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

type Props = {
  title: string;
  body: string;
  publishedAt: Date;
  children?: ReactNode;
};

const PostEdit = (props: Props) => {
  return (
    <Edit title={"Edit a Post"} {...props}>
      <SimpleForm>
        <TextInput disabled source={"id"} />
        <TextInput source={"title"} />
        <TextInput multiline source={"body"} />
        <DateInput label={"Published"} source={"publishedAt"} />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
