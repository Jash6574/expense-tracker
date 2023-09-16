import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement)



  const config = {
    data:{
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 5,
            borderRadius:50,
            spacing:20
          }]
    },
    options:{
        cutout:110
    }
  }

function Graph() {
    return (
        <>
            <div className="flex justify-content max-w-xs mx-auto">
                <div className="item">
                    <div className="chart relative">
                        <Doughnut {...config}></Doughnut>
                        <h3 className="mb-4 font-bold title">Total
                        <span className="block text-3xl text-emerald-400">{0} Rs</span>
                        </h3>
                    </div>
                    <div className="flex flex-col py-10 gap-4">
                        {/* Lables */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graph
