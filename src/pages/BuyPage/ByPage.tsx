import ListingCard from "../../api/ListingCard"



const listings = [
    {
      id: 1,
      title: "Роскошный пентхаус на Манхэттене",
      price: "$3,000,000",
      image:
        "https://www.datocms-assets.com/121312/1710946359-53west53_gallery_28.jpg?auto=format%2Ccompress&fit=max&h=3000&w=2000",
      address: "53 West 53rd St, New York, NY",
    },
  ];


export const BuyPage = ()=>{

    return(

        {listings.map((listing) => (
            <div key={listing.id}>
              <ListingCard
                title={listing.title}
                price={listing.price}
                image={listing.image}
                address={listing.address}
              />
            </div>
          ))}


    )
    
}