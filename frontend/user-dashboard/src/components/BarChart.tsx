import { useEffect } from 'react';

interface BarChartProps {
  data: { name: string; data: number[] }[];
  categories: string[];
  title: string;
}

function BarChart({ data, categories, title }: BarChartProps) {
  useEffect(() => {
    const chart = new ApexCharts(document.querySelector("#chart"), {
      series: data,
      chart: {
        type: "bar",
        height: 345,
        offsetX: -15,
        toolbar: { show: true },
        foreColor: "#adb0bb",
        fontFamily: "inherit",
        sparkline: { enabled: false },
      },
      colors: ["#5D87FF", "#49BEFF"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "35%",
          borderRadius: 6,
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "all",
        },
      },
      markers: { size: 0 },
      dataLabels: { enabled: false },
      legend: { show: false },
      grid: {
        borderColor: "rgba(0,0,0,0.1)",
        strokeDashArray: 3,
        xaxis: { lines: { show: false } },
      },
      xaxis: {
        type: "category",
        categories: categories,
        labels: { style: { cssClass: "grey--text lighten-2--text fill-color" } },
      },
      yaxis: {
        show: true,
        min: 0,
        max: Math.max(...data.flatMap(series => series.data)) * 1.1,
        tickAmount: 4,
        labels: { style: { cssClass: "grey--text lighten-2--text fill-color" } },
      },
      stroke: { show: true, width: 3, lineCap: "butt", colors: ["transparent"] },
      tooltip: { theme: "light" },
      responsive: [
        {
          breakpoint: 600,
          options: {
            plotOptions: { bar: { borderRadius: 3 } },
          },
        },
      ],
    });

    chart.render();

    return () => {
      chart.destroy();
    };
  }, [data, categories]);

  return (
    <div className="col-lg-8 d-flex align-items-strech">
      <div className="card w-100">
        <div className="card-body">
          <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
            <div className="mb-3 mb-sm-0">
              <h5 className="card-title fw-semibold">{title}</h5>
            </div>
            <div>
              <select className="form-select">
                <option value="4">April 2024</option>
                <option value="3">March 2024</option>
                <option value="2">February 2024</option>
                <option value="1">January 2024</option>
              </select>
            </div>
          </div>
          <div id="chart"></div>
        </div>
      </div>
    </div>
  );
}

export default BarChart;
