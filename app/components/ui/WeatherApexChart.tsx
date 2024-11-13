import { useEffect, useState } from "react";

export function WeatherApexChart() {
  const [ApexChart, setApexChart]: any = useState();
  
  useEffect(() => {
    import('react-apexcharts').then((module) => {
      setApexChart(() => module.default);
    });
  }, []);

  const chartOptions = {
    chart: {
      type: 'area',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
      }
    },
    colors: ['#132B4E']
  };
  
  const series = [{
    name: 'Temperature (°C)',
    data: [10, 12, 20, 25, 30]
  }];

  return (
    <>
      {ApexChart && (
        <ApexChart
          options={chartOptions}
          series={series}
          type="area"
          height="100%"
        />
      )}
    </>
  );
}
