
  $(function(){
// this onchange can show user which img they pick up and change the src into new 
    $('#alertType').on('change',function(){
        var x = $('#alertType').val();
       if(x !== 'icons8-warning-96'){
         $('img').attr('src', './IMG/'+ x +'.gif');
       }else{
        $('img').attr('src', './IMG/'+ x +'.png');
       }
        })
    

// this part will show the img and message
      function showAlert(message) {
    // Display the custom alert dialog box
    $("#custom-alert").removeClass("hidden");
    $("#custom-alert-message").text(message);
  
// Hide the custom alert dialog box after 2 seconds
    setTimeout(function() {
      $("#custom-alert").addClass("hidden");
    }, 1200);
  
  }
  $('#alert').on('click',function(){
// when people click the button it will get the value of textbox when user type in,and set it to alert message
    let contentVal = $('#alertContent').val();
    console.log(contentVal)
    showAlert(contentVal)
  })
})