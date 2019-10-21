function ReviewPractice(){
  
}

ReviewPractice.prototype.countRedMarks = function(marks){
  marksArray = marks.split(",");
  redCount = 0;
  for (i=0; i<marksArray.length;i++){
    if (marksArray[i] === 'Red'){
      redCount++;
    }
  }
  return redCount;
}