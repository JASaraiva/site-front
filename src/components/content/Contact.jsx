import React from "react"

export default props =>
<div className="row">
    <div className="container">
        <h2 className="text-center">Fale comigo</h2>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-6 pb-5">

                  <form action="mail.php" method="post">
                      <div className="card border-primary rounded-0">
                          <div className="card-header p-0">
                              <div className="bg-info text-white text-center py-2">
                                  <h3><i className="fa fa-envelope"></i> Envie uma mensagem</h3>
                                  <p className="m-0">Lhe responderei o mais rápido possível</p>
                              </div>
                          </div>
                          <div className="card-body p-3">

                              <div className="form-group">
                                  <div className="input-group mb-2">
                                      <div className="input-group-prepend">
                                          <div className="input-group-text"><i className="fa fa-user text-info"></i></div>
                                      </div>
                                  </div>
                              </div>
                              <div className="form-group">
                                  <div className="input-group mb-2">
                                      <div className="input-group-prepend">
                                          <div className="input-group-text"><i className="fa fa-envelope text-info"></i></div>
                                      </div>
                                  </div>
                              </div>

                              <div className="form-group">
                                  <div className="input-group mb-2">
                                      <div className="input-group-prepend">
                                          <div className="input-group-text"><i className="fa fa-comment text-info"></i></div>
                                      </div>
                                      <textarea className="form-control" placeholder="Envianos tu Mensaje" required></textarea>
                                  </div>
                              </div>

                              <div className="text-center">
                              </div>
                          </div>

                      </div>
                  </form>
            
              </div>
      
                   
  
   
        <div className="col-12 col-md-6 col-lg-6 pb-5">

                  <form action="mail.php" method="post">
                      <div className="card border-primary rounded-0">
                          <div className="card-header p-0">
                              <div className="bg-info text-white text-center py-2">
                                  <h3><i className="fa fa-envelope"></i> Contato</h3>
                                  <p className="m-0">Ou fale conosco diretamente</p>
                              </div>
                          </div>
                          <div className="card-body p-3">

                           
                          </div>

                      </div>
                  </form>
              </div>
      </div>

    </div>
    
  </div>