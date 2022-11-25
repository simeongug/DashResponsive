import { Grid } from '@mui/material'
import React from 'react'
import DashboardContent from '../components/card/DashboardContent'
import PanelCard from '../components/card/PanelCard'
import BarChart from '../components/charts/BarChart'
import ScreenTitle from '../components/screenTitle/ScreenTitle'
import Datatables from '../components/datatables/Datatables'

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
                  card_title='Inquiries'
                  card_icon={<i className="fas fa-home-alt primary_icon round_icon color_primary"></i>}
                  card_info='45,450'
                  last_text='18%'
                />
              </PanelCard>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <PanelCard>
                <DashboardContent
                  card_title='Inquiries'
                  card_icon={<i className="fas fa-home-alt primary_icon round_icon color_primary"></i>}
                  card_info='45,450'
                  last_text='18%'
                />
              </PanelCard>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <PanelCard>
                <DashboardContent
                  card_title='Inquiries'
                  card_icon={<i className="fas fa-home-alt primary_icon round_icon color_primary"></i>}
                  card_info='45,450'
                  last_text='18%'
                />
              </PanelCard>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <PanelCard>
                <DashboardContent
                  card_title='Inquiries'
                  card_icon={<i className="fas fa-home-alt primary_icon round_icon color_primary"></i>}
                  card_info='45,450'
                  last_text='18%'
                />
              </PanelCard>
            </Grid>
          </Grid>

        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <PanelCard>
            {/* <div className="card_title color_secondary d-flex align-items-center justify-content-between">
              <span>
                Revenue
              </span>

            </div> */}
            <div className="h-100">
              <BarChart />
            </div>
          </PanelCard>
        </Grid>
        <Grid item xs={12}>
          <PanelCard>
            <div className="card_title card_light d-flex align-items-center justify-content-between">
              <span>
                Inq. Vs Con.
              </span>

            </div>
          </PanelCard>
        </Grid>
        <Grid item xs={12}>
          <PanelCard>
            <div className="card_title mb-2 card_light d-flex align-items-center justify-content-between">
              <span>
                Recent Inquiries
              </span>

            </div>
            <Datatables />
          </PanelCard>
        </Grid>
      </Grid>
    </>
  )
}

export default Home