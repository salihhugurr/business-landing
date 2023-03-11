import {
  Box,
  useTheme,
  Typography,
  useMediaQuery,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import contact from "../../assets/contact.svg";
import contactDark from "../../assets/contactDark.svg";
import { Send } from "@mui/icons-material";
import {Helmet} from "react-helmet"

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    head: "",
    message: "",
  });
  const [handler, setHandler] = useState({
    open: false,
    status: "",
  });
  const theme = useTheme();
  const { t } = useTranslation();
  const isNonMobile = useMediaQuery("(min-width: 600px");

  const handleClose = () => {
    setHandler({
      open: false,
      status: 200,
    });
  };

  const sendEmail = () => {
    emailjs
      .send("service_7z9tn44", "template_8jwbg3z", message, "RxznIEykdmR8slFoQ")
      .then((result) => {
        setHandler({
          open: true,
          status: result.status,
        });
        if (result.status === 200) {
          setMessage({
            name: "",
            email: "",
            head: "",
            message: "",
          });
        }
      });
  };
  return (
    <Box
      flexDirection={isNonMobile ? "row" : "column"}
      sx={{ display: "flex", minHeight: "100%" }}
    >
      <Helmet>
        <title>{t("Contact")}</title>
        <meta name={t("Contact")} description="Peglad iletişim"/>
      </Helmet>
      <Box
        flexDirection={"column"}
        gap={4}
        marginX={2}
        sx={{ display: "flex", flex: 1, alignSelf: "center" }}
      >
        <Typography
          color={theme.palette.secondary[200]}
          textAlign={"center"}
          fontWeight={"bold"}
          fontSize={isNonMobile ? 20 : 14}
          marginTop={2}
        >
          {t("writeUs")}
        </Typography>
        <Box marginTop={2} gap={2} sx={{ display: "flex" }}>
          <TextField
            sx={{ display: "flex", flex: 1 }}
            value={message.name}
            onChange={(e) =>
              setMessage((prev) => {
                return {
                  ...prev,
                  name: e.target.value,
                };
              })
            }
            id="name"
            label={t("Name")}
            variant="outlined"
          />
          <TextField
            sx={{ display: "flex", flex: 1.2 }}
            value={message.email}
            onChange={(e) =>
              setMessage((prev) => {
                return {
                  ...prev,
                  email: e.target.value,
                };
              })
            }
            id="email"
            label={t("Email")}
            variant="outlined"
          />
        </Box>
        <TextField
          sx={{ display: "flex", flex: 1 }}
          value={message.head}
          onChange={(e) =>
            setMessage((prev) => {
              return {
                ...prev,
                head: e.target.value,
              };
            })
          }
          id="head"
          label={t("Head")}
          variant="outlined"
        />
        <TextField
          sx={{ display: "flex", flex: 1, height: "100%" }}
          id="message"
          value={message.message}
          onChange={(e) =>
            setMessage((prev) => {
              return {
                ...prev,
                message: e.target.value,
              };
            })
          }
          multiline
          rows={10}
          label={t("Message")}
          variant="outlined"
        />

        <Button
          onClick={sendEmail}
          sx={{ width: "90%", alignSelf: "center", padding: 1.5 }}
          variant="contained"
          endIcon={<Send />}
        >
          {t("Send")}
        </Button>
      </Box>
      <Box
        marginY={!isNonMobile ? 10 : 0}
        sx={{ display: "flex", flex: 1, justifyContent: "center" }}
      >
        <img
          src={theme.palette.mode === "dark" ? contactDark : contact}
          alt={"contact"}
          style={{
            width: "80%",
            height: "80%",
          }}
        />
      </Box>
      <Snackbar
        open={handler.open}
        autoHideDuration={1000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={handler.status === 200 ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {handler.status === 200 ? t("Success") : "Error"}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
