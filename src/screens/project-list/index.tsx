import React, { useState, useEffect } from "react";
import { cleanObject, useMount } from "../../utils";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import * as qs from "qs";
import { UseHttp } from "../../utils/http";

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
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
