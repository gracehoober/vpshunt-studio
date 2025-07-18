import { NavBar } from "./NavBar";
import { Button, Box } from "@mui/material";
import { useState } from 'react';
import { NewEntry } from "./NewEntry";
import React from "react";


const Dashboard: React.FC = () => {
    const [isNewEntryOpen, setIsNewEntryOpen] = useState(false);
    return (
        <Box sx={styles.container}>
            <NavBar />
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
    }
};
export { Dashboard };
