
      function Miss_Num(a)
      {
        var n=a.length+1;
        sum1 = (n * (n + 1)) / 2;
        var r=0;
        
        for (var i = 0; i < n-1; i++) r=r+a[i];
        
  
        var miss_n=sum1-r;
        return miss_n;
      }

      //Example
      let x=[2, 1, 7, 4, 6, 3, 5]
      
      console.log("the missing num is: ",Miss_Num(x));
    
      