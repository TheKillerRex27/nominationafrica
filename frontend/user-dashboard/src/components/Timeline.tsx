import "react";

interface TimelineItem {
  time: string;
  description: string;
  link?: string | null;
  linkText?: string | null;
}

interface TimelineProps {
  cardTitle: string;
  data: TimelineItem[];
}

function Timeline({ cardTitle, data }: TimelineProps) {
  return (
    <div className="card w-100">
      <div className="card-body p-4">
        <div className="mb-4">
          <h5 className="card-title fw-semibold">{cardTitle}</h5>
        </div>
        <div className="overflow-auto">
        <ul className="timeline-widget mb-0 position-relative mb-n5">
          {data.map((item, index) => (
            <li
              className="timeline-item d-flex position-relative overflow-hidden"
              key={index}
            >
              <div className="timeline-time text-dark flex-shrink-0 text-end">
                {item.time}
              </div>
              <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                <span
                  className={`timeline-badge border-2 border border-warning flex-shrink-0 my-8`}
                ></span>
                <span className="timeline-badge-border d-block flex-shrink-0"></span>
              </div>
              <div className="timeline-desc fs-3 text-dark mt-n1">
                {item.description}
                {item.link && (
                  <a
                    href={item.link}
                    className="text-primary d-block fw-normal"
                  >
                    {item.linkText}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
