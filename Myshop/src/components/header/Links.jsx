import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import Box from "@mui/material/Box";
import { Container, IconButton, Paper, Stack, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Links = ({title}) => {
  return (
    <Box
      className=".border"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        ":hover .show-when-hover": { display: "block" },
      }}
    >
      <Typography variant="body1">{title}</Typography>
      <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />
      <Paper
        className="show-when-hover"
        sx={{
          position: "absolute",
          top: "100%",
          minWidth: "170px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "none",
        }}
      >
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>

            <ListItem  sx={{ ":hover #sub-link": {display: "block"}, position:"relative"}}  disablePadding   >
              <ListItemButton>
                <ListItemText primary="products" />
                <Box flexGrow={1} />
                <KeyboardArrowRightOutlined fontSize="small" />
              </ListItemButton>
              <Box id="sublink" 
              sx={{position:"absolute", top:0, left:"100%"}}>
                <Paper sx={{ml:1, minWidth: 150, display:"none"}}>
                  <nav aria-label="secondary mailbox folders">
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText primary="Trash" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                          <ListItemText primary="Spam" />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </nav>
                </Paper>
              </Box>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Orders" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Paper>
    </Box>
  );
};

export default Links;
