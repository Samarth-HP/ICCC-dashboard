import React, {FC} from 'react';
import { Card, Col, Layout, Row, Image} from 'antd';
import './index.css';
import {Content} from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import schools from '../../assets/schools.png';
import statistics from '../../assets/thumb_stats.png';
import performance from '../../assets/thumb_performance.png';
import enrollment from '../../assets/thumb_enrollment.png';
import attendance from '../../assets/thumb_attendance.png';
import learning from '../../assets/thumb_learning.png';
import assessments from '../../assets/thumb_assessments.png';

import FooterLogo from '../../assets/footer_logo.png';

const ReviewAndMonitoring: FC = () => (
    <Layout>
    </Layout>
);


const NavItem: FC = (props: any) => {
  return (
    <div style={{
      margin: 24,
      }} >
    {/*@ts-ignore*/}
    <Col align="middle">
        <img alt={'broken'} src={props.thumbnail} className="thumbnail-large" />

      <Title level={4}>
        {props.titleEN}
        <div className="subtitle">{props.titleHI}</div>
      </Title>
    </Col>
    </div>
  )
}

const Tile: FC = (props: any) => {
  return (
    <Card hoverable bordered className="tile">
        {/*@ts-ignore*/}
        <Col align="middle">
            <img alt={'broken'} src={props.thumbnail} className="tile-logo"/>
          <Title level={5} className="title" style={{
            marginBottom: -12,
            }} >
            {props.titleEN}
            <div className="subtitle">{props.titleHI}</div>
          </Title>
        </Col>
    </Card>
  )
}

export default ReviewAndMonitoring;
