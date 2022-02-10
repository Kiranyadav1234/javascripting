function findArmstrong(num)
{
    for(let i=1;i<=num;i++)
    {
        console.log(isArmstrong(i));
        if(isArmstrong(i))
           console.log(i);

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