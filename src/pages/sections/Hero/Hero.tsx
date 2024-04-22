import { styled, Grid, Container, Typography, Button, Box } from '@mui/material'
import React from 'react'
import Avatar from '../../../assets/img/avatar.jpg'
import Download from '@mui/icons-material/DownloadForOffline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StyledButton from '../../../components/styled/StyledButton';
import AnimatedBackground from '../../../components/AnimatedBackground/AnimatedBackground';



function Hero() {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        display: 'flex',
        alignItems: 'center'
    }))

    const StyledImg = styled("img")(({ theme }) => ({
        width: "80%",
        border: `4px solid ${theme.palette.primary.contrastText}`,
        borderRadius: '50%',
    }))

    return (
        <StyledHero>

            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Box position='relative' textAlign='center' justifyContent='center'>
                            <StyledImg src={Avatar} />
                        </Box>

                        <Box position='absolute' width='100%'>
                            <AnimatedBackground />
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography color='primary.contrastText' variant='h1' textAlign='center' >Ari SantS Dev</Typography>
                        <Typography color='primary.contrastText' variant='h2' textAlign='center' >Desenvolvedor Front-End e Designer</Typography>
                        <Grid container display='flex' justifyContent='center' spacing={2}>
                            <Grid item xs={12} md={4} display='flex' justifyContent='center'>

                                <StyledButton>
                                    <Download />
                                    <Typography>Download CV</Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={4} display='flex' justifyContent='center'>
                                <StyledButton>
                                    <WhatsAppIcon />
                                    <Typography>Entre em contato</Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>


                    </Grid>
                </Grid>
            </Container>

        </StyledHero>
    )
}

export default Hero