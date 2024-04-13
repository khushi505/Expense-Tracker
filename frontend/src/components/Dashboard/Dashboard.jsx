import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";

const Dashboard = () => {
  return (
    <DashboardStyled>
      <InnerLayout></InnerLayout>
    </DashboardStyled>
  );
};

const DashboardStyled = styled.div``;

export default Dashboard;
