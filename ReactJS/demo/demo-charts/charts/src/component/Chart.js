import React,{ Component } from 'react';
import {Pie} from 'react-chartjs-2';
export default class Charts extends Component{





    render() {
        const displayName = 'PieExample';
        const data = {
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        };
        return (
            <div>
                <h2>Pie Example</h2>
                <Pie 
                    data={data}
                    width={450}
                    height={450}
                    options={{
                        maintainAspectRatio: false
                    }}
                
                />
            </div>
        );
    }

}