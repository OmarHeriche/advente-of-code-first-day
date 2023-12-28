const {readFileSync,writeFileSync}=require('fs');

const the_input=readFileSync('the_input.txt','utf8');
let array_of_input_lines=the_input.split("\n");
let array_of_numbers_of_each_line=[];
let first_number,second_number;
let j,k;
for(let i=0;i<array_of_input_lines.length;i++){
    array_of_numbers_of_each_line[i]=0;
    first_number=0;
    second_number=0;
    j=0;
    k=array_of_input_lines[i].length-1;
    while(isNaN(parseInt(array_of_input_lines[i][j])) && j<=k){
        j++;
    }
    if(j<k){first_number=parseInt(array_of_input_lines[i][j])*10;
    // console.log(first_number)
    }
    while(isNaN(parseInt(array_of_input_lines[i][k])) && 0<=k){
        k--;
    }
    if(k>=0){second_number=parseInt(array_of_input_lines[i][k]);}
    array_of_numbers_of_each_line[i]=first_number+second_number;
}
let s=0;
for(let i =0;i<array_of_numbers_of_each_line.length;i++){
    s+=array_of_numbers_of_each_line[i];
}
console.log(s)