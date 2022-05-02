function createPalindrome(input, b, isOdd)
    {
        let n = input;
        let palin = input;
 
      
        if (isOdd == 1)
            n = parseInt(n / b, 10);
 
  
        while (n > 0)
        {
            palin = palin * b + (n % b);
            n = parseInt(n / b, 10);
        }
        return palin;
    }
 
    function generatePalindromes(n)
    {
        let number;

        for (let j = 0; j < 2; j++)
        {
 
            
            let i = 1;
            while ((number = createPalindrome(i, 10, j % 2)) < n)
            {
                document.write(number + " ");
                i++;
            }
        }
    }
     
    let n = 104;
    generatePalindromes(n);
    