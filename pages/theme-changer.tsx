import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import { Layout } from "../components/layouts";
import { GetServerSideProps } from "next";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Cookies from "js-cookie";
import axios from "axios";

interface Props {
  theme: string;
}

const ThemeChangerPage = ({ theme }: Props) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value;

    console.log({ selectedTheme });

    setCurrentTheme(selectedTheme);
    Cookies.set("theme", selectedTheme);
  };

  const onClickRes = async () => {
    const { data } = await axios.get("/api/hello");
    console.log({ data });
  };

  useEffect(() => {
    console.log("Cookies", Cookies.get("theme"));
  }, []);

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup value={currentTheme} onChange={onThemeChange}>
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="Light"
              />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="Custom"
              />
            </RadioGroup>
          </FormControl>
          <Button onClick={onClickRes}>Solicitud</Button>
        </CardContent>
      </Card>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = "light", name = "No name" } = req.cookies;

  const validThemes = ["light", "dark", "custom"];

  return {
    props: {
      theme: validThemes.includes(theme) ? theme : "dark",
      name,
    },
  };
};

export default ThemeChangerPage;
