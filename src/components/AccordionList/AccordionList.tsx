import React, { useEffect, useState } from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import { getAccordionActiveItem, setClassActive } from '../../util';
import { ListingsContent } from '../Filter/Content/Filter.content';
import RadioToggle from '../RadioToggle/RadioToggle';
import styles from './AccordionList.module.scss';
import cx from 'classnames';
const AccordionList = () => {
    let ariaExpanded = document.querySelectorAll('.accordion__button');
    const [state, setState] = useState(false) // this is for accordion

    useEffect(() => {
        const active = getAccordionActiveItem(ariaExpanded); // get current item that is active
        setClassActive(active, ariaExpanded); // set current item a class

    }, [ariaExpanded, state])

    const handleRadioToggle = (e: React.ChangeEvent<HTMLInputElement>) => { // get the value in the listing
        const target = e.target.value; // the selected value in radio buttons
        console.log(target)
    }
    return (
        <div className={styles.accordion}>
            <Accordion onChange={e => setState(!state)}>
                {/* Listing status */}
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className={styles.heading}>
                                <h4>Listing status</h4>
                                <span>+</span>
                            </div>
                        </AccordionItemButton> 
                    </AccordionItemHeading> 
                    <AccordionItemPanel>
                        <div className={styles.content}>
                            <RadioToggle items={ListingsContent} callback={handleRadioToggle}/>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                {/* Building Size */}
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className={styles.heading}>
                                <h4>Building size</h4> 
                                <span>+</span>
                            </div> 
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className={cx(styles.content, styles.building)}>
                            <div>
                                <input type="number" placeholder="Max" name="building_size" id="building"/>
                                <span>sqft</span>
                            </div>
                            <div>
                                <input type="number" placeholder="Min" name="building_size" id="building"/>
                                <span>sqft</span>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                {/* Lot Size */}
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className={styles.heading}>
                                <h4>Lot size</h4>
                                <span>+</span>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className={cx(styles.content, styles.lot)}>
                            <div>
                                <input type="number" placeholder="Max" name="building_size" id="building"/>
                                <span>sqft</span>
                            </div>
                            <div>
                                <input type="number" placeholder="Min" name="building_size" id="building"/>
                                <span>sqft</span>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default AccordionList
