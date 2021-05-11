

//https://stackoverflow.com/questions/22087076/how-to-make-a-simple-image-upload-using-javascript-html usr: clabe45 answered with this code *
window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            
  
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
  });