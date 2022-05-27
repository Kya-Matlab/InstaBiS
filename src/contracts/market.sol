pragma solidity 0.5.16;
contract market{
    uint public productcount=0;
    mapping(uint=>product) public products;
       struct product{
           uint id;
           string n;
           uint price;
           address payable owner;
           bool purchased;
       }
       event Productcreated(
           uint id,
           string n,
           uint price,
           address payable owner,
           bool purchased);
           event Productpurchased(
           uint id,
           string n,
           uint price,
           address payable owner,
           bool purchased);

       function createproduct(string memory _n,uint _price)public{
           require(bytes(_n).length > 0);
           require(_price > 0);
           productcount++;
           products[productcount]=product(productcount,_n,_price,msg.sender,false);
           emit Productcreated(productcount,_n,_price,msg.sender,false);
       }
       function purchase(uint _id) public payable{
           product memory _product=products[_id];
           address payable seller=_product.owner;
           _product.owner=msg.sender;
           _product.purchased=true;
           products[_id]=_product;
           address(seller).transfer(msg.value);
           emit Productpurchased(productcount,_product.n,_product.price,msg.sender,true);
       }       
}

