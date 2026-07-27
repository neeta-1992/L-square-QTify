import { useState } from 'react';
import SectionCard from "../SectionCard/SectionCard";
import styles from "./Section.module.css";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Section({ label, albums }) {
    const [expanded, setExpanded] = useState(true);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }
    return (
        <div className={styles.section}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container direction="row"
                    sx={{
                        justifyContent: "space-between"
                    }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{
                        color: "var(--color-white)",
                        fontWeight: "600",
                        fontSize: "20px",
                        marginTop: "10px",
                        textAlign: "left",
                    }}>
                        {label}
                    </Typography>
                    <Button onClick={handleExpandClick} variant="text" sx={{ color: "var(--color-primary)", textTransform: "none", fontWeight: "600", fontSize: "20px" }}>
                        {expanded ? 'Collapse' : 'Show all'}
                    </Button>
                </Grid>
            </Box>
            <Box sx={{
                flexGrow: 1,
                display: expanded ? 'block' : 'none',
            }}>
                <Grid container spacing={3}>
                    {albums.map((album) => (
                        <Grid key={album.id} size={2}>
                            <SectionCard album={album} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}