import React from 'react';
import PricingBanner from './PricingBanner';
import PricingPlan from './PricingPlan';
import FAQ from './FAQ';

const Pricing = () => {
    return (
        <div>
            <PricingBanner />
            <PricingPlan />
            <FAQ/>
        </div>
    );
};

export default Pricing;