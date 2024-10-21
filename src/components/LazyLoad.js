// LazyLoad.js
import React, { Suspense, lazy } from 'react';

const LazyLoad = (importFunc) => {
    const Component = lazy(importFunc);

    return (props) => (
        <Suspense fallback={<div id="preloader-active">
            <div className="preloader d-flex align-items-center justify-content-center">
                <div className="preloader-inner position-relative">
                    <div className="page-loading">
                        <div className="page-loading-inner">
                            <div />
                            <div />
                            <div />
                        </div>
                    </div>
                </div>
            </div>
        </div>}>
            <Component {...props} />
        </Suspense>
    );
};

export default LazyLoad;
