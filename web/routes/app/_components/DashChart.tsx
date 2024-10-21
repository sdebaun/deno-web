import { Head } from "$fresh/runtime.ts";
import { useId } from "preact/hooks";

export const DashChart = () => {
  const id = useId();

  return (
    <>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
      </Head>
      <div
        id={id}
      >
      </div>
      <script>
        {`
    window.addEventListener('load', () => {
     axios({ method: 'GET', url: '/app/chart/options'})
      .then(response => {
        console.log('initializing graph')
        console.log(response.data)
        const chart = new ApexCharts(
          document.querySelector('#${id}'),
          response.data
        );
        chart.render();
        setInterval(() => {
          console.log('polling')
          axios({method: 'GET', url: '/app/chart/update'})
            .then(response => {
              chart.updateSeries(response.data)
            })
        }, 3000)
      })
    })
    `}
      </script>
    </>
  );
};
