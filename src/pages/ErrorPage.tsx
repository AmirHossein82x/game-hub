import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Box padding={5}>
        <Heading>Opps</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exists!"
            : "An unexpected error occurred!"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
