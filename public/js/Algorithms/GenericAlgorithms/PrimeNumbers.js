
/**
CHECK IF NUM IS PRIME
**/

function isPrime(n){
    if( n <= 1 ){
        return false;
    }
    
    for( var i = 2; i * i <= n; i++ ){
        if( n % i == 0 ){
            return false;
        }
    }
    
    return true;
    
}

syso(isPrime(14) ? 'Is a Prime' : 'Is NOT a Prime');



/**
ALL PRIMES UPTO N
**/ 




/**
FIRST N PRIME NUMBERS / THE Nth PRIME NUMBER
**/




