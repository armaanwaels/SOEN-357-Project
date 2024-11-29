import React, { useState } from "react";
import {
    TextField,
    Button,
    Paper,
    Typography,
    Box,
} from "@mui/material";

export const Services = ({ addRide }) => {
    const [formData, setFormData] = useState({
        name: "",
        from: "",
        phoneNumber: "",
        seats: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addRide(formData); // Send data to the parent (App.js)
        setFormData({ name: "", from: "", phoneNumber: "", seats: "" });
    };

    return (
        <Paper
            id="services"
            elevation={3}
            sx={{
                padding: 4,
                borderRadius: 2,
                maxWidth: 900,
                margin: "0 auto",
                color: "#ffffff",
                marginTop: 10,
                fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
            }}
        >
            {/* Section Title */}
            <Typography
                variant="h2"
                sx={{
                    marginBottom: 3,
                    textAlign: "center",
                }}
            >
                Offer a Ride
            </Typography>

            {/* Form */}
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Center align the inputs
                    gap: 2,
                }}
            >
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    sx={{
                        width: "60%", // Reduce input width
                        "& .MuiInputLabel-root": {
                            fontSize: "1.5rem", // Larger label text
                            color: "#ffffff",
                        },
                        "& .MuiInputBase-input": {
                            fontSize: "1.5rem", // Larger input text
                            color: "#ffffff",
                        },
                    }}
                    size="small"
                />
                <TextField
                    label="Departure City"
                    name="from"
                    value={formData.from}
                    onChange={handleChange}
                    sx={{
                        width: "60%",
                        "& .MuiInputLabel-root": {
                            fontSize: "1.5rem",
                            color: "#ffffff",
                        },
                        "& .MuiInputBase-input": {
                            fontSize: "1.5rem",
                            color: "#ffffff",
                        },
                    }}
                    size="small"
                />
                <TextField
                    label="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    sx={{
                        width: "60%",
                        "& .MuiInputLabel-root": {
                            fontSize: "1.5rem",
                            color: "#ffffff",
                        },
                        "& .MuiInputBase-input": {
                            fontSize: "1.5rem",
                            color: "#ffffff",
                        },
                    }}
                    size="small"
                />
                <TextField
                    label="Seats Available"
                    name="seats"
                    value={formData.seats}
                    onChange={handleChange}
                    sx={{
                        width: "60%",
                        "& .MuiInputLabel-root": {
                            fontSize: "1.5rem",
                            color: "#ffffff",
                        },
                        "& .MuiInputBase-input": {
                            fontSize: "1.5rem",
                            color: "#ffffff",
                        },
                    }}
                    size="small"
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        backgroundColor: "#ffffff", // White button
                        color: "#6372ff", // Button text color
                        fontWeight: "bold",
                        fontSize: "1.5rem", // Larger button text
                        width: "fit-content", // Button takes only as much width as needed
                        alignSelf: "center", // Center the button
                        padding: "0.8rem 2.5rem", // Adjust button padding
                        ":hover": {
                            backgroundColor: "#ffffffcc", // Lighter hover effect
                        },
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Paper>
    );
};
