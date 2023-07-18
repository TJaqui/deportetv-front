import React from "react";
import Multistep from "./AddSportForm";
import Layout from "@/components/Layout";
import { getSession } from "next-auth/react";
function addSport() {
  return (
    <Layout>
      <Multistep />
    </Layout>
  );
}

export default addSport;

export async function getServerSideProps({req}){
  const session = await getSession({req})
  
  if (session) {
    if (session.user.role !== "admin") {
      return {
        redirect: {
          destination: "/",
        },
      };
    }
  }
  return{
    props:{session}
  }
}