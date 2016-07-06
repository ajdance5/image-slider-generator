  

  $(document).ready(function(){




  window.addEventListener("load", scriptToLoad, false);
    
    function scriptToLoad(){

      

            //Create preview tiles from main image

            $(".full-slider-section").each(function() {              
              var previewContent = $(this).find('.container-slide').clone().removeClass("container-slide").addClass("container-slide-preview");
              $(this).find('.image-preview-fixed').append(previewContent);
            });
               //Remove caption from preview
              $('.container-slide-preview').find('.caption').remove('.caption');
              $(".image-preview-fixed div section").removeClass("individual-slide").addClass("individual-slide-preview");
               $(".image-preview-fixed div section img").removeAttr("data-remodal-target");
            
            



          
              

                 function  previewSizing() {
              //Individual Slide Width
                    $(".full-slider-section").each(function() {  
                          var numberDivs = $(this).find(".container-slide-preview section").length;
                  
                          if (numberDivs <= 6) {
                            var previewWidth = $(this).find(".image-preview-fixed").width();

                            $(this).find(".individual-slide-preview").css("width", previewWidth / numberDivs + "px");
                           }
                      
                          if (numberDivs > 6) {
                              var previewWidth = $(this).find(".image-preview-fixed").width();
                              var previewWidth6 = previewWidth / 6;
                               $(this).find(".individual-slide-preview").css("width", previewWidth6 + "px");
                              }
                          //Preview Height
                          var previewSlideHeight = $(this).find('.container-slide-preview').height();
                          $(this).find(".image-preview-fixed").css("height", previewSlideHeight + "px");  
                          });

                        }
                   
                    
                        function slideShowSizing() {
                          $(".full-slider-section").each(function() {  
                              var sliderWidth = $(this).find(".container-fixed").width();
                         
                              $(this).find(".individual-slide").css("width", sliderWidth);
                             
                              var sliderHeight = $(this).find(".container-slide").height();
                              $(this).find(".container-fixed").css("height", sliderHeight);
                               $(this).find('.trans-box').css("height", sliderHeight);
                         });
                       }
              
                previewSizing();
                slideShowSizing();

                
               
            $('.primary-button').click(function() {


              function imageSliderClick() { 
                 $(".full-slider-section").each(function() { 

                var oneSlide = $(this).parent().parent().find(".individual-slide")[0].getBoundingClientRect().width;
                var leftValue = $(this).parent().parent().find(".container-slide").css("left");
                var leftValueParse = parseFloat(leftValue, 10);
                var indivPrevWidth = $(this).parent().parent().find(".individual-slide-preview")[0].getBoundingClientRect().width;
                var prevLeftValue = $(this).parent().parent().find(".container-slide-preview").css("left");
                var prevLeftValueParse = parseFloat(prevLeftValue); 

                previewSizing();
                slideShowSizing();
                
                //Reposition main images on resize
                var newOneSlide = $(this).find(".individual-slide")[0].getBoundingClientRect().width;
               
          

                var oneSlideDiff = Math.abs(oneSlide/newOneSlide)
                var newLeftValue = Math.abs(leftValueParse/oneSlideDiff);
                $(this).find(".container-slide").css("left", - newLeftValue);

                
                //Reposition preview slides
                //Get width of individual slide
                var newPreviewTile = $(this).find(".individual-slide-preview")[0].getBoundingClientRect().width;
                var prevSlideDiff = Math.abs(indivPrevWidth/newPreviewTile);
               
                //Get new left value
                var newPrevLeftValue = Math.abs(prevLeftValueParse/prevSlideDiff);
              
                //set new left value
              
                $(this).find(".container-slide-preview").css("left", - newPrevLeftValue);
       
                
                //Recalculate values
                sliderWidth = $(this).find(".container-fixed")[0].getBoundingClientRect().width;  
                oneSlide = $(this).find(".individual-slide")[0].getBoundingClientRect().width;             
                rightStop = $(this).find(".container-slide")[0].getBoundingClientRect().width; 
                leftValue = $(this).find(".container-slide").css("left");
                leftValueParse = parseFloat(leftValue, 10);
               

                indivPrevWidth = $(this).find(".individual-slide-preview")[0].getBoundingClientRect().width;
                prevLeftValue = $(this).find(".container-slide-preview").css("left");
                prevLeftValueParse = parseFloat(prevLeftValue);
                previewSlideWidth = $(this).find('.individual-slide-preview')[0].getBoundingClientRect().width;
              
              });
            }

            setTimeout(imageSliderClick, 200)

            });    
           
            /*$('.plus-image').click(function(){
                function resizeAfter() {
                   $(".full-slider-section").each(function() { 

                        var oneSlide = $(this).parent().parent().find(".individual-slide")[0].getBoundingClientRect().width;
                        var leftValue = $(this).parent().parent().find(".container-slide").css("left");
                        var leftValueParse = parseFloat(leftValue, 10);
                        var indivPrevWidth = $(this).parent().parent().find(".individual-slide-preview")[0].getBoundingClientRect().width;
                        var prevLeftValue = $(this).parent().parent().find(".container-slide-preview").css("left");
                        var prevLeftValueParse = parseFloat(prevLeftValue); 

                        previewSizing();
                        slideShowSizing();
                        
                        //Reposition main images on resize
                        var newOneSlide = $(this).find(".individual-slide")[0].getBoundingClientRect().width;
                       
                  

                        var oneSlideDiff = Math.abs(oneSlide/newOneSlide)
                        var newLeftValue = Math.abs(leftValueParse/oneSlideDiff);
                        $(this).find(".container-slide").css("left", - newLeftValue);

                        
                        //Reposition preview slides
                        //Get width of individual slide
                        var newPreviewTile = $(this).find(".individual-slide-preview")[0].getBoundingClientRect().width;
                        var prevSlideDiff = Math.abs(indivPrevWidth/newPreviewTile);
                       
                        //Get new left value
                        var newPrevLeftValue = Math.abs(prevLeftValueParse/prevSlideDiff);
                      
                        //set new left value
                      
                        $(this).find(".container-slide-preview").css("left", - newPrevLeftValue);
               
                        
                        //Recalculate values
                        sliderWidth = $(this).find(".container-fixed")[0].getBoundingClientRect().width;  
                        oneSlide = $(this).find(".individual-slide")[0].getBoundingClientRect().width;             
                        rightStop = $(this).find(".container-slide")[0].getBoundingClientRect().width; 
                        leftValue = $(this).find(".container-slide").css("left");
                        leftValueParse = parseFloat(leftValue, 10);
                       

                        indivPrevWidth = $(this).find(".individual-slide-preview")[0].getBoundingClientRect().width;
                        prevLeftValue = $(this).find(".container-slide-preview").css("left");
                        prevLeftValueParse = parseFloat(prevLeftValue);
                        previewSlideWidth = $(this).find('.individual-slide-preview')[0].getBoundingClientRect().width;
                      
                    });
                 }
                 setTimeout(resizeAfter, 2000);
            });*/

            $(window).on('resize', function(){

              $(".full-slider-section").each(function() { 

                var oneSlide = $(this).parent().parent().find(".individual-slide")[0].getBoundingClientRect().width;
                var leftValue = $(this).parent().parent().find(".container-slide").css("left");
                var leftValueParse = parseFloat(leftValue, 10);
                var indivPrevWidth = $(this).parent().parent().find(".individual-slide-preview")[0].getBoundingClientRect().width;
                var prevLeftValue = $(this).parent().parent().find(".container-slide-preview").css("left");
                var prevLeftValueParse = parseFloat(prevLeftValue); 

                previewSizing();
                slideShowSizing();
                
                //Reposition main images on resize
                var newOneSlide = $(this).find(".individual-slide")[0].getBoundingClientRect().width;
               
          

                var oneSlideDiff = Math.abs(oneSlide/newOneSlide)
                var newLeftValue = Math.abs(leftValueParse/oneSlideDiff);
                $(this).find(".container-slide").css("left", - newLeftValue);

                
                //Reposition preview slides
                //Get width of individual slide
                var newPreviewTile = $(this).find(".individual-slide-preview")[0].getBoundingClientRect().width;
                var prevSlideDiff = Math.abs(indivPrevWidth/newPreviewTile);
               
                //Get new left value
                var newPrevLeftValue = Math.abs(prevLeftValueParse/prevSlideDiff);
              
                //set new left value
              
                $(this).find(".container-slide-preview").css("left", - newPrevLeftValue);
       
                
                //Recalculate values
                sliderWidth = $(this).find(".container-fixed")[0].getBoundingClientRect().width;  
                oneSlide = $(this).find(".individual-slide")[0].getBoundingClientRect().width;             
                rightStop = $(this).find(".container-slide")[0].getBoundingClientRect().width; 
                leftValue = $(this).find(".container-slide").css("left");
                leftValueParse = parseFloat(leftValue, 10);
               

                indivPrevWidth = $(this).find(".individual-slide-preview")[0].getBoundingClientRect().width;
                prevLeftValue = $(this).find(".container-slide-preview").css("left");
                prevLeftValueParse = parseFloat(prevLeftValue);
                previewSlideWidth = $(this).find('.individual-slide-preview')[0].getBoundingClientRect().width;
              
              });

            });
            


            //Left arrow nav
        
              $(".nav-left").click(function() {
                var sliderWidth = $(this).parent().parent().find(".container-fixed").width();
                var numberDivs = $(this).parent().parent().find(".container-slide-preview section").length;
                 var oneSlide = $(this).parent().parent().find(".individual-slide")[0].getBoundingClientRect().width;
                var rightStop = $(this).parent().parent().find(".container-slide")[0].getBoundingClientRect().width;
                var leftValue = $(this).parent().parent().find(".container-slide").css("left");
                var leftValueParse = parseFloat(leftValue, 10);
                var indivPrevWidth = $(this).parent().parent().find(".individual-slide-preview")[0].getBoundingClientRect().width;
                var prevLeftValue = $(this).parent().parent().find(".container-slide-preview").css("left");
                var prevLeftValueParse = parseFloat(prevLeftValue);   
                var previewSlideWidth = $(this).parent().parent().find('.individual-slide-preview')[0].getBoundingClientRect().width;
                  
                if ($(":animated").length) {
                  return false;
                } 

                else {
                  

                   if ($(this).parent().parent().find(".container-slide-preview section:nth-of-type(n+2)").hasClass("selected-img"))  
                    {
                      
                       $(this).parent().parent().find(".selected-img").removeClass("selected-img").prev().addClass("selected-img");
                       $(this).parent().parent().find(".container-slide").animate({left : '+=' + sliderWidth}, 500);

                        leftValue = $(this).parent().parent().find(".container-slide").css("left");
                        leftValueParse = parseFloat(leftValue, 10) + oneSlide;
                        indivPrevWidth = $(this).parent().parent().find(".individual-slide-preview")[0].getBoundingClientRect().width;
                        prevLeftValue = $(this).parent().parent().find(".container-slide-preview").css("left");
                        prevLeftValueParse = parseFloat(prevLeftValue) + indivPrevWidth;
                        
                        if ($(this).parent().parent().find(".container-slide-preview section:nth-of-type(n+2)").hasClass("selected-img"))
                          {
                            $(this).parent().parent().find(".nav-left svg").css("opacity", "1");
                            $(this).parent().parent().find(".nav-right svg").css("opacity", "1");
                            $(this).parent().parent().find(".nav-arrow svg").css("cursor", "pointer");  
                          }

                          else  {
                            $(this).parent().parent().find(".nav-left svg").css("opacity", "0.2");
                            $(this).parent().parent().find(".nav-left svg").css("cursor", "default");
                          }
                     }
 
                }

                if (numberDivs > 6) {
                    if ($(this).parent().parent().find(".container-slide-preview section:nth-of-type(n+4):nth-of-type(-n+" + (numberDivs - 3) + ")").hasClass("selected-img")) {
                        

                              $(this).parent().parent().find(".container-slide-preview").animate({left : "+=" + previewSlideWidth}, 500);
                             if ($(":animated").length) {
                              return false;
                              } 

                              else {
                                          prevLeftValue = $(this).parent().parent().find(".container-slide-preview").css("left");
                                           prevLeftValueParse = parseFloat(prevLeftValue) + indivPrevWidth;
                                         }
                          }

                   if ($(this).parent().parent().find(".container-slide-preview section:nth-of-type(n+3):nth-of-type(-n+4)").hasClass("selected-img") && parseInt($(".container-slide-preview").css('left')) < 0) {
                           $(this).parent().parent().find(".container-slide-preview").animate({left : "+=" + previewSlideWidth}, 500);
                              
                             if ($(":animated").length) {
                              return false;
                              } 

                              else {
                                          prevLeftValue = $(this).parent().parent().find(".container-slide-preview").css("left");
                                           prevLeftValueParse = parseFloat(prevLeftValue) + indivPrevWidth;
                                         }
                   }       

                 
                }

                prevLeftValue = $(this).parent().parent().find(".container-slide-preview").css("left");
               prevLeftValueParse = parseFloat(prevLeftValue); 

            });
          
            
            $(".nav-right").each(function() {

              $(this).click(function() {

                var sliderWidth = $(this).parent().parent().find(".container-fixed").width();
                var numberDivs = $(this).parent().parent().find(".container-slide-preview section").length;
                var oneSlide = $(this).parent().parent().find(".individual-slide")[0].getBoundingClientRect().width;
                var rightStop = $(this).parent().parent().find(".container-slide")[0].getBoundingClientRect().width;
                var leftValue = $(this).parent().parent().find(".container-slide").css("left");
                var leftValueParse = parseFloat(leftValue, 10);
                var indivPrevWidth = $(this).parent().parent().find(".individual-slide-preview")[0].getBoundingClientRect().width;
                var prevLeftValue = $(this).parent().parent().find(".container-slide-preview").css("left");
                var prevLeftValueParse = parseFloat(prevLeftValue);   
                var previewSlideWidth = $(this).parent().parent().find('.individual-slide-preview')[0].getBoundingClientRect().width;

                  if ($(":animated").length) 
                    {
                     
                      return false;
                    } 

                  else {

                    //moving preview highlight + controlling arrow svgs
                     if ($(this).parent().parent().find(".container-slide-preview section:nth-of-type(-n+" + (numberDivs - 1) + ")").hasClass("selected-img"))  
                      {
                       
                        $(this).parent().parent().find(".selected-img").removeClass("selected-img").next().addClass("selected-img");
                        $(this).parent().parent().find(".container-slide").filter(':not(:animated)').animate({left : '-=' + sliderWidth}, 500);
                          
                          
                        
                          leftValue = $(this).parent().parent().find(".container-slide").css("left");
                          leftValueParse = parseFloat(leftValue, 10) - oneSlide;
                          prevLeftValue = $(this).parent().parent().find(".container-slide-preview").css("left");
                          prevLeftValueParse = parseFloat(prevLeftValue) - indivPrevWidth;
                          var fullPreviewSlideWidth = $(this).parent().parent().find('.container-slide-preview')[0].getBoundingClientRect().width;
                          var parseRightOffset = - parseInt(fullPreviewSlideWidth - (6*indivPrevWidth));
                          var leftPlacement = parseInt($(this).parent().parent().find(".container-slide-preview").css('left'));

                        if ($(this).parent().parent().find(".container-slide-preview section:nth-of-type(-n+" + (numberDivs - 1) + ")").hasClass("selected-img"))  
                        {  
                              $(this).parent().parent().find(".nav-left svg").css("opacity", "1");
                              $(this).parent().parent().find(".nav-left svg").css("opacity", "1");
                              $(this).parent().parent().find(".nav-arrow svg").css("cursor", "pointer");
                        }

                        else   
                        {
                                $(this).parent().parent().find(".nav-right svg").css("opacity", "0.4");
                                $(this).parent().parent().find(".nav-right svg").css("cursor", "default");
                         }
                           
                     }

                 

                  } 

                   if (numberDivs > 6) {
                         if ($(this).parent().parent().find(".container-slide-preview section:nth-of-type(n+4):nth-of-type(-n+" + (numberDivs - 3) + ")").hasClass("selected-img")) 
                         {     
                              $(this).parent().parent().find(".container-slide-preview").animate({left : "-=" + previewSlideWidth}, 500);
                              
                               if ($(":animated").length) {
                              return false;
                            } 

                            else {
                                        prevLeftValue = $(this).parent().parent().find(".container-slide-preview").css("left");
                                         prevLeftValueParse = parseFloat(prevLeftValue) + indivPrevWidth;
                                       }
                         }

                          if ($(this).parent().parent().find(".container-slide-preview section:nth-of-type(n+" + (numberDivs - 2) + ")").hasClass("selected-img") && leftPlacement > parseRightOffset) {
                              
                              $(this).parent().parent().find(".container-slide-preview").animate({left : "-=" + previewSlideWidth}, 500);
                              
                               if ($(":animated").length) {
                              return false;
                            } 

                            else {
                                        prevLeftValue = $(this).parent().parent().find(".container-slide-preview").css("left");
                                         prevLeftValueParse = parseFloat(prevLeftValue) + indivPrevWidth;
                                       }
                          }

                     
                   }
                  prevLeftValue = $(".container-slide-preview").css("left");
                  prevLeftValueParse = parseFloat(prevLeftValue);  
                });
             });
          
          function positionRemodal() {

            newRemodalOneSlide = $('.image-slider-remodal').find('.container-fixed').width();
          }

      

        $('.individual-slide img').click(function() {

            var remodalLeftValue = $(this).parent().parent().css("left");
            var remodalLeftValueParse = parseFloat(remodalLeftValue); 
            var remodalOneSlide = $(this).parent().parent().find('.individual-slide')[0].getBoundingClientRect().width;
            $('.image-slider-remodal .full-slider-section').remove();
            $(this).parent().parent().parent().parent().parent().clone(true, true).appendTo('.image-slider-remodal');
            
            setTimeout(previewSizing, 100);
            setTimeout(slideShowSizing, 100);
            
            var newRemodalOneSlide = $('.image-slider-remodal').find('.individual-slide').width();
            var remodalOneSlideDiff = Math.abs(remodalOneSlide/newRemodalOneSlide);
            var newRemodalLeftValue = Math.abs(remodalLeftValueParse/remodalOneSlideDiff);

            function remodalNewSize() {newRemodalOneSlide = $('.image-slider-remodal').find('.individual-slide').width();}
            function remodalDiff() {remodalOneSlideDiff = Math.abs(remodalOneSlide/newRemodalOneSlide);}
            function remodalLeft() {newRemodalLeftValue = Math.abs(remodalLeftValueParse/remodalOneSlideDiff);}
            setTimeout(remodalNewSize, 100);
            setTimeout(remodalDiff, 100);
            setTimeout(remodalLeft, 100);
           

            function changeLeft() {
                $('.image-slider-remodal').find(".container-slide").css("left", - newRemodalLeftValue);
            }
            
            setTimeout(changeLeft, 100);
            
            console.log(remodalLeftValue);/*Correct*/
            console.log(remodalLeftValueParse);/*Correct*/
            console.log(remodalOneSlide);/*Correct*/

            console.log(newRemodalOneSlide);
            console.log(newRemodalLeftValue);
            
          
        });

      


  };  

  $(document).on("click", '.plus-image', function(){

       
              
     $(".container-slide").css("left", 0);
     $(".container-slide-preview").css("left", 0);      
      $(".container-slide-preview").remove(); 

        function removeCaption() {

              var captionDiv = document.getElementsByClassName("caption");
              var captionLength = document.getElementsByClassName("caption").length;
            
              for (var i = 0; i < captionLength -1 ; i++) {
                if (captionDiv[i].getElementsByTagName('p')[0].innerHTML.length == 0) {
                  captionDiv[i].className = "caption hide-this";
                }
              } 

        }
        function addSelected() {
          $(".container-slide section:first-of-type").addClass('selected-img');

        }
       
      setTimeout(addSelected, 250);   
      setTimeout(scriptToLoad, 300);
      setTimeout(removeCaption, 400); 

    });
    

  $(document).on("click", '.button', function(){
     
     function addSelected() {
          $(".container-slide section:first-of-type").addClass('selected-img');
        }
      
      setTimeout(addSelected, 250)
      setTimeout(scriptToLoad, 500); 
 

    });




 


    });

  