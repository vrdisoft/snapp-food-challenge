import { Link } from "react-router-dom";
import "../style/index.scss";
import { numberWithCommas } from "../../../helper/numberWithCommas";
function VendoreItem({ item }: { item: VendoreItemType }) {
  return (
    <>
      <Link to={item.data.menuUrl} className="vendore-card">
        <section className="vendore-card-section">
          <header className="vendore-card-section-header">
            <div className="vendore-card-section-header-cover">
              <img
                src={item.data.backgroundImage}
                className="vendore-card-section-header-cover-image"
              />
            </div>
            <div className="vendore-card-section-header-logo">
              <img
                src={item.data.logo}
                className="vendore-card-section-header-logo-image"
              />
            </div>
            <div className="vendore-card-section-header-coupon">
              {!!item.data.best_coupon && (
                <div className="vendore-card-section-header-coupon-continer">
                  {item.data.best_coupon}
                </div>
              )}
            </div>
          </header>
          <div className="vendore-card-section-body">
            <div className="vendore-card-section-body-title">
              <div className="vendore-card-section-body-title-text">
                {item.data.title}
              </div>
              <div className="vendore-card-section-body-title-rate">
                <div className="vendore-card-section-body-title-rate-percent">
                  {item.data.rate}
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="vendore-card-section-body-title-rate-count">
                  {`(${item.data.voteCount})`}
                </div>
              </div>
            </div>
            <div className="vendore-card-section-body-description">
              {item.data.description}
            </div>
            <div className="vendore-card-section-body-delivery">
              <span className="vendore-card-section-body-delivery-title">
                پیک فروشنده
              </span>
              <span> {numberWithCommas(item.data.deliveryFee)} تومان</span>
            </div>
          </div>
        </section>
      </Link>
    </>
  );
}

export default VendoreItem;
