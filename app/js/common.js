
// $(document).ready(function(){   
// Dropzone.options.myAwesomeDropzone = {
//   paramName: "file", // The name that will be used to transfer the file
//   maxFilesize: 3, // MB
//   acceptedFiles: ".doc,.docx,.xls,.xlsx,application/msword",
//   dictResponseError: 'Server not Configured',
//   init:function(){
//       var self = this;
//       // config
//       self.options.addRemoveLinks = true;
//       self.options.dictRemoveFile = "Delete";
//       //New file added
//       self.on("addedfile", function (file) {
//         console.log('new file added ', file);
//       });
//       // Send file starts
//       self.on("sending", function (file) {
//         console.log('upload started', file);
//         $('.meter').show();
//       });
      
//       // File upload Progress
//       self.on("totaluploadprogress", function (progress) {
//         console.log("progress ", progress);
//         $('.roller').width(progress + '%');
//       });

//       self.on("queuecomplete", function (progress) {
//         $('.meter').delay(999).slideUp(999);
//       });
      
//       // On removing file
//       self.on("removedfile", function (file) {
//         console.log(file);
//       });
//     }
// };
// });
$(document).ready(function(){ 
$('.s-drop-inner input[type="file"]').ezdz({
	validators: {
       maxSize: 10000000,
    },
    text: 'Перетащите сюда файл<br/>или нажмите чтобы выбрать',
    reject: function(file, errors) {
    
    if (errors.mimeType) {
       $('.s-drop-inner .ezdz-dropzone div').text('Файл - "'+file.name+'"');
        $('.s-drop-inner').addClass('error');
    }
    if (errors.maxSize) {
      $('.s-drop-inner .ezdz-dropzone div').html('Допустимый размер файла 10Мб, выберите <br/>другой файл');
      $('.s-drop-inner').addClass('error');
      return false;
    }
      

    
  },
  accept: function(file) {
  			 $('.s-drop-inner').removeClass('error');
        $('.s-drop-inner .ezdz-dropzone div').text('Файл - "'+file.name+'"');
    }

});  

});
