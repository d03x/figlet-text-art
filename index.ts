import figlet from "figlet"

const text = prompt("Ketikan Nama: ");
const result = await figlet.text(text as string,{
    font : 'Banner3'
},(text)=>{
    console.log();
    
});
console.log(result);
