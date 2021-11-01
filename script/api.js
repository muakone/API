

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        /*localStorage.setItem("allData",data) */


      /*  const allData = localStorage.getItem("allData")
        console.log("allData",allData)
        
       const allData = Object.assign({},data)
       console.log(allData)

       localStorage.setItem("allData",allData)
       let all = localStorage.getItem("allData")

       all = JSON.stringify(all)
       console.log(all)
       */
        let postLayout = document.getElementById('post-layout')
        let html = ""
        data.forEach(e => {
     
            
           html += `
                    <div class="col-md-4 mb-5">
                        <div class="card h-100  shadow-sm mb-5 bg-body rounded">
                            <div class="card-body">
                                 <div class="d-flex justify-content-end">
                                       <h4 class="text-danger">${e.id}</h4>
                                 </div>
                                <h5 class="card-title mb-4 fw-bold">${e.title}</h5>
                                <p class="card-text">${e.body}</p>
                            </div>
                            <div class="mb-3 ms-3">
                               <button class="btn btn-success" id="click" onclick="singlePage(${e.id})" type="submit">check it out</button>
                            </div>
                        </div>
                    </div>
            `

            postLayout.innerHTML = html
        });
    })
}

getPosts();



  function singlePage(id) {
    localStorage.setItem("postPage", id);


   let postPage = localStorage.getItem("postPage");
    console.log(postPage);

    fetch(`https://jsonplaceholder.typicode.com/posts/${postPage}`)
    .then(response => response.json())
    .then((e) => {

        let postLayout = document.getElementById('post-layout')

        let html = "";

        html = `

        <div class="container">
            <div class="card h-100 shadow-sm bg-body rounded" onclick="singlePage()">
                <div class="card-body">
                    <div class="d-flex justify-content-end">
                        <h4 class="text-danger">${e.id}</h4>
                    </div>
                    <h5 class="card-title mb-4 fw-bold">${e.title}</h5>
                    <p class="card-text">${e.body}</p>
                </div>
                <div class = "mb-3 ms-3">
                    <a href="index.html">
                        <button class="btn btn-danger" type="submit"> Back to post <img src="./images/arrow-right.svg" alt=""> </button>
                    </a>
                </div>
            </div>
        </div>

        `

        postLayout.innerHTML = html
    });
}

