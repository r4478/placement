#include <bits/stdc++.h>
using namespace std;
 long long abcd[1000001];
  
int main() {
   long long  n;
   cin>>n;
   abcd[0] = 0;
   abcd[1] = 1;
      for (long long i = 2; i <= 1000000; ++i) {
        abcd[i] = ((i *(abcd[i - 1]))%1000000007)%1000000007;
            }
   while (n--) {
       long long  a,b,c,d,answer=0;
       
       cin>>a;
       int arr[a];
        for(long long i=0;i<a;i++)
       {
           cin>>arr[i];
          
           
       }
        for(long long i=0;i<a;i++)
       {answer+=(abcd[arr[i]])%1000000007;
         answer=answer%1000000007;
    //   cout<<c;
      
       }
       cout<<answer%1000000007<<endl;
      
   }
   return 0;
}
