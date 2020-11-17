import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Nghia",
      avatar:
        "https://product.hstatic.net/200000068224/product/z2044480098325_c6d3479a3bc82786d09b85742029e32b_62d35f9b5fc34cc4bd7aa9a432e1c6a3_master.jpg",
      email: "nghia@email.com",
      password: bcrypt.hashSync("1234", 8),
     
      isAdmin: true,
      provincial: "Quang ngai",
      District: "NO",
      Commune: "PHO AN",
    },
    {
      name: "Au",
      avatar:
        "https://product.hstatic.net/200000068224/product/z2044480098325_c6d3479a3bc82786d09b85742029e32b_62d35f9b5fc34cc4bd7aa9a432e1c6a3_master.jpg",

      email: "au@email.com",
      password: bcrypt.hashSync("1234", 8),
     
      isAdmin: false,
      provincial: "Quang tri",
      District: "NO",
      Commune: "PHO",
    },
  ],
  categories:[{
   
    name: "US",
 
    
    }],
  products: [
    {
      name: "Nike Shirt",
      cateID: "Shirts",
      createAt: "20-10-2020",
      createUpdate: "21-10-2020",
      model: "",
      colors: ["blue", "red", "black", "white"],
      sizes: ["S", "M", "L", "XL"],
      madein: "VIETNAM",
      images:
        "https://product.hstatic.net/200000068224/product/z2044480098325_c6d3479a3bc82786d09b85742029e32b_62d35f9b5fc34cc4bd7aa9a432e1c6a3_master.jpg",
      price: 120000000,
      description: "high quality product",
      discount: 20,
      isFreeShip: true,
      quanSold: 20,
      inventory: 10,
    },
    {
      name: "Adidas Jacket",
      cateID: "Shirts",
      createAt: "20-10-2020",
      createUpdate: "21-10-2020",
      model: "",
      colors: ["blue", "red", "black", "white"],
      sizes: ["S", "M", "L", "XL"],
      madein: "VIETNAM",
      images:
        "https://i.etsystatic.com/7100631/r/il/b9ee7a/1652035143/il_794xN.1652035143_g1eb.jpg",
      price: 120000000,
      description: "high quality product",
      discount: 20,
      isFreeShip: true,
      isAdmin: true,
      quanSold: 20,
      inventory: 10,
    },
    {
      name: "Cham Shirt",
      cateID: "Shirts",
      createAt: "20-10-2020",
      createUpdate: "21-10-2020",
      model: "",
      colors: ["blue", "red", "black", "white"],
      sizes: ["S", "M", "L", "XL"],
      madein: "VIETNAM",
      images: "https://cf.shopee.vn/file/8c62709c2cd50d9672309a3414b29257",
      price: 120000000,
      description: "high quality product",
      discount: 20,
      isFreeShip: true,
      isAdmin: true,
      quanSold: 20,
      inventory: 10,
    },
    {
      name: "Drew Hoodie",
      cateID: "Shirts",
      createAt: "20-10-2020",
      createUpdate: "21-10-2020",
      model: "",
      colors: ["blue", "red", "black", "white"],
      sizes: ["S", "M", "L", "XL"],
      madein: "VIETNAM",
      images: "https://cf.shopee.com.my/file/e1a382415390bf2a7b6ae48c054ebd0d",
      price: 120000000,
      description: "high quality product",
      discount: 20,
      isFreeShip: true,
      isAdmin: true,
      quanSold: 20,
      inventory: 10,
    },
  ],
};
export default data;
