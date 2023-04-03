import React from 'react';
import './Breadcrumb.css';

const Breadcrumb = () => {
    return(
        <div className="Breadcrumb">   

            <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
            </nav>
        </div>
    );
};

export default Breadcrumb;