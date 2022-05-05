import React from 'react';
import { Link } from 'react-router-dom'

import './AboutUs.css';

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            // input your address and stuff
        <div className='AboutUsPage'>
            <h1 id="AboutUsHeader"> About Domino's Pizza Malaysia </h1>
            <div><img src="images/homepage.jpg" className="homepage" alt="Pizza, but nothing shows up" /></div>
            <div id ="introductionText">
                <p id="introduction">
                Domino's Pizza started with just one store called "DomiNick's" bought by brothers Tom and James Monaghan for $500 in 1960. James traded his half of the business to Tom in 1965, and as sole owner Tom renamed the business Domino's Pizza Inc. In 1978 the 200th Domino's store opened, and things really began to cook. 
                </p>
                <p id="introduction">
                By 1983 there were 1,000 Domino's stores, and in the same year Domino's opened its first international store in Winnipeg, Canada, followed by its first store on the Australasian continent in Queensland, Australia in the same year. By 1989 Domino's had 5,000 stores in operation, making it the fastest-growing pizza company in the world, with stores in the UK, Japan, and South America. 
                </p>
                <p id="introduction">
                As at Q2 2017, Domino’s Pizza Malaysia is the largest Domino’s market in Southeast Asia and fifth largest in Asia Pacific. Established in 1997, Domino’s Malaysia is managed by master franchise holder, Dommal Food Services Sdn Bhd. To date, there are more than 240 Domino’s Pizza stores in the country. 
                </p>
                <p id="introduction">
                At Domino’s Pizza, we take PRIDE in our commitment to enrich the lives of our customers, employees, partners, shareholders and communities. As one of the most lovable brands in Malaysia, we will go the extra mile for your smile as well as uphold our culture to ‘sell more pizza, have more fun’. Embracing our company’s philosophy of smart hustle, Domino’s is committed to provide customers with the ultimate pizza delivery experience, with its product satisfaction guarantee, 30 minute delivery guarantee and 15 minute take-away guarantee. 
                </p>
                <p id="introduction">
                Forging ahead as an e-commerce entity, Domino’s Pizza has led many firsts in its digital platforms. Domino’s Pizza Malaysia has leveraged on the digital world to the best of its advantage and this began when it was certified as the first QSR company to provide an online ordering platform by the Malaysian Book of Records with the launch of its website in 2003. Domino's continue to strive and grow digitally and in its innovation to provide better services and customer experience. 
                </p>
                <p id="introduction">
                Domino’s Malaysia is the award winner of the 2009, 2010, 2011, 2012 and 2016 Gold Franny Award, a distinguished Achievement Award of the International Franchise Association at the Domino’s Pizza Worldwide Rally. In a show of confidence by Malaysian consumers, Domino’s Pizza won Bronze in the "Restaurant & Fast Food" category of the prestigious Putra Brand Awards 2014, silver in 2015, bronze in 2016, Silver in 2017 and bronze in 2018.
                </p>
                <p id="introduction">
                Domino’s Pizza Malaysia has grown by leaps and bounds since it first began its operations in 1997. From a single store in USJ with a headcount of 15 staffs, the pizza chain today has over 240 stores in Malaysia and over 30 stores in Singapore with a headcount of over 4,000 staffs. Domino’s Pizza Malaysia has experienced solid growth, particularly in the past few years with the opening of its 50th store in January 2011, 100th store in December 2012, 150th store in March 2016 and now the 200th store in April 2017.
                </p>
            </div>
        </div>
        );
    }
}

export default AboutUs;