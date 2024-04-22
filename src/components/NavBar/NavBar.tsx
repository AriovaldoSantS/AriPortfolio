import { AppBar, MenuItem, Toolbar, styled } from '@mui/material'
import React from 'react'

function NavBar() {
    const StyledToobar = styled(Toolbar)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-evenly'



    }))

    return (
        <AppBar position='absolute'>
            <StyledToobar>
                <MenuItem>Sobre mim</MenuItem>
                <MenuItem>Projetos</MenuItem>
                <MenuItem>Contatos</MenuItem>
            </StyledToobar>
        </AppBar>
    )
}

export default NavBar