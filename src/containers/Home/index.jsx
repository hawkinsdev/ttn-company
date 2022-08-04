/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {HomeV} from '../../components/Home/'

export const HomeC = () => {
    const plans = [
        { active: true, color: '#F97B92', title: 'Operacional', summary: 'Riesgos identificados', value: 35},
        { color: '#AC6CED', title: 'Actuarial', summary: 'Riesgos identificados', value: 55},
        { color: '#8CE07E', title: 'Finaciero', summary: 'Riesgos identificados', value: 10},
        { color: '#7891E9', title: 'En salud', summary: 'Riesgos identificados', value: 15},
    ]

    const optionsChart1 = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },

        },
    }

    const dataChart1 = {
        labels: ['Operacional', 'Actuarial', 'Financiero', 'En salud'],
        datasets: [
            {
                label: '',
                data: [10, 20, 30, 40],
                backgroundColor: 'rgba(172, 187, 201, 1)',
            },
        ],
    };

    const optionsChart2 = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },

        },
    }

    const dataChart2 = {
        labels: ['Ene', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: '',
                data: [0,0,50,20,50,100,20,50,80,125,80,100],
                backgroundColor: 'rgba(172, 187, 201, 1)',
            },
        ],
    };



    const dataDoughnut = {
        labels: [],
        datasets: [
          {
            label: 'Total',
            data: [67,23],
            backgroundColor: [
              'rgba(172, 187, 201, 1)',
              'rgba(242, 246, 252, 1)',
            ],
          },
        ],
      };

    return (
        <HomeV
            data={{ 
                plans,
                optionsChart1,
                dataChart1,
                optionsChart2,
                dataChart2,
                dataDoughnut
            }}
        />
    )
}