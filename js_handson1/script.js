const AddTwoNumbers = (a,b) => {
    return (a+b)   
};


const Is_Valid = (a,b) => {
    if (a<10 && a>b)
    return ("true")
    else
    return ("false")
  };

  const Check = (A, B) => 
{
  if(A%10===0 && B%10===0){
  return "true";
  }else if (A%10!== 0 && B%10!==0){
  return "false";
  }else if(A%10===0 || B%10===0){
  return "true";
  }
    
};


const First_Digit = (n) => {
    let a = n/1000
    return(Math.floor(a));
 };

 const Last_Digit = (n) => {
    let a = n%10
   return(Math.floor(a));
};


const Find_the_remainder = (a,b) => {
    return(b%a)
};


const Multiply_two_number = (a,b) => {
    return(a*b)
};

const Sum = (A, B, C) => 
{
 return(A+B+C)
};

const Average = (A, B, C) => 
{
 return((A+B+C)/3)
};

