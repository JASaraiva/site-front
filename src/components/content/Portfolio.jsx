import React from "react"

export default props =>
    <div className="row">
        <h2 className="text-center">Portfólio</h2>
      <div className="row">
              <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                  <a className="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title=""
                     data-image="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                     data-target="#image-gallery">
                     
                  </a>
              </div>
        </div>
  
  
          <div className="modal fade" id="image-gallery" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h4 className="modal-title" id="image-gallery-title"></h4>
                          <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span>
                          </button>
                      </div>
                      <div className="modal-body">
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-secondary float-left" id="show-previous-image"><i className="fa fa-arrow-left"></i>
                          </button>
  
                          <button type="button" id="show-next-image" className="btn btn-secondary float-right"><i className="fa fa-arrow-right"></i>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
    </div>