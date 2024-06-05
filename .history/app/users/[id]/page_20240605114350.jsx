"use client"
import { useParams } from "next/navigation";
import React from "react";

function Users() {
  const { id } = useParams();
  return <div>Users</div>;
}

export default Users;
