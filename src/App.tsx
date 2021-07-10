import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import PostList from "./components/PostList";
import PostCreate from "./components/PostCreate";
import PostEdit from "./components/PostEdit";
import UserList from "./components/UserList";
import UserCreate from "./components/UserCreate";
import UserEdit from "./components/UserEdit";

function App() {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000")}>
      <Resource
        name={"posts"}
        list={PostList as any}
        create={PostCreate as any}
        edit={PostEdit as any}
      />
      <Resource
        name={"users"}
        list={UserList as any}
        create={UserCreate as any}
        edit={UserEdit as any}
      />
    </Admin>
  );
}

export default App;
