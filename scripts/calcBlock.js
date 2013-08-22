//applies damo's rendering logic
//input: an integer number between 0-99 inclusive
//output: writes to console


function calcBlock(num){
    
    var disp1 = {   text: " ",
                    dots: [0,0,0,0],
                    dashes: [0,0,0] };
             
    var disp2 = {   text: " ",
                    dots: [0,0,0,0],
                    dashes: [0,0,0] };
             
    var disp3 = {   text: "__________",
                    dots: [0,0,0,0],
                    dashes: [1,1,1] };
             
    
  
  
  if(num < 5){
      disp1.text = " ";
      disp1.dots=[0,0,0,0];
      disp1.dashes=[0,0,0];
      
      disp2 = numDots(num);
      
  }
  else if (num % 10 == 0){
        disp1 = calcLine(Math.floor(num/10 - 1));
        disp2 = disp1;
  
  }
  else if (num % 5 == 0){
        disp1.text = " ";
        disp1.dots=[0,0,0,0];
        disp1.dashes=[0,0,0];
      
        disp2 = calcLine(Math.floor(num/10));
  }
  else if (num % 10 < 5){
        disp1 = calcLine(Math.floor(num/10 - 1));
        disp2 = numDots(num % 5);
        
  }
  else if (num % 10 > 5){
        disp1 = numDots(num % 5);
        disp2 = calcLine(Math.floor(num/10));
        
  
  }
  
    console.log(disp1.text);
    console.log(disp2.text);
    console.log(disp3.text);
    
    return [disp1, disp2];
}

function numDots(num){
    var disp = {   text: "",
                    dots: [0,0,0,0],
                    dashes: [0,0,0]};
        
        for (i=1; i<=num; i++){
            disp.text = disp.text + ".  ";
            disp.dots[i-1] = true;
            
        }

    return disp;
}

function calcLine(digit){
    var disp = {   text: "",
                    dots: [0,0,0,0],
                    dashes: [0,0,0]};
    
    switch (digit){
    case 0:
        disp.text = " __";
        disp.dashes = [1,0,0];
        break;
    
    case 1:
        disp.text = " __   .";
        disp.dots = [0,0,1,0];
        disp.dashes = [1,0,0];
        break;
    
    case 2:
        disp.text = " __   .  .";
        disp.dots = [0,0,1,1];
        disp.dashes = [1,0,0];
        break;
 
    case 3:
        disp.text = ".   __";
        disp.dots = [1,0,0,0];
        disp.dashes = [0,1,0];
        break;
    
    case 4:
        disp.text = ".   __   .";
        disp.dots = [1,0,0,1];
        disp.dashes = [0,1,0];
        break;
 
    case 5:
        disp.text = ".  .   __";
        disp.dots = [1,1,0,0];
        disp.dashes = [0,0,1];
        break;
    
    case 6:
        disp.text = " __ __";
        disp.dashes = [1,1,0];
        break;
               
    case 7:
        disp.text = " __ __   .";
        disp.dots = [0,0,0,1];
        disp.dashes = [1,1,0];
        break;
               
    case 8:
        disp.text = ".  __ __";
        disp.dots = [1,0,0,0];
        disp.dashes = [0,1,1];
        break;    
    case 9:
        disp.text = " __    __";
        disp.dashes = [1,0,1];
        break;
    }
    
    return disp;
}