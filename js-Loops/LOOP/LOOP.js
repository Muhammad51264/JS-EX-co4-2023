message=""
for(let i=1;i<=10;i++){
    message+=i+" "
}
console.log(message)

message=""
counter=1
while(counter<=10){
    message+=counter+" "
    counter++
}
console.log(message)
Input=[1,2,3,4,5]
message=""
for(let i of Input)
{
    message+=i+" "
}
console.log(message)

message=""
for(let i=0;i<11;i+=2){
    message+=i+" "
}
console.log(message)

sum=0
for(let i=1;i<=10;i++){
    sum+=i
}
console.log(sum)

Input=[1,2,3,4,5]
max=0
for(let i of Input){
    if(i>max){
        max=i
    }
}
console.log(max)


min=Input[0]
for(let i of Input){
    if(i<min){
        min=i
    }
}
console.log(min)

sum=0
for(let i of Input){
        sum+=i
}
console.log(sum/Input.length)
Input=5
fact=1
for(let i=Input;i!=1;i--)
{
fact*=i
}
console.log(fact)
console.log("...............................")
Input=10
seq=[]
for(let i=0;i<=Input;i++){
    if(i==0 || i==1)
    {
        seq.push(i)
    }
    else
    {    
        seq.push(seq[i-1]+seq[i-2])
    
            
    }
}
message=""
for(let i of seq)
{
    message+=i+" "
}
console.log(message)

Input=20
message=""
for(let i=2;i<=Input;i++){
if((i==2 || i==3 || i==5 || i==7)||(i%2!=0 && i%3!=0 && i%5!=0 && i%7!=0)){
    message+=i+" "
}
}
console.log(message)

Input=5
message=""
for(let i=1;i<=10;i++){
message+=`, ${Input} X ${i} = ${i*Input}`
}
console.log(message.slice(2))

Two_D=[[1,2,3],[4,5,6],[7,8,9]]
message=""
for(let i of Two_D)
{   for(let j of i)
    message+=j+" "
}
console.log(message)

Input=[1,2,3,4,5]
Input_reverse=[]
message=""
for(let i of Input){
    Input_reverse.push(i)
} 

for(let i=0;i<Input.length;i++){
    message+=Input_reverse.pop()+" "
}
console.log(message)


message=""
Input=[1,2,3,4,5]
for(let i=2;i<=4;i++){
message+=Input[i]+" "
}
console.log(message)

message=""
for(let i=0;i<=5;i+=2){
message+=Input[i]+" "
}
console.log(message)

message=""
found=false;
number=4
for(let i=0;i<Input.length;i++){
if(Input[i]==number){
    found=true;
}
}
console.log(found)

counter=0
Input=[1,2,1,3,2,1]
number=1
for(let i=0;i<Input.length;i++){
    if(number==Input[i]){
        counter+=1
    }
}
console.log(counter)