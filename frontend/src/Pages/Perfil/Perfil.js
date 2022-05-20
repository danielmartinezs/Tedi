import React from 'react'



const Perfil=()=> {
    return (
        <>
        <div className="container-emp-profile">
           <form method="">
                <div className="row">
                    <div className="col-md-4">
                            <div className="profile-img">
                            <img  alt="thapa" srcset=""/>
                            </div>
                            
                    </div>
S
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>Nombre</h5>
                            <h6>Rol</h6>
                            <p className="profile-rating mt-3 mb-5">Ranking</p>



                        </div>

                    </div>
                        <div className="col-md-2">
                            <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Editar Perfil"/>
                        </div>

                </div>
                <div className="row">
                    {/*left side*/}
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>Links</p>

                        </div>

                    </div>
                </div>
                    {/*Lado derecho*/}
                    <div className="col-md-8 pl-5 about-info">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id ="home" role="tabpanel" aria-labelledby="home-tab">
                                
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Nombre</label>

                                    </div>
                                    <div className="col-md-6">
                                        <p> Jorge</p>
                                    </div>

                                    <div className="row">
                                    <div className="col-md-6">
                                        <label>Edad</label>

                                    </div>
                                    <div className="col-md-6">
                                        <p> 12</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Semestre</label>

                                    </div>
                                    <div className="col-md-6">
                                        <p> Primarera 12</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    
                </div>

           </form>
            
        </div>
        </>
    )
}


export default Perfil