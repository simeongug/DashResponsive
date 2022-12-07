import { Grid } from '@mui/material'
import React from 'react'
import DashboardContent from '../components/card/DashboardContent'
import PanelCard from '../components/card/PanelCard'
// import BarChart from '../components/charts/BarChart'
// import BarChart2 from '../components/charts/BarChart2'
// import BarChart3 from '../components/charts/BarChart3'
import ScreenTitle from '../components/screenTitle/ScreenTitle'
import Datatables from '../components/datatables/Datatables'
import "react-widgets/styles.css";
import Calendar from "react-widgets/Calendar";
import TimeInput from "react-widgets/TimeInput";
import Apitest from '../Apitest.js';
import Crypto from '../CryptoChart/CryptoETHBTC.js';
import Convert from '../Convertisseur/Convert.js';
import MeteoWid from '../Meteo/MeteoWid.js';
import Clock1 from '../Clock1';
import GetAPI from '../REST_API/GetAPI.js';




<TimeInput style={{ width: "auto" }} />;

const Home = () => {

  return (

    <>
      <ScreenTitle pageTitle='Dashboard' />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <PanelCard>
                <DashboardContent
                  card_title='Calendrier'
                />     <Calendar></Calendar>
              </PanelCard>
            </Grid>


            <Grid item xs={12} sm={12} md={6}>


              <PanelCard>
                <DashboardContent
                  card_title='Heure'
                />

                <Clock1 />

              </PanelCard>
            </Grid>
            {/* 
            <Grid item xs={12} sm={12} md={1}>
              <PanelCard>
                <DashboardContent
                  card_title='ApiTest'
                /> <Apitest></Apitest>

              </PanelCard>
            </Grid> */}
            <Grid item xs={15} sm={15} md={12}>
              <PanelCard>
                <DashboardContent card_title='Convertisseur devise'
                > </DashboardContent>
                <Convert></Convert>
              </PanelCard>
            </Grid>
          </Grid>

        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <PanelCard>
            <DashboardContent card_title='Cours et volume de ETH et BTC'>
            </DashboardContent>
            <div className="h-100">
              {/* <BarChart /> */}
              <Crypto />
            </div>
          </PanelCard>
        </Grid>

        <Grid item xs={12}>

          <PanelCard>
            WOUAH ! Météo en temps réel ! En plus l'image change quand on rafraichit la page
            <MeteoWid />
          </PanelCard>

        </Grid>


        <Grid item xs={12}>
          <PanelCard>
            <div className="card_title mb-2 card_light d-flex align-items-center justify-content-between">
              <span>
                Clients Récents
              </span>
            </div>
            <GetAPI />
          </PanelCard>
        </Grid>
      </Grid>²
    </>
  )
}

export default Home