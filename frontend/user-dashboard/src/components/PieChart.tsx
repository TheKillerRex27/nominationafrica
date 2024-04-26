import { useEffect } from 'react';

function PieChart({ cardTitle, nominations, data, label } : { cardTitle: string; nominations: number; data: number[]; label: string[] }) {
  useEffect(() => {
    const breakup = {
      color: "#adb5bd",
      series: data,
      labels: label,
      chart: {
        width: 180,
        type: "donut",
        fontFamily: "Plus Jakarta Sans', sans-serif",
        foreColor: "#adb0bb",
      },
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          donut: {
            size: '75%',
          },
        },
      },
      stroke: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      colors: ["#5D87FF", "#ecf2ff", "#F9F9FD"],
      responsive: [
        {
          breakpoint: 991,
          options: {
            chart: {
              width: 150,
            },
          },
        },
      ],
      tooltip: {
        theme: "dark",
        fillSeriesColor: false,
      },
    };

    const chart = new ApexCharts(document.querySelector("#breakup"), breakup);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [label, data]);

  return (
    <div className="col-lg-12">
      <div className="card overflow-hidden">
        <div className="card-body p-4">
          <h5 className="card-title mb-9 fw-semibold">{cardTitle}</h5>
          <div className="row align-items-center">
            <div className="col-8">
              <h4 className="fw-semibold mb-3">{nominations} Approved Nominations</h4>
              <div className="d-flex align-items-center mb-3">
                <span className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                  <i className="ti ti-arrow-up-left text-success"></i>
                </span>
                <p className="text-dark me-1 fs-3 mb-0">+8%</p>
                <p className="fs-3 mb-0">last month</p>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-4">
                  <span className="round-8 bg-primary rounded-circle me-2 d-inline-block"></span>
                  <span className="fs-2">April</span>
                </div>
                <div>
                  <span className="round-8 bg-light-primary rounded-circle me-2 d-inline-block"></span>
                  <span className="fs-2">March</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="d-flex justify-content-center">
                <div id="breakup"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PieChart;
