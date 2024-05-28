/*Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs.
The metadata values will be passed to the function as parameters. When the NFT is ready,
you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFTs
const detailsNFT = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, shoeSize, favColor, bling) {
    const myNFT = {
        "Name": name,
        "ShoeSize": shoeSize,
        "FavColor": favColor,
        "Bling": bling
    };
    detailsNFT.unshift(myNFT); //first entry will be last
    console.log("NFT Minted by: ", name);
    console.log("----------------------");}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < detailsNFT.length; i++) {
        console.log("Name: " + detailsNFT[i].Name);
        console.log("Shoe Size: " + detailsNFT[i].ShoeSize);
        console.log("Favorite Color: " + detailsNFT[i].FavColor);
        console.log("Bling: " + detailsNFT[i].Bling);
        console.log("*********************");
    }}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs Minted: ",detailsNFT.length);
    console.log("----------------------");}

// call your functions below this line
mintNFT("Ridz", 37, "Green", "Gem");
mintNFT("Sasha", 39, "Red", "Ruby");
mintNFT("Riya", 39, "Whtie", "Gold");
mintNFT("Saras", 37, "Blue", "Diamond");
getTotalSupply();
listNFTs();