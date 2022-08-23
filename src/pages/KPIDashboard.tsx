import React, {FC} from 'react';
import {Card, Col, Layout, Row} from 'antd';
import './index.less';
import {Content} from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import {NavLink} from 'react-router-dom';

const KPIDashboardPage: FC = () => (
    <Layout className={'layout-wrapper home-wrapper'}>
        <Content>
            <Row justify={'center'} align={'middle'}>
                <Col>
                    <Row justify={'center'} gutter={[20, 20]}>
                        <Col>
                            <Title>
                                Mission Prerna KPI Dashboards
                            </Title>
                        </Col>
                    </Row>
                    <Row justify={'center'} gutter={[20, 20]}>
                        <Col>
                            <NavLink to={'/kpi'}>
                                <Card className={'center-cards'}>
                                    <Title style={{marginBottom: '0'}}>
                                        District Wise Performance
                                    </Title>
                                </Card>
                            </NavLink>
                        </Col>
                        <Col>
                            <NavLink to={'/e-pathshala'}>
                                <Card className={'center-cards'}>
                                    <Title style={{marginBottom: '0'}}>
                                        Cadre Wise Performance
                                    </Title>
                                </Card>
                            </NavLink>
                        </Col>
                    </Row>
                    <Row justify={'center'} gutter={[20, 20]}>
                        <Col>
                            <NavLink to={'/mentoring'}>
                                <Card className={'center-cards'}>
                                    <Title style={{marginBottom: '0'}}>
                                        KPI Wise Performance
                                    </Title>
                                </Card>
                            </NavLink>
                        </Col>
                        <Col>
                            <NavLink to={'/mentoring'}>
                                <Card className={'center-cards'}>
                                    <Title style={{marginBottom: '0'}}>
                                        Download Review Docs
                                    </Title>
                                </Card>
                            </NavLink>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Content>
    </Layout>
);

export default KPIDashboardPage;
