import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from '@mui/material/Checkbox';
import PriceSlider from "../container/PriceSlider";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Sidebar = () => {
  return (
    <div className="sidebar__section">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="accortion__title"><h4>Product Type</h4></div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="items__contianer">
              <div className="item flex">
                  <div className="item__checkbox">
                  <Checkbox {...label} defaultChecked />
                  </div>
                  <div className="item__text"><h5>T-Shirts</h5></div>
              </div>
              <div className="item flex">
                  <div className="item__checkbox">
                  <Checkbox {...label} />
                  </div>
                  <div className="item__text"><h5>T-Shirts</h5></div>
              </div>
              <div className="item flex">
                  <div className="item__checkbox">
                  <Checkbox {...label} />
                  </div>
                  <div className="item__text"><h5>T-Shirts</h5></div>
              </div>
            </div>  
        
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="accortion__title"><h4>Price</h4></div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="items__contianer">
              <PriceSlider />
            </div>  
        
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="accortion__title"><h4>Collection</h4></div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="items__contianer">
              <div className="item flex">
                  <div className="item__checkbox">
                  <Checkbox {...label} defaultChecked />
                  </div>
                  <div className="item__text"><h5>T-Shirts</h5></div>
              </div>
              <div className="item flex">
                  <div className="item__checkbox">
                  <Checkbox {...label} />
                  </div>
                  <div className="item__text"><h5>T-Shirts</h5></div>
              </div>
              <div className="item flex">
                  <div className="item__checkbox">
                  <Checkbox {...label} />
                  </div>
                  <div className="item__text"><h5>T-Shirts</h5></div>
              </div>
            </div>  
        
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="accortion__title"><h4>Size</h4></div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="items__contianer">
              <div className="item flex">
                  <div className="item__checkbox">
                  <Checkbox {...label} defaultChecked />
                  </div>
                  <div className="item__text"><h5>T-Shirts</h5></div>
              </div>
              <div className="item flex">
                  <div className="item__checkbox">
                  <Checkbox {...label} />
                  </div>
                  <div className="item__text"><h5>T-Shirts</h5></div>
              </div>
              <div className="item flex">
                  <div className="item__checkbox">
                  <Checkbox {...label} />
                  </div>
                  <div className="item__text"><h5>T-Shirts</h5></div>
              </div>
            </div>  
        
        </AccordionDetails>
      </Accordion>

    </div>
  );
};

export default Sidebar;
