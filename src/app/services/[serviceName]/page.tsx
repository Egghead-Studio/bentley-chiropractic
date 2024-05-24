'use client'
import React from 'react';
import {useParams} from "next/navigation";
import {Nav} from "@/components/Nav/Nav";

export default function ServicePage() {
  const {serviceName} = useParams();
  return (
    <main>
      <h1>
        {serviceName}
      </h1>
    </main>
  );
}
