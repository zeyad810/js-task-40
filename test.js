const xhr =new XMLHttpRequest();
let product_name = "HP";
let product_price = 3000;
let product_quantity = 1;
let url = "https://cademy.egytigers.com/api/send_order";


xhr.open('POST', 'https://cademy.egytigers.com/api/send_order');  // Specify the URL of the file to be served
xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && this.status==200 ){
        console.log(this.response)
    }


}
xhr.send( product_name, product_price ,product_quantity)