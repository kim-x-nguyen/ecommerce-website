import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
    PricingSection,
    PricingWrapper,
    PricingHeading,
    PricingContainer,
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardCost,
    PricingCardLength,
    PricingCardFeatures,
    PricingCardFeature
} from './Pricing.elements';

function Pricing() {
    return (
        <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
            <PricingSection>
                <PricingWrapper>
                    <PricingHeading>Our Services</PricingHeading>
                    <PricingContainer>
                        <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiRock />
                                </PricingCardIcon>
                                <PricingCardPlan>Starter Pack</PricingCardPlan>
                                <PricingCardCost>$9.99</PricingCardCost>
                                <PricingCardLength>per month</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>100 GB Bandwidth</PricingCardFeature>
                                    <PricingCardFeature>2 Databases</PricingCardFeature>
                                    <PricingCardFeature>GIT Access</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiCrystalBars />
                                </PricingCardIcon>
                                <PricingCardPlan>Premium Pack</PricingCardPlan>
                                <PricingCardCost>$19.99</PricingCardCost>
                                <PricingCardLength>per month</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Unlimited Bandwidth</PricingCardFeature>
                                    <PricingCardFeature>Full Databases Access</PricingCardFeature>
                                    <PricingCardFeature>GIT & SSH Access</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiCutDiamond />
                                </PricingCardIcon>
                                <PricingCardPlan>Business Pack</PricingCardPlan>
                                <PricingCardCost>$29.99</PricingCardCost>
                                <PricingCardLength>per month</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Unlimited Bandwidth</PricingCardFeature>
                                    <PricingCardFeature>Full Databases Access</PricingCardFeature>
                                    <PricingCardFeature>GIT & SSH Access</PricingCardFeature>
                                    <PricingCardFeature>Daily Backups</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>
                    </PricingContainer>
                </PricingWrapper>
            </PricingSection>
        </IconContext.Provider>
    );
}
export default Pricing;