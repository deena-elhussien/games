

export class Display{
    constructor(){

    }
    displayData(data){
    
        let content= ``
        for(let item of data){
            
            content+=`
            <div class="col-lg-4 col-md-6">
                        <div class="card-group">
                            <div class="card bg-transparent ">
                              <img src="${item.thumbnail}" class="card-img-top p-3" alt="...">
                              <div class="card-body text-white">
                                <div class="d-flex justify-content-between ">
                                    <h5 class="fs-6">${item.title}</h5>
                                    <button class="btn btn-secondary">free</button>
                                </div>
                                <p class="text-secondary fs-6 mt-2 "> ${item.short_description}
    
                                </p>
                              </div>
                              
                              <div class="card-footer text-white d-flex justify-content-between">
                                <small >${item.genre}</small>
                                <small >${item.platform}</small>
                              </div>
                            </div>
                                  </div>
                </div>
        `
    }
    document.getElementById("rowData").innerHTML= content
}

}