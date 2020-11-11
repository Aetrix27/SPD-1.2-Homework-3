function addCart(){
  $('exampleModal').modal('hide');
  showAlert("Item Added To Cart", "alert-success")

}

function showAlert(message, alertType){

  $('exampleAlert').append( $('exampleAlert')).append(
    '<div id = "alertdiv" class = "alert alert-dismissable fixed-top' + alertType + '">' +
    '<a class="close" data-dismiss="alert" aria-label="close" > *</a>' +
        '<span>'+message+'</span>'+
    '</div>' )
  );

  setTimeout(function(){
    $('#alertdiv').remove();
  }, 3000);
}
