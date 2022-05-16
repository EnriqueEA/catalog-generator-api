const inicioHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
  <style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .img {
    width: 200px;
  }
  .container {
    width: 90%;
    margin: 0 auto;
  }
  .table {
    display: flex;
    flex-direction: column;
    border: 1px solid #00000070;
    border-radius: .3rem;
  }
  .table-header {
    display: flex;
    font-weight: 600;
  }
  .table-header>*,
  .row>* {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .table>* {
    border-bottom: 1px solid #00000070;
  }
  .table>*:nth-last-child(1) {
    border-bottom: none;
  }
  .row {
    display: flex;
  }
</style>
  </head>
  <body>
    <div class="container">
      <header class="header">
        <img src="https://http2.mlstatic.com/D_898303-MLM48042518059_102021-O.jpg" alt="" class="img">
        <span>Descripción</span>
      </header>
      <div class="table">
        <div class="table-header">
          <p>Producto</p>
          <p>Descripción</p>
          <p>Precio</p>
        </div>
`;

const cierreHtml = `
      </div>
    </div>
  </body>
</html>
`;

exports.html = { inicioHtml, cierreHtml };
