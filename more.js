function getRandom(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}
      function kj(){
         
          s=document.querySelectorAll('.col-lg-2');
          
          h=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]
         j=getRandom(h,6)
        
         for(i=0;i<48;i++)
        {
          s[i].style.display="none";
        }
        for(i=0;i<6;i++)
        {
          s[j[i]].style.display="block";
         
        }
      }