import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import PortfolioData from "./portfolioData";
import Modal from "./modal/Modal";

const Portfolio = () => {
  const [getModal, setGetModal] = useState(false);
  const [modalId, setModalId] = useState(1);

  const handleModal = (id) => {
    setGetModal(true);
    setModalId(id);
  };

  const renderTabPanelContent = (filterTag) => {
    return PortfolioData.filter((item) =>
      filterTag ? item.tag.includes(filterTag) : true
    ).map((item) => {
      const { id, type, image, delayAnimation } = item;

      return (
        <div
          key={id}
          data-aos="fade-right"
          data-aos-delay={delayAnimation}
          className="tab-content-wrapper"
        >
          <div className="tab-content" onClick={() => handleModal(id)}>
            <img src={image} alt="portfolio project demo" />
            <h3>
              <span className="content-title">{type}</span>
            </h3>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="portfolio-main">
        <Tabs>
          <TabList className="portfolio-tab-list" data-aos="fade-up">
            <Tab>ALL</Tab>
            <Tab>FRONTEND</Tab>
            <Tab>BACKEND</Tab>
            <Tab>FULL STACK</Tab>
            <Tab>RESPONSIVE</Tab>
          </TabList>

          <div className="container">
            <TabPanel>
              <div className="tab-container">{renderTabPanelContent()}</div>
            </TabPanel>

            <TabPanel>
              <div className="tab-container">
                {renderTabPanelContent("frontend")}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-container">
                {renderTabPanelContent("backend")}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-container">
                {renderTabPanelContent("fullstack")}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-container">
                {renderTabPanelContent("responsive")}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
      {getModal && <Modal modalId={modalId} setGetModal={setGetModal} />}
    </>
  );
};

export default Portfolio;
