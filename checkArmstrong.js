function findArmstrong(range)
{
    for(let index=1;index<=range;index++)
    {
        console.log(isArmstrong(index));
        if(isArmstrong(index))
           console.log(index);

    }
       
}
function isArmstrong(number)
{
    let temp = number;
    let sum = 0;
    while(temp>0)
    {

        let remainder = temp%10;
        sum +=remainder*remainder*remainder;
        temp =parseInt(temp/10);

    }
    return (sum === number);  
}
findArmstrong(200);