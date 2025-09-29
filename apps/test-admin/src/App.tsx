import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TestEntityList } from "./testEntity/TestEntityList";
import { TestEntityCreate } from "./testEntity/TestEntityCreate";
import { TestEntityEdit } from "./testEntity/TestEntityEdit";
import { TestEntityShow } from "./testEntity/TestEntityShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Test"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TestEntity"
          list={TestEntityList}
          edit={TestEntityEdit}
          create={TestEntityCreate}
          show={TestEntityShow}
        />
      </Admin>
    </div>
  );
};

export default App;
