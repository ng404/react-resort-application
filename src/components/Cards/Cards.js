import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import Loading from '../Loading'
import cx from 'classnames'

import CountUp from 'react-countup'
const Cards = ({data:{confirmed,deaths,recovered,lastUpdate}}) => { 
    if(!confirmed){
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        <b>Infected</b>
                        </Typography>
    <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Actice Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card } xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        <b>Recoverd</b>
                        </Typography>
                        <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number Of  Recoviers Of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        <b>Deaths</b>
                        </Typography>
                        <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number Of Deaths cased by COVID-19</Typography>
                    </CardContent>
                </Grid>
                </Grid> 
            
        </div>
    )
}

export default Cards