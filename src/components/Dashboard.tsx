import { NavBar } from "./NavBar";
import { Button, Box, Grid, Typography, Paper } from "@mui/material";
import { useState } from 'react';
import { NewEntry } from "./NewEntry";
import React from "react";
import { useEffect } from "react";
import { fetchUserShuntData } from "../api/shunts";
import type { DashboardData } from "../types";


const Dashboard: React.FC = () => {
    const [isNewEntryOpen, setIsNewEntryOpen] = useState(false);
    const [dashboardData, setDashboardData] = useState<DashboardData[]>([]);

    const fetchDashboardData = () => {
        fetchUserShuntData()
            .then((data) => setDashboardData(data))
            .catch((err) => console.log(err))
            .finally(() => {
                console.log('useEffect ran');
            });
    };
    const headers = dashboardData.length > 0 ? Object.keys(dashboardData[0]) : [];
    const displayData = dashboardData.length > 0 ? dashboardData : [];

    useEffect(() => fetchDashboardData(), []);

    return (
        <Box sx={styles.container}>
            <NavBar />
            {/* <Grid container rowSpacing={1} columnSpacing={1}>
                {headers.map((key) => (
                    <Grid key={key}>
                        {key}
                    </Grid>
                ))}
                {displayData.map(()=>(
                    <Grid></Grid>
                ))}
            </Grid> */}

            <Grid container spacing={2}>
                {dashboardData.map((entry, idx) => (
                    <Grid key={idx}>
                        <Paper elevation={3}>
                            {/* User Info */}
                            <Typography variant="h6">
                                {entry.user.patientFirstName} {entry.user.patientLastName}
                            </Typography>
                            <Typography variant="body2">
                                ID: {entry.user.patientId} — DOB: {entry.user.patientDOB?.toLocaleDateString()}
                            </Typography>

                            {/* Active Shunt */}
                            <Box mt={2}>
                                <Typography variant="subtitle1">Active Shunt</Typography>
                                {entry.activeShunt ? (
                                    <Grid container spacing={1}>
                                        <Grid >Model: {entry.activeShunt.shuntModel}</Grid>
                                        <Grid >Serial: {entry.activeShunt.shuntSerialId}</Grid>
                                        <Grid >
                                            Placed: {entry.activeShunt.shuntPlacementDate?.toLocaleDateString()}
                                        </Grid>
                                    </Grid>
                                ) : (
                                    <Typography variant="body2" color="text.secondary">No active shunt</Typography>
                                )}
                            </Box>

                            {/* Shunt History */}
                            <Box mt={2}>
                                <Typography variant="subtitle1">Shunt History</Typography>
                                {entry.shuntHistory.length > 0 ? (
                                    entry.shuntHistory.map((shunt, i) => (
                                        <Grid container spacing={1} key={i} sx={{ mb: 1 }}>
                                            <Grid >Model: {shunt.shuntModel}</Grid>
                                            <Grid >Removed: {shunt.shuntRemovalDate?.toLocaleDateString()}</Grid>
                                            <Grid >Serial: {shunt.shuntSerialId}</Grid>
                                        </Grid>
                                    ))
                                ) : (
                                    <Typography variant="body2" color="text.secondary">No previous shunts</Typography>
                                )}
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <Button
                variant="contained"
                sx={styles.button}
                onClick={() => setIsNewEntryOpen(true)}>
                Add new entry
            </Button>
            {isNewEntryOpen && <NewEntry
                open={isNewEntryOpen}
                onClose={() => setIsNewEntryOpen(false)} />}
        </Box>
    );
};

const styles = {
    container: {
        backgroundColor: 'background.dashboard',
        width: '100vw',
        height: '100vh',
        padding: 4,
    },
    button: {
        color: 'background.paper',
        p: 1,
        m: 4
    },
    gridHeaders: {

    }
};
export { Dashboard };
