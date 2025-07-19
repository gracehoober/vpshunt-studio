import { NavBar } from "./NavBar";
import { Button, Box } from "@mui/material";
import Grid from '@mui/material/Grid';
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
            <Grid container rowSpacing={1} columnSpacing={1}>
                {headers.map((key) => (
                    <Grid key={key}>
                        {key}
                    </Grid>
                ))}
                {displayData.map(()=>(
                    <Grid></Grid>
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
