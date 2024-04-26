import "react";

function ImageCard({ img, name, price }: { img: string, name: string, price: string }) {
  return (
    <div className="card overflow-hidden rounded-2">
      <div className="position-relative">
        <a href="javascript:void(0)">
          <img
            src={img}
            className="card-img-top rounded-0"
            alt="..."
          />
        </a>
        <a
          href="javascript:void(0)"
          className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Add To Cart"
        >
          <i className="ti ti-basket fs-4"></i>
        </a>{" "}
      </div>
      <div className="card-body pt-3 p-4">
        <h6 className="fw-semibold fs-4">{name}</h6>
        <div className="d-flex align-items-center justify-content-between">
          <h6 className="fw-semibold fs-4 mb-0">
            {price}
          </h6>
          <ul className="list-unstyled d-flex align-items-center mb-0">
            <li>
              <a className="me-1" href="javascript:void(0)">
                <i className="ti ti-star text-warning"></i>
              </a>
            </li>
            <li>
              <a className="me-1" href="javascript:void(0)">
                <i className="ti ti-star text-warning"></i>
              </a>
            </li>
            <li>
              <a className="me-1" href="javascript:void(0)">
                <i className="ti ti-star text-warning"></i>
              </a>
            </li>
            <li>
              <a className="me-1" href="javascript:void(0)">
                <i className="ti ti-star text-warning"></i>
              </a>
            </li>
            <li>
              <a className="" href="javascript:void(0)">
                <i className="ti ti-star text-warning"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
