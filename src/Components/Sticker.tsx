import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { customers, successarrow } from '../Assets/Images'

export default function Sticker(props: any) {
    return (
        <div>
            <Card className="card">
                <Box>
                    <Typography component="h5" variant="h6" className="card-head">{props.heading}</Typography>
                </Box>
                <Box className="card-content">
                    <Box className="card-data">
                        <Box>
                            <Typography component="h5" variant="h6" className="card-num">{props.num}</Typography>
                        </Box>
                        <Box className="column-stat">
                            <Typography component="h6" variant="body1" className={props.class}><img src={props.arrow} alt="" /> {props.percentage}</Typography>
                            <Typography component="h6" variant="body2" className="month">Since Last Month</Typography>
                        </Box>
                    </Box>
                        <img src={props.cardimg} alt="" className='img-fluid sticker-img'/>
                </Box>
            </Card>
        </div>
    )
}
