import React from "react";
import "./EBookCard.scss";

const EBookCard = ({ image, title, description, downloadLink }) => {
    return (
        <div className="col-md-6">
            <div className="card ebook-card">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">{description}</p>
                    <a href={downloadLink} download className="btn btn-primary w-100">
                        📥 Download
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EBookCard;
