/* eslint-disable react/no-children-prop */
import Head from "next/head";
import { FC, ReactNode } from "react";
import { Navbar } from "../ui";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head children={undefined}>{/* Contenido de Head aquí */}</Head>
      <nav>
        <Navbar />
      </nav>
      <main style={{ padding: "20px 50px" }}>{children}</main>
    </>
  );
};
