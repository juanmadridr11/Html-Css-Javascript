<!doctype html>
<html lang="es">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

    <title>Juan remembers</title>

    <link rel="stylesheet" href="ll.css">
    <link rel="stylesheet" href="css/all.min.css">
  </head>
  <body>
      <div class="container-fluid nav-text1 ">
          <div class="container-fluid navs-text1">
            <span class="h11">Dynamic reminders</span>
            <p class="p1 ">Don't forget your homework anymore</p>
          </div>
      </div>
      <div class="container">

        <div class="row nav-container1">
            
          <div class="col-md-6">
                
              <div id="div1">
                <h3><i class="fas fa-calendar-plus"></i> New reminder</h3>
              </div>
              <br>
              <div class="form-group text-center">
              
                <textarea class="form-control" id="texto" rows="5"></textarea>
                <br>
                <div class="row">
                  
                  <div class="col-md-6"> <button type="button" class="btn btn-outline-success form-control" id="boton"  aria-hidden= "true"><i class="fas fa-piggy-bank"></i> Save</button></div>
                  <div class="col-md-6"><button type="button" class="btn btn-outline-danger"aria-hidden="true" id="boton1"><i class="fas fa-trash-alt"></i> Sart clear</button></div>
                </div>
                

              </div>
              <div id="error"></div>
          </div>
            
          <div class="col-md-6">
              
            <div id="div2">
                
              <h3><i class="fas fa-exclamation-circle"></i> Pendings</h3>
              
            </div>
            <br>
            <div id="recordatorios">
            </div>
          </div>
        </div>
      </div>      


    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
    <script src="java.js"></script>
  </body>
</html>


