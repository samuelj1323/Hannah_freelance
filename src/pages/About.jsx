import React from "react";
import { Typography, Box, Stack, Grid, Button } from "@mui/material";
import image from "../assets/coffeeImage.png";
const About = () => {
  return (
    <Box>
      <Stack>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography sx={{ textAlign: "center" }} variant="h4">
              TITLE
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <img
              alt="name"
              style={{ width: 400, paddingLeft: "30%" }}
              src={image}
            />
          </Grid>
          <Grid item xs={8} sx={{ paddingRight: "20%" }}>
            <Typography variant="h5">Hannah Mahan</Typography>
            <Typography>
              Understanding React Components Introduction React is a powerful
              JavaScript library for building user interfaces. It enables
              developers to create reusable UI components, making code more
              efficient and easier to maintain. Understanding how React
              components work is crucial for any developer looking to build
              dynamic and responsive web applications. Core Concepts of React
              React's main philosophy is to build small, reusable components
              that manage their own state. These components can be nested within
              each other, allowing for complex applications to be built out of
              simple building blocks. This modular approach not only simplifies
              the development process but also enhances the overall
              maintainability of the codebase. JSX: A Syntax Extension for
              JavaScript JSX is a React extension that allows you to write
              HTML-like syntax within your JavaScript code. It's a powerful
              feature that makes it easier to write and understand the structure
              of your React components. JSX is transpiled into standard
              JavaScript, which means you can use it alongside your existing
              JavaScript logic without any issues. State and Props in React
              State and props are two core concepts of React that help manage
              data within an application. The state is a data structure that
              holds information about the component. It can change over time,
              usually in response to user actions or network responses. Props,
              on the other hand, are a way of passing data from parent to child
              components, helping to keep components reusable and encapsulated.
              Lifecycle Methods React components have several lifecycle methods
              that are called at different stages of a component's life in the
              application. These include componentDidMount, componentDidUpdate,
              and componentWillUnmount, among others. Understanding these
              methods is crucial for managing side effects, such as API calls or
              manual DOM manipulations. Hooks: A New Addition to React With the
              introduction of hooks in React 16.8, functional components now
              have more power and flexibility. Hooks like useState and useEffect
              allow you to use state and lifecycle features in functional
              components, making them just as powerful as class components.
              Conclusion React is an incredibly powerful tool for web
              development, offering a range of features and benefits that make
              creating dynamic user interfaces simpler and more efficient. By
              understanding its core concepts, developers can create
              sophisticated and responsive web applications with ease.
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};
export default About;
