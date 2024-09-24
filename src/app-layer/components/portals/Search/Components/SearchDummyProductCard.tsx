import React from 'react';

const SearchDummyProductCard: React.FC = () => (
  <div className="product-card">
    <div className="product-card__image">
      <div className="loader">
        <span className="loader__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
            <path
              d="M20.201 5.169c-8.254 0-14.946 6.692-14.946 14.946 0 8.255 6.692 14.946 14.946 14.946s14.946-6.691 14.946-14.946c-.001-8.254-6.692-14.946-14.946-14.946zm0 26.58c-6.425 0-11.634-5.208-11.634-11.634 0-6.425 5.209-11.634 11.634-11.634 6.425 0 11.633 5.209 11.633 11.634 0 6.426-5.208 11.634-11.633 11.634z"
              opacity=".2"
            />
            <path d="M26.013 10.047l1.654-2.866a14.855 14.855 0 00-7.466-2.012v3.312c2.119 0 4.1.576 5.812 1.566z">
              <animateTransform
                attributeName="transform"
                attributeType="xml"
                dur="0.5s"
                from="0 20 20"
                repeatCount="indefinite"
                to="360 20 20"
                type="rotate"
              />
            </path>
          </svg>
        </span>
      </div>
    </div>
    <div className="product-card__info"></div>

    <div className="product-card__quick-add"></div>
  </div>
);

export default SearchDummyProductCard;
