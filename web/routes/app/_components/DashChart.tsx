import { Head } from "$fresh/runtime.ts";
import { useId } from "preact/hooks";

export const DashChart = () => {
  const id = useId()

  return <>
    {/* <Head>
      <script src="https://cdn.jsdelivr.net/npm/ag-charts-community@9.0.0/dist/umd/ag-charts-community.js"></script>
    </Head> */}
    <div id={id} class={'h-[400px] w-full'} height='400px' style={{border: '1px solid red'}}></div>
    <script>{`
    var options = {
      chart: {
        type: 'line',
        height: '100%',
        toolbar: { show: true },
      },
      series: [
        {
          name: 'Signal Strength (dBm)',
          type: 'line',
          data: [
            { x: 0, y: -30 },
            { x: 10000, y: -50 },
            { x: 20000, y: -50 },
            { x: 30000, y: -50 },
          ]
        }
      ],
      xaxis: {
        type: 'datetime',
        axisTicks: { show: true },
        range: 1000 * 60 * 5
      },
      yaxis: {
        title: {
          text: 'Signal Strength (dBm)'
        }
      },
      grid: {
        row: {
          colors: ['#f8f8f8', 'transparent']
        },
      },
      noData: { text: 'Loading...' },
    }

    var chart = new ApexCharts(document.querySelector('#${id}'), options);
    chart.render();

    `}</script>
  </>
}