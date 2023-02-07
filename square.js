function sqrt(n){
    if(n==0 || n==1){
        return n
    }
    let start=1 , end =n , ans;
    while(start<= end ){
        let mid = Math.floor((start+end)/2)

        if(mid * mid ==n){
            return mid
        }

        if(mid * mid <n){
            start = mid+1
            ans=mid
        }else{
            end = mid-1
        }
    }
    let a= ans
    let b= ans+1
    var c= floatsqre(a,b,n)
    return c


}

let r=0;

function floatsqre(a , b , n){
   

        var avg=(a+b)/2

        if(avg * avg == n){
            return avg
        }
        if(avg * avg > n && r<11){
            r++
            return floatsqre(a ,avg ,n)
        }
        if(avg * avg < n && r<11){
            r++
            return floatsqre(avg , b ,n)
        }
        if(r==11){
            return avg
        }

}

var n=prompt("give me a number")
var s=sqrt(n)
console.log(s)    