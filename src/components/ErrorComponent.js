import React, { Component } from 'react';

class ErrorComponent extends Component {
    state = {  }
    render() {
        return (
    
          <div className="theme-layout" id="scrollup">
            <section>
              <div className="block no-padding">
                <div className="container fluid">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="main-featured-sec witherror">
                        <ul className="main-slider-sec text-arrows">
                          <li><img src="http://placehold.it/1600x800" alt="" /></li>
                          <li><img src="http://placehold.it/1600x800" alt="" /></li>
                          <li><img src="http://placehold.it/1600x800" alt="" /></li>
                        </ul>
                        <div className="error-sec">
                          <img src="images/404.png" alt="" />
                          <span>We Are Sorry, Page Not Found</span>
                          <p>Unfortunately the page you were looking for could not be found. It may be temporarily unavailable, moved or no longer exist. Check the Url you entered for any mistakes and try again.</p>
                          <form>
                            <input type="text" placeholder="Enter any Keyword" /><button type="submit"><i className="la la-search" /></button>
                          </form>
                          <h6><a href="/" title="">Back To Homepage</a></h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      }
    
}


export default ErrorComponent;