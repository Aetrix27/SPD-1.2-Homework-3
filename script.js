$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

function addCart(){
  $('exampleModal').modal.('hide');
  showAlert("Item Added To Cart", "alert-success")

}

function showAlert(message, alertType){

  $('exampleAlert').append($#'exampleAlert').append(
    '<div id = "alertdiv" class = "alert alert-dismissable fixed-top" + alertType + >
        '+message+'
    </div>'
  )
}
