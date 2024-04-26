import { useEffect } from 'react';

function LineChart({ cardTitle, visitors, data } : { cardTitle: string; visitors: number; data: number[]; }) {
  useEffect(() => {
    const earning = {
      chart: {
        id: "sparkline3",
        type: "area",
        height: 60,
        sparkline: {
          enabled: true,
        },
        group: "sparklines",
        fontFamily: "Plus Jakarta Sans', sans-serif",
        foreColor: "#adb0bb",
      },
      series: [
        {
          name: "Visitors",
          color: "#49BEFF",
          data: data,
        },
      ],
      stroke: {
        curve: "smooth",
        width: 2,
      },
      fill: {
        colors: ["#f3feff"],
        type: "solid",
        opacity: 0.05,
      },

      markers: {
        size: 0,
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: true,
          position: "right",
        },
        x: {
          show: false,
        },
      },
    };

    const chart = new ApexCharts(document.querySelector("#earning"), earning);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <div className="col-lg-12">
      <div className="card">
        <div className="card-body">
          <div className="row align-items-start">
            <div className="col-8">
              <h5 className="card-title mb-9 fw-semibold">
                {cardTitle}
              </h5>
              <h4 className="fw-semibold mb-3">{visitors.toLocaleString()} Visitors</h4>
              <div className="d-flex align-items-center pb-1">
                <span className="me-2 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center">
                  <i className="ti ti-arrow-down-right text-danger"></i>
                </span>
                <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                <p className="fs-3 mb-0">last week</p>
              </div>
            </div>
            <div className="col-4">
              <div className="d-flex justify-content-end">
                <div className="text-white bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center">
                  <i className="ti ti-user fs-6"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="earning"></div>
      </div>
    </div>
  );
}

export default LineChart;
