//Do the below programs in anonymous function and IIFE function
//Anonymous Function:
//1.print odd numbers in an Array
var odd=function (arr){
    var temp=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
         temp.push(arr[i]);
        }
    }
    return temp;
}
console.log(odd([2, 5, 9, 6]));  
//2.convert all the strings to title caps in a string array.
var str1=function(arr){
    arr=arr.toLowerCase().split(" ");
    for(i=0;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
        
    }
    return arr.join(" ");
}
Input:
console.log(str1("guvi geek"));
//3.Sum of all numbers in an array.
var sumof=function(arr){
    sum=0;
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
Input:
console.log(sumof([1,2,3,4,5]));
//4.Return all the prime numbers in an array
var prime=function(arr){
    var res=[];
    for(i=0;i<arr.length;i++){
        var count=0;
        for(j=1;j<=arr[i];j++){
            if(arr[i]%j==0){
            count++;
        }
    }if(count==2){
        res.push(arr[i]);
    }
    }
    return res;
}
Input:
console.log(prime([2,3,4,5,6,7,8,9,10,11,13]));
//5.Remove duplicates from an array
var remove=function(arr){
let uniquearr = [...new Set(arr)];
return uniquearr;

}
Input:
console.log(remove([1,2,2,3,3,4,5]));

//6.Return all the palidromes of an array
var isPalindrome=function (arr){
    
    var ans=[];
    for(let i=0;i<arr.length;i++){
        
          let a=arr[i];
             let s=a;
    s = s.split('').reverse().join('');
    if( s == a){
     ans.push(arr[i]);
            
        }
    }
    return ans;
}
Input:
 console.log(PalindromicStrings(["abc", "car", "ada", "racecar", "cool"]));
Output:[ 'ada', 'racecar' ]
//7.Return median of two sorted arrays of the same size

var Median=function (arr1, arr2)
{
  var n1 = arr1.length;
var n2 = arr2.length;
if(n1==n2){
  var n=n1,n2;
}
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1
        for (count = 0; count <= n; count++)
    {
        
       
        if (arr1[i] <= arr2[j])
        {
            m1 = m2; 
            m2 = arr1[i];
            i++;
        }
        else{
            m1 = m2; 
            m2 = arr2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}
Input:
console.log(Median([1, 3, 6, 26, 38],[2, 4, 6, 30, 45]));
Output:
6
//8.Rotate an array by k times

var rotate =function(arr,k){
    if(arr.length===k || k===0){
       return arr; 
    }
    else{
        for(i=0;i<k;i++){
            arr.unshift(arr.pop());
        }
    }
    
    return arr;
}
Input:
console.log(rotate([3,8,9,7,6],3));
Output:
[ 9, 7, 6, 3, 8 ]

//IIFE Function:
//1.print odd numbers in an Array
//IIFE function:
(function (arr){
    var temp=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
         temp.push(arr[i]);
        }
    }
    console.log(temp);
})([2, 5, 9, 6]);  

//2.convert all the strings to title caps in a string array.
//IIFE function:
(function(arr){
    arr=arr.toLowerCase().split(" ");
    for(i=0;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
        
    }
    console.log(arr.join(" "));
})("guvi geek");

//3.Sum of all numbers in an array.
//IIFE function:
(function(arr){
    sum=0;
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    console.log(sum);
})([1,2,3,4,5]);

//4.Return all the prime numbers in an array
//IIFE Function:
(function(arr){
    var res=[];
    for(i=0;i<arr.length;i++){
        var count=0;
        for(j=1;j<=arr[i];j++){
            if(arr[i]%j==0){
            count++;
        }
    }if(count==2){
        res.push(arr[i]);
    }
    }
    console.log(res);
})([2,3,4,5,6,7,8,9,10,11,13]);

//5.Return all the palidromes of an array
//IIFE Function:
(function (arr){
    
    var ans=[];
    for(let i=0;i<arr.length;i++){
        
          let a=arr[i];
             let s=a;
    s = s.split('').reverse().join('');
    if( s == a){
     ans.push(arr[i]);
            
        }
    }
    console.log(ans);
})(["abc", "car", "ada", "racecar", "cool"]);

//6.Return median of two sorted arrays of the same size
//IIFE Function:

(function (arr1, arr2)
{
  var n1 = arr1.length;
var n2 = arr2.length;
if(n1==n2){
  var n=n1,n2;
}
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1
        for (count = 0; count <= n; count++)
    {
        
       
        if (arr1[i] <= arr2[j])
        {
            m1 = m2; 
            m2 = arr1[i];
            i++;
        }
        else{
            m1 = m2; 
            m2 = arr2[j];
            j++;
        }
    }
 
    console.log((m1 + m2)/2);
})([1, 3, 6, 26, 38],[2, 4, 6, 30, 45]);

//7.Remove duplicates from an array
//IIFE Function:
(function(arr){
    let uniquearr = [...new Set(arr)];
    console.log(uniquearr);
    
    })([1,2,2,3,3,4,5]);
       
    //8.Rotate an array by k times
    //IIFE Function:
    
    (function(arr,k){
        if(arr.length===k || k===0){
           console.log(arr); 
        }
        else{
            for(i=0;i<k;i++){
                arr.unshift(arr.pop());
            }
        }
        
        console.log(arr);
    })([3,8,9,7,6],3);

    //2.Do the below programs in arrow function

   //1.print odd numbers in an Array
//Arrow function:
var odd=(arr)=>{
    var temp=[];
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            temp.push(arr[i]);
        }
    }
    return temp;
}
console.log(odd([2,4,5,6,7]));

//2.convert all the strings to title caps in a string array.
//Arrow function:
var str1=(str)=>{
    str=str.toLowerCase().split(" ");
    for(i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    return str.join(" ");
    
}
Input:
console.log(str1("guvi geek"));

//3.Sum of all numbers in an array.
//Arrow function:
var sumof=(arr)=>{
    sum=0;
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
Input:
console.log(sumof([1,2,3,4]));

//4.Return all the prime numbers in an array
//Arrow Function:
var prime=(arr)=>{
    var res=[];
    for(i=0;i<arr.length;i++){
        var count=0;
        for(j=1;j<=arr[i];j++){
            if(arr[i]%j==0){
            count++;
        }
    }if(count==2){
        res.push(arr[i]);
    }
    }
    return res;
}
Input:
console.log(prime([2,3,4,5,6,7,8,9,10,11]));

//5.Return all the palidromes of an array
//Arrow Function:

var isPalindrome= (arr)=>{
    
    var ans=[];
    for(let i=0;i<arr.length;i++){
        
          let a=arr[i];
             let s=a;
    s = s.split('').reverse().join('');
    if( s == a){
     ans.push(arr[i]);
            
        }
    }
    return ans;
}
Input:
 console.log(PalindromicStrings(["abc", "car", "ada", "racecar", "cool"]));