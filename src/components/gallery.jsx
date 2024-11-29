import React from "react";
import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";

export const Gallery = ({ rides }) => {
    return (
        <Box
            elevation={3}
            sx={{
                padding: 4,
                margin: "0 auto",
                marginTop: 4,
                maxWidth: "1000px",
            }}
            id="portfolio"
        >
            <List sx={{width: "100%"}}>
                {rides.length === 0 ? (
                    <Box>

                        <Typography
                        variant="h6"
                        sx={{
                            fontSize: "1.8rem", // Larger font size for no rides message
                            textAlign:"center"
                        }}
                    >
                        A student will eventually offer a ride, and they will all be listed here!
                    </Typography>

                    </Box>
                ) : (
                    rides.map((ride, index) => (
                        <ListItem
                            key={index}
                            divider
                            sx={{
                                display: "flex",
                                flexDirection: "column", // Stack content vertically
                                alignItems: "center",
                                padding: 3,
                                fontSize: "1.8rem", // Larger overall font size
                            }}
                        >
                            <ListItemText
                                primary={`${ride.name} is offering a ride from ${ride.from}.`}
                                secondary={`Contact: ${ride.phoneNumber} | Seats Available: ${ride.seats}`}
                                primaryTypographyProps={{
                                    fontSize: "1.8rem", // Larger primary text
                                    fontWeight: "bold",
                                    textAlign: "center",
                                }}
                                secondaryTypographyProps={{
                                    fontSize: "1.5rem", // Larger secondary text
                                    textAlign: "center",
                                }}
                            />
                        </ListItem>
                    ))
                )}
            </List>
        </Box>
    );
};
