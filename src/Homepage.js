import React from "react";
import Header from "./components/header/Header";
import { DefaultFooter } from "./components/footer/Footer.stories";
import { LeftAligned } from "./components/typoGraphy/Typography.stories";
import BannerImage from "./assets/pizza.jpeg"
import { Secondary } from "./components/button/Button.stories";
import { VerticalCard } from "./components/card/Card.stories";
import { HorizontalCard } from "./components/card/Card.stories";
import { ContactUs } from "./components/form/Form.stories";
import "./Homepage.css"

function Homepage() {
  return (

  //  Header section
    <div className="pizza-shop" >
      <Header></Header>
      <div id="pizza-shop-home" data-testid="pizza-shop-home">
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <LeftAligned></LeftAligned>
          <Secondary />
        </div>
      </div>

  {/* //  Menu list */}
      <div className="container mt-5">
        <h1 className="menu" > Menu List</h1>
        <div className="row">
          <div className="col-md-4">
            <VerticalCard />
          </div>

          <div className="col-md-4">
            <VerticalCard />
          </div>

          <div className="col-md-4">
            <VerticalCard />
          </div>
        </div>
      </div>

  {/* //  Custom pizza(horizontal card) */}
         <div className="container mt-5">
        <h1 className='horizontal-card-heading'>Custom Pizza</h1>
        <div className="horizontal-card-holder">
          <HorizontalCard />
        </div>
      </div>


      {/* Form */}
      <div className='row g-0'>
        <div className='col-sm-2'>
        </div>
        <div className='col-sm-8'>
          <ContactUs />
        </div>
        <div className='col-sm-2'>
        </div>
        </div>     
      </div>

      {/* footer */}
      <DefaultFooter />
    </div>

  )
}

export default Homepage