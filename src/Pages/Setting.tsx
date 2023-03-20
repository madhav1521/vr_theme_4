import { ThemeProvider } from '@emotion/react'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import { myTheme } from '../myTheme'

export default function Setting() {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <div className="main-container">
          <div className="leftsection ">
            <Sidebar />
          </div>
          <div className="rightsection ">
            <Header />
            <div className="main-content">
            <Grid container>
                <Typography component="h2" variant="h3" className="page-title">Settings</Typography>
              </Grid>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}
