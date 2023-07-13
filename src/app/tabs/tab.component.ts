import { Component, Input } from '@angular/core';
import { Tab } from './tab';

@Component({
  selector: 'app-tabs',
  templateUrl: './tab.component.html'
})
export class TabsComponent {
    changeTab(index: number) {
    this.tabs = this.tabs.map((tab, i) => i === index ? { ...tab, active: true } : { ...tab, active: false });
  }
  tabs: Tab[] = [
    {
      title: `<h2>Weather</h2> <p>Weather insight to empower business brilliance</p>`,
      active: true,
      content: `<div class="tab-heading">
                  <h3>Weather insight to empower business brilliance</h3>
                </div>
                <div class="tab-data">
                  <div class="tab-row">
                    <div class="tab-text">
                      <p>Weather intelligence provides businesses with accurate geospatial and meteorological data.
                        Cutting-edge solutions transform daily operations through <strong>Real-time data historical
                          trends,
                          weather forecasts,</strong> and <strong>alerts</strong>, enabling data-driven decision-making
                        and strategic optimization. 
                        Accessing AI-driven insights for a specific location reveals valuable insights to mitigate risk
                        and adapt to changing weather conditions.</p>
                    </div>
                    <div>
                      <img src="../assets/images/tab-1.jpg" alt="">
                    </div>
                  </div>
                  <div class="tab-card">
                    <div class="card-row">
                      <div class="card-col">
                        <h4>Current</h4>
                        <p>Access <strong>accurate weather data</strong> at regular intervals to optimize operations for
                          varying weather
                          conditions.</p>
                      </div>
                      <div class="card-col">
                        <h4>Historical</h4>
                        <p>With extensive satellite-monitored historical weather data spanning <strong>30 years</strong>
                          gain valuable
                          insights, predict trends, and make informed decisions.</p>
                      </div>
                    </div>
                    <div class="card-row">
                      <div class="card-col">
                        <h4>Forecast</h4>
                        <p>Enhance preparedness and maximize opportunities by <strong>next 10 days</strong> forecast data
                          with detailed
                          <strong>daily outlooks</strong> and <strong>hourly data.</strong>
                        </p>
                      </div>
                      <div class="card-col">
                        <h4>Alerts</h4>
                        <p>Understand the <strong>potential impact of incoming weather risks</strong> on a specific
                          location and take
                          proactive measures to minimize disruption. </p>
                      </div>
                    </div>
                  </div>
                </div>`
    },
    {
      title: `<h2>Climate</h2><p>Navigate business challenges with climate analytics</p>`,
      active: false,
      content: `<div class="tab-heading">
                  <h3>Navigate business challenges with climate analytics</h3>
                </div>
                <div class="tab-data">
                  <div class="tab-row">
                    <div class="tab-text">
                      <p>Provides <strong>accurate wind and solar data, historical trends,</strong> and
                        <strong>forecasts.</strong> Get solar irradiance
                        indices for quantifying the solar radiation reaching the Earth's surface and the UV Index for
                        understanding its impact. <strong>Real-time</strong> and <strong>seasonal & sub-seasonal
                          rainfall</strong> information helps
                        optimize irrigation, crop management, and parametric insurance products.
                      </p>
                    </div>
                    <div>
                      <img src="../assets/images/tab-2.png" alt="">
                    </div>
                  </div>
                </div>`
    },
    {
      title: `<h2>Maps</h2><p>Geo-enable business for success</p>`,
      active: false,
      content: `<div class="tab-heading">
                  <h3>Tap into mapping technology to maximize profits</h3>
                </div>
                <div class="tab-data">
                  <div class="tab-row">
                    <div>
                      <img src="../assets/images/tab-3.png" alt="">
                    </div>
                    <div class="tab-text">
                      <p>Advanced map-based solution simplifies <strong>visualization and analysis of vegetation indices,
                          moisture
                          level,</strong> and many more to enable easy farm health determination. Leveraging the latest
                        and
                        historical data provides valuable field management insights.</p>
                      <p>Using <strong>crop-specific</strong> yield information based on seasonal variations for specific
                        locations, to
                        efficiently plan farming activities, risk management, and insurance coverage. Identifying the
                        <strong>nearest water bodies</strong> to resolve irrigation-related challenges.
                      </p>
                    </div>
                  </div>
                </div>`
    },
    {
      title: `<h2>Geospatial</h2><p>Navigate business challenges with climate analytics</p>`,
      active: false,
      content: `<div class="tab-row flexCol">
                  <div>
                    <img src="../assets/images/tab-4.png" alt="">
                  </div>
                  <div class="tab-text">
                    <p>Utilizing a location vector map solution provides accurate and detailed information for
                      geospatial analysis. Leveraging <strong>reverse geocoding</strong> allows for gathering
                      <strong>accurate coordinate-based
                        information.</strong> Improve decision-making, optimize resource allocation, and inventory
                      management for
                      increased overall geospatial operation efficiency in various sectors.
                    </p>
                    <p>Government programs and subsidies can take advantage of data-driven pricing, market expansion,
                      and product distribution. <strong>Identify patterns, correlations, and trends to enable targeted
                        services.</strong>
                    </p>
                  </div>
                </div>
              </div>`
    },
    {
      title: `<h2>Agriculture</h2><p>Revolutionalize agriculture with data-driven insights</p>`,
      active: false,
      content: `<div class="tab-heading">
                  <h3>Revolutionalize agriculture with data-driven insights</h3>
                </div>
                <div class="tab-data">
                  <div class="tab-row">
                    <div class="tab-text">
                      <p>Agriculture Insights gives comprehensive information on <strong>crop monitoring, farm health,
                          soil
                          conditions, and crop yield prediction.</strong> With the help of <strong>artificial intelligence
                          and remote sensing
                          technologies, and satellite imagery.</strong> Researchers and policy makers can use farm and
                        village level
                        data to <strong>analyze trends,</strong> assess impact of interventions and understand specific
                        challenges to
                        optimized agricultural practices.</p>
                    </div>
                    <div>
                      <img src="../assets/images/tab-5.png" alt="">
                    </div>
                  </div>
                  <div class="tab-card">
                    <div class="card-row">
                      <div class="card-col">
                        <h4>Satellite Imaging</h4>
                        <p>Artificial intelligence algorithms are capable of detecting vegetation, irrigation, and stress
                          related issues based on satellite-monitored indices such as <strong>NDWI, NDMI, NDRE, EVI, and
                            many
                            more.</strong></p>
                      </div>
                      <div class="card-col">
                        <h4>Farm Health</h4>
                        <p>Farm health assessment assists in <strong>crop stress identification, growth monitoring and
                            performance
                            evaluation</strong> which helps in making new policies and recommendations by policymakers.
                        </p>
                      </div>
                    </div>
                    <div class="card-row">
                      <div class="card-col">
                        <h4>Farm Score</h4>
                        <p>Farm score offers data on land area, satellite monitoring, soil composition, historical weather
                          and vegetation data that can be used by Banks and other lenders to know <strong>creditworthiness
                            of a
                            farm.</strong></p>
                      </div>
                      <div class="card-col">
                        <h4>Soil Report</h4>
                        <p>Soil reports help in making informed decisions on <strong>soil fertility management,</strong>
                          crop selection,
                          irrigation planning, soil health improvement, land use planning, <strong>risk assessment, and
                            mitigation.</strong></p>
                      </div>
                    </div>
                    <div class="card-row">
                      <div class="card-col">
                        <h4>Yield Prediction</h4>
                        <p>Visualization of crop-specific yields and actual acreage at farm level enables agribusinesses
                          and companies to make business-critical decisions based on <strong>historical and projected
                            yield
                            quantity.</strong></p>
                      </div>
                    </div>
                  </div>
                </div>`
    },
    {
      title: `<h2>Insurance</h2><p>Cutting costs with weather-driven insurance</p>`,
      active: false,
      content: `<div class="tab-heading">
                  <h3>Cutting costs with weather-driven insurance</h3>
                </div>
                <div class="tab-data">
                  <div class="tab-row">
                    <div class="tab-text">
                      <p>Deploying a weather alert data system can help policyholders prepare and <strong>minimize the risk of
                        insurance loss</strong> in order to enhance customer satisfaction. These <strong>weather alerts assist
                        policyholders in avoiding harmful weather events</strong> while enabling insurers to prevent many claims by
                        prioritizing customer safety during adverse weather conditions. </p>
                      <p>Access to accurate, customized weather information services enables insurers to make informed
                        operational decisions, reduce unnecessary costs, and directly <strong>impact revenue.</strong></p>
                    </div>
                    <div>
                      <img src="../assets/images/tab-6.png" alt="">
                    </div>
                  </div>
                </div>`
    }
  ];
}
