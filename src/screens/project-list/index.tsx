import React, { useState, useEffect } from "react";
import { cleanObject, useMount } from "../../utils";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import * as qs from "qs";
import { UseHttp } from "../../utils/http";
import styled from "@emotion/styled";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setlist] = useState([]);
  const [users, setUsers] = useState([]);

  const client = UseHttp();

  useEffect(() => {
    client("projects", { data: cleanObject(param) }).then(setlist);
  }, [param]);

  useMount(() => {
    client("users").then(setUsers);
  });

  return (
    <Container>
      <h2>项目列表</h2>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgb(0, 0, 0, 0.1);
  z-index: 1;
`;
