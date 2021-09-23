import React, { useEffect, useState } from "react";
import { cleanObject, useMount } from "../../utils";
import { List, Project } from "./list";
import { SearchPanel } from "./search-panel";
import { UseHttp } from "../../utils/http";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProjects } from "../../utils/project";
import { useAsync } from "../../utils/use-async";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  // const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const client = UseHttp();

  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState<null | Error>(null)

  const { run, isLoading, error, data: list } = useAsync<Project[]>();

  // const client = UseHttp();

  useEffect(() => {
    run(client("projects", { data: cleanObject(param) }));

    // setIsLoading(true)
    // client("projects", { data: cleanObject(param) })
    //   .then(setList)
    //   .catch(error => {
    //     setList([])
    //     setError(error)
    //   })
    //   .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line
  }, [param]);

  // const {isLoading, error, data: list} = useProjects()

  useMount(() => {
    client("users").then(setUsers);
  });

  return (
    <Container>
      <h2>项目列表</h2>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List loading={isLoading} users={users || []} dataSource={list || []} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgb(0, 0, 0, 0.1);
  z-index: 1;
`;
