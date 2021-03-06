


var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope, $timeout) {
	
	$scope.imageSrcLength =  document.getElementsByClassName("image-source-value").length;
	 


	$scope.images = [
						{
							id: "test1",
							imageSrc : "http://imageslider.nfshost.com/images/watermelon-on-head.png",
							captionText: "Friendly, fruity friend keeping cool",
							altTextInput: "girl with watermelon on her head"
						
						},
						{
							id: "test2",
							imageSrc : "http://imageslider.nfshost.com/images/hit-the-pinata.png",
							captionText: "William Wallace at a children's party",
							altTextInput: "braveheart attacks a pinata"
						},
						{
							id: "test3",
							imageSrc : "http://imageslider.nfshost.com/images/reptile-business-man.png",
							captionText: "Tyrannosaurus Excel",
							altTextInput: "reptile businessman"
					
						}



	];


					

	$scope.sliderArray = [
			{
							sourceValue : "http://imageslider.nfshost.com/images/watermelon-on-head.png",
							captionTextValue : "Friendly, fruity friend keeping cool",
							altTextValue: "girl with watermelon on her head"
						
						},
						{
							sourceValue : "http://imageslider.nfshost.com/images/hit-the-pinata.png",
							captionTextValue: "William Wallace at a children's party",
							altTextValue: "braveheart attacks a pinata"
						},
						{
							sourceValue : "http://imageslider.nfshost.com/images/reptile-business-man.png",
							captionTextValue: "Tyrannosaurus Excel",
							altTextValue: "reptile businessman"
					
						}

	];


	$scope.addImage = function() {
		$scope.imageSrcLength =  document.getElementsByClassName("image-source-value").length+1;
		$scope.images.push({'id': 'test'+$scope.imageSrcLength});
	};


 $scope.getArray = function() {
 			$scope.sliderArray = [];
	 		$scope.imageSrcs = document.getElementsByClassName("image-source-value");
			$scope.altText = document.getElementsByClassName("alt-text-value");
			$scope.imageCaption = document.getElementsByClassName("caption-text");
			$scope.arrayLength = $scope.imageSrcs.length;

			for (var i = 0; i < $scope.arrayLength; i++) {
			
			if ($scope.imageSrcs[i].value.includes("340/auto/maxfit")) {

				$scope.imageSrcsChange = $scope.imageSrcs[i].value.replace("340/auto/maxfit/", "");
			}
			else {
				$scope.imageSrcsChange = $scope.imageSrcs[i].value;

			}

			if ($scope.imageSrcsChange[i].length > 0) {
					$scope.imageArray = {"sourceValue" : $scope.imageSrcsChange, "altTextValue" : $scope.altText[i].value, "captionTextValue" : $scope.imageCaption[i].value};		
					$scope.sliderArray.push($scope.imageArray);
				}
					
					
	 		};

	 	};
	 	$timeout($scope.getArray, 100);

	 $scope.createCode = function() {


	 	$scope.sliderArray = [];
	 		$scope.imageSrcs = document.getElementsByClassName("image-source-value");
			$scope.altText = document.getElementsByClassName("alt-text-value");
			$scope.imageCaption = document.getElementsByClassName("caption-text");
			

		


			 $scope.arrayLength = $scope.imageSrcs.length;
			for (var i = 0; i < $scope.arrayLength; i++) {

			if ($scope.imageSrcs[i].value.length > 0) {
					$scope.imageArray = {"sourceValue" : $scope.imageSrcs[i].value, "altTextValue" : $scope.altText[i].value, "captionTextValue" : $scope.imageCaption[i].value};
				
						$scope.sliderArray.push($scope.imageArray);
				}
							
				
				

					
					
	 		};

	 		function fireCode() {
    
			    var previewDiv = document.getElementsByClassName('container-slide-preview');
			    var containerHeight = document.getElementsByClassName('container-fixed');
			    var slideWidth = document.getElementsByClassName('individual-slide');
			    var previewHeight = document.getElementsByClassName('image-preview-fixed');
			    while(previewDiv[0]) {
			      previewDiv[0].parentNode.removeChild(previewDiv[0]);
			    }

			    
			    for (var i = 0; i <= containerHeight.length - 1; i++) {    
			      containerHeight[i].style.removeProperty('height');
			    }
			    for (var i = 0; i <= slideWidth.length - 1; i++) {        
			      slideWidth[i].style.removeProperty('width');
			    }
			    for (var i = 0; i <= previewHeight.length - 1; i++) {    
			      previewHeight[i].style.removeProperty('height');
			    }
			    document.getElementsByClassName('individual-slide')[0].className = 'selected-img individual-slide';
			     var captionDiv = document.getElementsByClassName("caption");
			     var captionLength = document.getElementsByClassName("caption").length;
			      console.log(captionLength);
			       console.log(captionDiv);
			        for (var i = 0; i < captionLength -1 ; i++) {

			          if (captionDiv[i].getElementsByTagName('p')[0].innerHTML.length == 0) {
			            captionDiv[i].className = "hide-this caption"
			          }
			        }

			    var codeSample = document.getElementById('notesId');
			    var clonedV = codeSample.innerHTML;
			    var imageLocal = "http://cmsimages.motortrak.com"
			    var noCaption = "<div class=\"hide-this caption\"><p class=\"ng-binding\"></p></div>"
			    var clonedV2 = clonedV.replace(RegExp(imageLocal, "g"), "").replace(RegExp(noCaption, "g"), "");
			    document.getElementById("codeOutput").value = clonedV2

			}

			setTimeout(fireCode, 200); 
			}
				})



