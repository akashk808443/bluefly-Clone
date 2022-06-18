const { Router } = require("express");

const bluesky = require("../Mongo/dbbody");

const Userdata = Router();

//http://localhost:8080/Data/
<<<<<<< HEAD
Userdata.get("/", async (req, res) => {
  const data = await bluesky.find();
  console.log(data);
  res.send(data);
});

=======
Userdata.get("/",async(req,res)=>{

    const data=await bluesky.find()
    console.log(data)
    res.send(data)
})

Userdata.get("/Men's",async(req,res)=>{
    const data1=await bluesky.find({category:{$regex:"Men's"}})
    res.send(data1)
})
Userdata.get("/Women's",async(req,res)=>{
    const data1=await bluesky.find({category:{$regex:"Women's",$options:"i"}})
    res.send(data1)
})
>>>>>>> main
//for searching
Userdata.get("/search", async (req, res) => {
  //http://localhost:8080/Data/search?q=value;
  console.log(req.query);
  const data1 = await bluesky.find({
    title: { $regex: req.query.q, $options: "i" },
  });
  console.log(data1);
  res.status(200).send(data1);
});

//for filtering

Userdata.get("/filter", async (req, res) => {
  console.log(req.query);

<<<<<<< HEAD
  //http://localhost:8080/Data/filter?category=Women's wear|| Women's jeans || Men's Pant ||Men's Shirt ;
  if (req.query.category) {
    let data1 = await bluesky.find({ category: req.query.category });
    console.log(data1);
    return res.send(data1);
  }
  //http://localhost:8080/Data/filter?color=white|| red|| green ||grey ;
  else if (req.query.color) {
    let data1 = await bluesky.find({
      $or: [{ color1: req.query.color }, { color2: req.query.color }],
    });
    console.log(data1);
    return res.send(data1);
  }
  //http://localhost:8080/Data/filter?size=small|| medium|| large
  else if (req.query.size) {
    let data1 = await bluesky.find({ sizes: req.query.size });
    console.log(data1);
    return res.send(data1);
  }
  //http://localhost:8080/Data/filter?condition=new||used
  else if (req.query.condition) {
    let data1 = await bluesky.find({ condition: req.query.condition });
    console.log(data1);
    return res.send(data1);
  }
  //http://localhost:8080/Data/filter?minPrice=500&maxPrice=1000
  else if (req.query.minPrice && req.query.maxPrice) {
    let data1 = await bluesky.find({
      price: { $gt: req.query.minPrice },
      price: { $lt: req.query.maxPrice },
    });
    console.log(data1);
    return res.send(data1);
  }
});
=======
    //http://localhost:8080/Data/filter?category=Women's wear|| Women's jeans || Men's Pant ||Men's Shirt ;
    if(req.query.category)
    {
        let data1=await bluesky.find({category:req.query.category})
        console.log(data1)
        return res.send(data1)
    }
    //http://localhost:8080/Data/filter?color=white|| red|| green ||grey ;
    else if(req.query.color)
    {
        let data1=await bluesky.find({$or:[{color1:req.query.color},{color2:req.query.color}]})
        console.log(data1)
        return res.send(data1)
    }
    //http://localhost:8080/Data/filter?size=small|| medium|| large
    else if(req.query.size)
    {
        let data1=await bluesky.find({sizes:req.query.size})
        console.log(data1)
        return res.send(data1)
    }
     //http://localhost:8080/Data/filter?condition=new||used
    else if(req.query.condition)
    {
        let data1=await bluesky.find({condition:req.query.condition})
        console.log(data1)
        return res.send(data1)
    }
     //http://localhost:8080/Data/filter?brand=polo||canvas||nike
     else if(req.query.brand)
     {
         let data1=await bluesky.find({brand:req.query.brand})
         console.log(data1)
         return res.send(data1)
     }
    //http://localhost:8080/Data/filter?minPrice=500&maxPrice=1000
    else if(req.query.minPrice && req.query.maxPrice)
    {
        let data1=await bluesky.find({price:{$gt:req.query.minPrice},price:{$lt:req.query.maxPrice}})
        console.log(data1)
        return res.send(data1)
    }
})
>>>>>>> main

