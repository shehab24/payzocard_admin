var drag_area=document.querySelector(".drag_area");
var file_btn=document.querySelector("#file");
var uploading =document.querySelector(".uploading_div");
var first_drag_con =document.querySelector(".drag_area_first_content");
var arrow_top =document.querySelector(".arrow_top");
var uploading_div_img =document.querySelector(".uploading_div img");
var progress_bar =document.querySelector(".progress_img img");
var progress_img =document.querySelector(".progress_img");
var preview =document.querySelector(".preview");
var preview_box =document.querySelector(".preview_box");
var Click_file =document.querySelector(".click_file");
let file ;

drag_area.addEventListener("dragover",function(event){
    event.preventDefault();
    first_drag_con.classList.add("hide");
    arrow_top.classList.add("active");
    uploading_div_img.classList.add("active");
    uploading.classList.add("active");
    progress_img.classList.add("active");
   
})

drag_area.addEventListener("dragleave",function(){
    first_drag_con.classList.remove("hide");
    arrow_top.classList.remove("active");
    uploading_div_img.classList.remove("active");
    uploading.classList.remove("active");
  
})


drag_area.addEventListener("drop",function(event){
   event.preventDefault();
  file =event.dataTransfer.files[0];
  arrow_top.classList.remove("active");
  uploading_div_img.classList.remove("active");
  dosomething( function(){
    setTimeout(function(){ ShowFile(); }, 2000);
});


 
})
file_btn.addEventListener("change", function(){
    file= this.files[0];
    first_drag_con.classList.add("hide");
    dosomething( function(){
        setTimeout(function(){ ShowFile(); }, 2000);
    });
    

});


function ShowFile(){
    let fileType= file.type;
    let filereader=new FileReader();
    if(fileType=="application/pdf"){
     filereader.onload = ()=>{
         let fileurl =filereader.result;
        // PDFObject.embed(fileurl, drag_area);
        // PDFObject.embed(fileurl, preview);
        let copy =`<embed src="${fileurl}#toolbar=0&navpanes=0&scrollbar=0&zoom=30" type="application/pdf" width="100%" height="100%" />`;
        let second_copy =`<embed src="${fileurl}#toolbar=0&navpanes=0&scrollbar=0&view=fit" type="application/pdf" width="100%" height="100%" />`;
        drag_area.innerHTML=copy;
        preview.innerHTML=second_copy;
       
     }
    }else{
     filereader.onload = ()=>{
         let fileurl =filereader.result;
         let img =`<img src="${fileurl}" />`;
         drag_area.innerHTML= img;
         preview.innerHTML= img;
     }
    }
 
    filereader.readAsDataURL(file);
    preview_box.classList.add("active");
}

  

    function dosomething( callback){
        progress_bar.classList.add("active");
        
        
        if(typeof callback == "function") 
        callback();
    }


 

    // function click_func(){
    //     alert("ujgy");
    // }


    // $(document).ready(function () {
    //     $(".default_option").click(function () {
    //       $(this).parent().toggleClass("active");
    //     });

    //     $(".select_ul li").click(function () {
    //       var currentele = $(this).html();
    //       $(".default_option li").html(currentele);
    //       $(this).parents(".select_wrap").removeClass("active");
    //     });
    //   });

   
    