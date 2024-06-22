import { Button, Typography, styled } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";

function App() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: "skyblue",
    // backgroundColor: theme.palette.otherColor.main,
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  }));

  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        // color="otherColor"
        color="secondary"
        size="small"
      >
        Add New Post
      </Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="success"
        size="small"
      >
        Settings
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, in totam.
      </Typography>

      {/* Writing or copyign the same code again and again is not optimised so we can create our own button component using const */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "skyblue",
          color: "#888",
          margin: 5,
          "&:hover": {
            backgroundColor: "lightblue",
          },
          "&:disabled": {
            backgroundColor: "gray",
            color: "white",
          },
        }}
      >
        My Unique Button
      </Button>
      <Button
        variant="contained"
        disabled
        sx={{
          backgroundColor: "skyblue",
          color: "#888",
          margin: 5,
          "&:hover": {
            backgroundColor: "lightblue",
          },
          "&:disabled": {
            backgroundColor: "gray",
            color: "white",
          },
        }}
      >
        My Unique Button
      </Button>

      {/* After using const or our custom styling code the result will be */}
      <BlueButton>Custom Button One</BlueButton>
      <BlueButton disabled>Custom Button Two</BlueButton>
    </div>
  );
}

export default App;
