import Head from "next/head";
import { Container, Typography, Button } from "@material-ui/core";

function Introduction() {
  return (
    <div>
      <Head>
        <title>My Portfolio - Introduction</title>
      </Head>
      <Container maxWidth="sm">
        <Typography variant="h1" align="center" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="body1" paragraph>
          Hi there! My name is [Your Name] and I am a [Your Profession]. I am
          passionate about [Your Passion or Interest] and I love creating [Your
          Products or Services].
        </Typography>
        <Typography variant="body1" paragraph>
          On this website, you'll find a collection of my recent projects,
          experiences, and skills. I hope you'll enjoy browsing through my work
          and getting to know me better!
        </Typography>
        <Typography variant="body1" paragraph>
          If you're interested in working together or just want to say hi,
          please don't hesitate to get in touch with me.
        </Typography>
        <Button variant="contained" color="primary" href="/contact">
          Get in Touch
        </Button>
      </Container>
    </div>
  );
}

export default Introduction;
