import "react";

interface ListItem {
  id?: number;
  assigned?: string;
  name?: string;
  career?: string;
  priority: string;
  budget?: string;
}

interface ListProps {
  title: string;
  items: ListItem[];
  categories: string[];
}

function List({ title, items, categories }: ListProps) {
  return (
    <div className="card w-100">
      <div className="card-body p-4">
        <h5 className="card-title fw-semibold mb-4">{title}</h5>
        <div className="table-responsive">
          <table className="table text-nowrap mb-0 align-middle">
            <thead className="text-dark fs-4">
              <tr>
                {categories.map((category, index) => (
                  <th className="border-bottom-0" key={index}>
                    <h6 className="fw-semibold mb-0">{category}</h6>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td className="border-bottom-0">
                    <h6 className="fw-semibold mb-0">{item.id}</h6>
                  </td>
                  <td className="border-bottom-0">
                    <h6 className="fw-semibold mb-1">{item.assigned}</h6>
                    <span className="fw-normal">{item.career}</span>
                  </td>
                  <td className="border-bottom-0">
                    <p className="mb-0 fw-normal">{item.name}</p>
                  </td>
                  <td className="border-bottom-0">
                    <div className="d-flex align-items-center gap-2">
                      <span
                        className={`badge ${getBadgeClass(
                          item.priority
                        )} rounded-3 fw-semibold`}
                      >
                        {item.priority}
                      </span>
                    </div>
                  </td>
                  <td className="border-bottom-0">
                    <h6 className="fw-semibold mb-0 fs-4">{item.budget}</h6>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function getBadgeClass(priority: string) {
  switch (priority.toLowerCase()) {
    case "rejected":
      return "bg-danger";
    default:
      return "bg-primary";
  }
}

export default List;
