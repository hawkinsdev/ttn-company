import React from 'react';
import { PropTypes } from 'prop-types';
import {  ContentMain, BodyMain, TitleHeader, Card, CardContent, CardSummary, CardValue, Text, TextValue,
    CardChartBar, TitleCharbar, CardBox, ItemPlans, Circle, CardFlex, FlexItem, TextFlex, CardDoughnut, CardBar
} from './style'
import { Chart as ChartJS, 
    ArcElement, Legend, CategoryScale,LinearScale,
    BarElement, Title, Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend);


export const HomeV = ({
    data: {
        plans,
        optionsChart1,
        dataChart1,
        optionsChart2,
        dataChart2,
        dataDoughnut
    }
}) => {
    return(
        <ContentMain>
            <TitleHeader>Dashboard</TitleHeader>
            <BodyMain>
                <Card>
                    {plans?.map(plan =>    
                    <CardContent active={plan?.active} color={plan?.color}>
                        <CardSummary>
                            <Text color={plan?.color}>{plan?.title}</Text>
                            <Text>{plan?.summary}</Text>
                        </CardSummary>
                        <CardValue>
                            <TextValue>{plan?.value}</TextValue>
                        </CardValue>
                    </CardContent>
                    )}
                </Card>
                <Card>
                    <CardChartBar>
                        <TitleCharbar>Nivel riesgo</TitleCharbar>
                        <CardBar>
                            <Bar options={optionsChart1} data={dataChart1} height={120}/>
                        </CardBar>
                    </CardChartBar>
                    <CardChartBar>
                        <TitleCharbar>Incidentes y eventos adversos</TitleCharbar>
                        <CardBar>
                            <Bar options={optionsChart2} data={dataChart2} height={120}/>
                        </CardBar>
                    </CardChartBar>
                </Card>
                <Card>
                    <CardBox width={'13%'}>
                        <TitleCharbar style={{color: '#443956'}}>Cumplimiento planes de acción</TitleCharbar>
                        {plans?.map(plan => 
                            <ItemPlans active={plan?.active} color={plan?.color}>
                                <Circle bgColor={plan?.color}/>
                                {plan?.title}
                            </ItemPlans>
                        )}
                    </CardBox>
                    <CardFlex>
                        <FlexItem>
                            <TextFlex>Revisión de los informes</TextFlex>
                            <CardDoughnut>
                                <Doughnut data={dataDoughnut} />
                            </CardDoughnut>
                        </FlexItem>
                        <FlexItem>
                            <TextFlex>Revisión de las sillas de la Sala Azul</TextFlex>
                            <CardDoughnut>
                                <Doughnut data={dataDoughnut} />
                            </CardDoughnut>
                        </FlexItem>
                        <FlexItem>
                            <TextFlex>Revisión de reportes RRHH</TextFlex>
                            <CardDoughnut>
                                <Doughnut data={dataDoughnut} />
                            </CardDoughnut>
                        </FlexItem>
                    </CardFlex>
                    <CardFlex>
                        <FlexItem>
                            <TextFlex>Revisión de los informes</TextFlex>
                            <CardDoughnut>
                                <Doughnut data={dataDoughnut} />
                            </CardDoughnut>
                        </FlexItem>
                        <FlexItem>
                            <TextFlex>Revisión de las sillas de la Sala Azul</TextFlex>
                            <CardDoughnut>
                                <Doughnut data={dataDoughnut} />
                            </CardDoughnut>
                        </FlexItem>
                        <FlexItem>
                            <TextFlex>Revisión de reportes RRHH</TextFlex>
                            <CardDoughnut>
                                <Doughnut data={dataDoughnut} />
                            </CardDoughnut>
                        </FlexItem>
                    </CardFlex>
                </Card>
            </BodyMain>
       </ContentMain> 
    )
}
HomeV.propTypes = {
    data: PropTypes.object
}
