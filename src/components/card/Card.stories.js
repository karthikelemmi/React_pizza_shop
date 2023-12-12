import React from 'react';
import CardSb from './Card';
import { VerticalImage } from '../images/Image.stories';
import { HorizontalImage } from '../images/Image.stories';
import { Secondary } from '../button/Button.stories';
import { CenterAligned } from '../typoGraphy/Typography.stories';
import { RightAligned } from '../typoGraphy/Typography.stories';
import './Card.css';
import { Col, Container, Row, Card } from 'react-bootstrap'
import { Primary } from '../button/Button.stories';
export default {
    title: "CardSb",
    component: CardSb
}

export const VerticalCard = () =>
    <CardSb variant="verticalimage">

        <div className="card">
            <VerticalImage />
            <div className="card-body">
                <h4 className="card-title">Veg Supreme Pizza</h4>
                <h6 className='card-price'>12.00$</h6>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,adipiscing elit, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card-footer">
            <div className="container d-flex justify-content-center align-items-center" >

                <Primary />
            </div>
            </div>
        </div>

    </CardSb>

export const HorizontalCard = () =>
    <CardSb variant='horizontalimage'>

        <div className='card' style={{ border: "none", backgroundColor: "beige" }}>
            <div className='row g-0'>
                <div className='col-md-6'>
                    <HorizontalImage />
                </div>
                <div className='col-md-6'>
                    <CenterAligned />
                    <div className="container d-flex justify-content-center align-items-center" >
                        <Primary />
                    </div>
                </div>
            </div>
        </div>

    </CardSb>