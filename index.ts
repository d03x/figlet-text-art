import figlet from "figlet"

const text = prompt("Ketikan Nama: ");
const result = await figlet.text(text as string,{
    font : 'Banner3'
},(error : any)=>{
    console.log(error.message);
    
});
console.log(result);
