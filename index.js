var services=document.getElementById("Services")

var originalContent = `<div data-aos="fade-up" data-aos-delay="100">
            <div class="icon flex-shrink-0"><i class="bi bi-briefcase"></i></div>
            <div>
              <h4 class="title"><a href="service-details.html" class="stretched-link">TITLE</a></h4>
              <p class="description">DESCRIPTION</p>
            </div>
          </div>`
          

          fetch('http://localhost:2008/services')
      .then(response => response.json())
      .then(json => 
       json.teachers.forEach(element => {
         
            var content=originalContent
             content=content.replace('TITLE',element.A);

                  content=content.replace('DESCRIPTION',element.B)
            
            var div =document.createElement('div'); 
            div.innerHTML=content
            div.className="col-lg-4 col-md-6 service-item d-flex" 
            services.appendChild(div)
            //div.style="border:red dashed 5px"
            
          
          
        })



      )



         
            