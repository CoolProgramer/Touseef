import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(4),
  },
  card: {
    maxWidth: 600,
    margin: "auto",
  },
  title: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  body: {
    marginBottom: theme.spacing(4),
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

function IntroductionPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            variant="h4"
            component="h1"
            align="center"
            className={classes.title}
          >
            Hi, I&apos;m Touseef Ahmad
          </Typography>
          <Typography variant="body1" className={classes.body}>
            As a React JS Developer, I have developed a strong proficiency in
            creating high-quality web applications using React and related
            technologies. I am passionate about creating engaging user
            experiences, and I have honed my skills in building responsive UI
            components, implementing state management with Redux, and
            integrating with RESTful APIs. I have a solid understanding of web
            development principles and best practices, and I am committed to
            writing clean, maintainable code. I am a collaborative team player
            who is dedicated to delivering projects on time and within budget.
          </Typography>
          <Button variant="contained" className={classes.button}>
            Contact Me
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default IntroductionPage;