// New contribution by yash---->
// For sorting women's data

Userdata.get("/sortwomens",async (req,res)=>{    
const {title,price}=req.query;

{
//http://localhost:8080/Data/sort?title=inc
if(title&& title==='inc'){
    let data=await bluesky.find({category:{$regex:"women's", $options:"i"}}).sort({title:1});
    res.send(data);
}
//http://localhost:8080/Data/sort?title=dec
else if(title&& title==='dec'){
    let data=await bluesky.find({category:{$regex:"women's", $options:"i"}}).sort({title:-1});
    res.send(data);
}
//http://localhost:8080/Data/sort?price=inc
else if(price && price==='inc'){
    let data=await bluesky.find({category:{$regex:"women's", $options:"i"}}).sort({price:1});
    res.send(data);
}
//http://localhost:8080/Data/sort?price=dec
else if(price && price==='dec'){
    let data=await bluesky.find({category:{$regex:"women's", $options:"i"}}).sort({price:-1});
    res.send(data);
}

}
})

// For sorting mens data

Userdata.get("/sortmens",async (req,res)=>{    
    const {title,price}=req.query;
    
    {
    //http://localhost:8080/Data/sortmens?title=inc
    if(title&& title==='inc'){
        let data=await bluesky.find({category:{$regex:"men's", $options:"i"}}).sort({title:1});
        res.send(data);
    }
    //http://localhost:8080/Data/sortmens?title=dec
    else if(title&& title==='dec'){
        let data=await bluesky.find({category:{$regex:"men's", $options:"i"}}).sort({title:-1});
        res.send(data);
    }
    //http://localhost:8080/Data/sortmens?price=inc
    else if(price && price==='inc'){
        let data=await bluesky.find({category:{$regex:"men's", $options:"i"}}).sort({price:1});
        res.send(data);
    }
    //http://localhost:8080/Data/sortmens?price=dec
    else if(price && price==='dec'){
        let data=await bluesky.find({category:{$regex:"men's", $options:"i"}}).sort({price:-1});
        res.send(data);
    }
    
    }
    })

//for getting particlar data like types of cateogary or different colors or brand or sizes

Userdata.get("/myval", async (req, res) => {
  const data = await bluesky.find();

  //http://localhost:8080/Data/myval?category=find
  if (req.query.category) {
    let brr = [];

    data.map((ele) => {
      if (!brr.includes(ele.category)) {
        brr.push(ele.category);
      }
    });
    console.log(brr);
    res.send(brr);
  }

  //http://localhost:8080/Data/myval?color=find
  else if (req.query.color) {
    let brr = [];

    data.map((ele) => {
      if (!brr.includes(ele.color1) && ele.color1 != null) {
        brr.push(ele.color1);
      } else if (!brr.includes(ele.color2) && ele.color2 != null) {
        brr.push(ele.color2);
      }
    });
    console.log(brr);
    res.send(brr);
  }

  //http://localhost:8080/Data/myval?size=find
  if (req.query.size) {
    let brr = [];

    data.map((ele) => {
      if (!brr.includes(ele.sizes)) {
        brr.push(ele.sizes);
      }
    });
    console.log(brr);
    res.send(brr);
  }

  //http://localhost:8080/Data/myval?condition=find
  if (req.query.condition) {
    let brr = [];

<<<<<<< HEAD
    data.map((ele) => {
      if (!brr.includes(ele.condition)) {
        brr.push(ele.condition);
      }
    });
    console.log(brr);
    res.send(brr);
  }
});
=======
        data.map((ele)=>{
            if(!brr.includes(ele.condition))
            {
                brr.push(ele.condition)
            }
        })
        console.log(brr)
        res.send(brr)
    }
    //http://localhost:8080/Data/myval?brands=find
    if(req.query.brands)
    {
        let brr=[]

        data.map((ele)=>{
            if(!brr.includes(ele.brand))
            {
                brr.push(ele.brand)
            }
        })
        console.log(brr)
        res.send(brr)
    }
})
>>>>>>> main

module.exports = Userdata;
