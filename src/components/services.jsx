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
        to: "",
        seats: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addRide(formData); // Send data to the parent (App.js)
        setFormData({ name: "", from: "", to: "", seats: "" }); // Reset form fields
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
                marginTop: 10
            }}
        >
            {/* Section Title */}
            <Typography
                variant="h5"
                sx={{
                    fontWeight: "bold",
                    fontSize: "2rem", // Larger font size for the title
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
                    gap: 2,
                }}
            >
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    size="small" // Smaller input fields
                    InputLabelProps={{
                        style: {
                            color: "#ffffff", // White label text
                            fontSize: "1.2rem", // Larger font size for labels
                        },
                    }}
                    InputProps={{
                        style: {
                            color: "#ffffff", // White input text
                            fontSize: "1.2rem", // Larger font size for input text
                        },
                    }}
                />
                <TextField
                    label="From"
                    name="from"
                    value={formData.from}
                    onChange={handleChange}
                    fullWidth
                    size="small"
                    InputLabelProps={{
                        style: {
                            color: "#ffffff",
                            fontSize: "1.2rem",
                        },
                    }}
                    InputProps={{
                        style: {
                            color: "#ffffff",
                            fontSize: "1.2rem",
                        },
                    }}
                />
                <TextField
                    label="To"
                    name="to"
                    value={formData.to}
                    onChange={handleChange}
                    fullWidth
                    size="small"
                    InputLabelProps={{
                        style: {
                            color: "#ffffff",
                            fontSize: "1.2rem",
                        },
                    }}
                    InputProps={{
                        style: {
                            color: "#ffffff",
                            fontSize: "1.2rem",
                        },
                    }}
                />
                <TextField
                    label="Seats Available"
                    name="seats"
                    value={formData.seats}
                    onChange={handleChange}
                    fullWidth
                    size="small"
                    InputLabelProps={{
                        style: {
                            color: "#ffffff",
                            fontSize: "1.2rem",
                        },
                    }}
                    InputProps={{
                        style: {
                            color: "#ffffff",
                            fontSize: "1.2rem",
                        },
                    }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        backgroundColor: "#ffffff", // White button
                        color: "#6372ff", // Button text color
                        fontWeight: "bold",
                        fontSize: "1.2rem", // Larger font size for button text
                        width: "fit-content", // Button takes only as much width as needed
                        alignSelf: "center", // Center the button
                        padding: "0.5rem 2rem", // Adjust button padding
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

export default Services;
