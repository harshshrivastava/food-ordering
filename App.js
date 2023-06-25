import React from "react"
import ReactDOM from "react-dom/client"


/**
 * Header
 *  - logo
 *  - nav items
 * Body
 *  - Search
 *  - RestuarantContainer
 *      - RestuarantCard
 *          - Img
 *          - Name, Rating, Cuisine, etc
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestuarantCard = (props) =>{

    const {resData} = props
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.data
    return(
        <div className="restuarant-card" style={{backgroundColor:"#f0f0f0"}}>
            <img
              className="restuarant-logo"
              src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"
              +cloudinaryImageId}
              alt="restuarant-logo"></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo/100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

const resList = [
    {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "118278",
                "name": "Namaste",
                "uuid": "55394489-ff7d-4a73-bcca-35ebc0eb5783",
                "city": "1",
                "area": "2nd Stage",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "wya5kg7wxvbh5opfpo1m",
                "cuisines": [
                    "South Indian",
                    "Thalis",
                    "Snacks",
                    "Biryani",
                    "Indian",
                    "Chinese",
                    "Desserts",
                    "Beverages"
                ],
                "tags": [],
                "costForTwo": 10000,
                "costForTwoString": "₹100 FOR TWO",
                "deliveryTime": 47,
                "minDeliveryTime": 47,
                "maxDeliveryTime": 47,
                "slaString": "47 MINS",
                "lastMileTravel": 4.300000190734863,
                "slugs": {
                    "restaurant": "namaste-btm",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "69, 7th Main Road, BTM 2nd Stage, Bangalore - 76",
                "locality": "BTM Layout",
                "parentId": 366271,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "special",
                            "fee": 2000,
                            "message": ""
                        },
                        {
                            "name": "distance",
                            "fee": 4000,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 6000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "6000",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "LIGHT",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "4.3 kms",
                "hasSurge": false,
                "aggregatedDiscountInfoV3": {
                    "header": "₹100 OFF",
                    "subHeader": "ABOVE ₹499",
                    "discountTag": "FLAT DEAL",
                    "headerTypeV2": 0
                },
                "sla": {
                    "restaurantId": "118278",
                    "deliveryTime": 47,
                    "minDeliveryTime": 47,
                    "maxDeliveryTime": 47,
                    "lastMileTravel": 4.300000190734863,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "LIGHT",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.2",
                "totalRatings": 10000,
                "new": false
            },
            "subtype": "basic",
            "crouton": {
                "type": "RAIN",
                "metaInfo": {
                    "bgColor": "#282C3F",
                    "icon": "surge_listing_piuzrv",
                    "textColor": "#ffffff",
                    "title": "Bad Weather",
                    "message": "₹20 extra levied on some restaurants"
                }
            }
        },
        "parentWidget": false
    },
    {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "131864",
                "name": "Kerala Food Club",
                "uuid": "599369d2-8c19-4ac9-b662-d34a83ec2259",
                "city": "1",
                "area": "Bommanahalli",
                "totalRatingsString": "5000+ ratings",
                "cloudinaryImageId": "vslvkkwgt82r4hcazebu",
                "cuisines": [
                    "Kerala",
                    "Chinese",
                    "Biryani",
                    "Seafood",
                    "South Indian"
                ],
                "tags": [],
                "costForTwo": 25000,
                "costForTwoString": "₹250 FOR TWO",
                "deliveryTime": 39,
                "minDeliveryTime": 39,
                "maxDeliveryTime": 39,
                "slaString": "39 MINS",
                "lastMileTravel": 2.0999999046325684,
                "slugs": {
                    "restaurant": "kerala-food-club-koramangala",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "No.81, House Road, Mandiwala, Bangalore-560068",
                "locality": "House Road",
                "parentId": 21345,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "ribbon": [
                    {
                        "type": "PROMOTED"
                    }
                ],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 3000,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 2000,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 5000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5000",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "LIGHT",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=7194755~p=19~eid=00000188-f303-59f3-0eea-d17f00531315~srvts=1687704263155",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "2 kms",
                "hasSurge": false,
                "aggregatedDiscountInfoV3": {
                    "header": "₹100 OFF",
                    "subHeader": "ABOVE ₹499",
                    "discountTag": "FLAT DEAL",
                    "headerTypeV2": 0
                },
                "sla": {
                    "restaurantId": "131864",
                    "deliveryTime": 39,
                    "minDeliveryTime": 39,
                    "maxDeliveryTime": 39,
                    "lastMileTravel": 2.0999999046325684,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "LIGHT",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "3.9",
                "totalRatings": 5000,
                "new": false
            },
            "subtype": "basic",
            "crouton": {
                "type": "RAIN",
                "metaInfo": {
                    "bgColor": "#282C3F",
                    "icon": "surge_listing_piuzrv",
                    "textColor": "#ffffff",
                    "title": "Bad Weather",
                    "message": "₹20 extra levied on some restaurants"
                }
            }
        },
        "parentWidget": false
    },
    {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "537139",
                "name": "Narmada Chain Of Restaurant",
                "uuid": "6a6d3d2a-2c66-45ae-9772-e8c4dd08c794",
                "city": "1",
                "area": "Koramangala",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "gmcud4kfjsy2kf2bbrme",
                "cuisines": [
                    "Biryani",
                    "Andhra",
                    "South Indian"
                ],
                "tags": [],
                "costForTwo": 50000,
                "costForTwoString": "₹500 FOR TWO",
                "deliveryTime": 36,
                "minDeliveryTime": 36,
                "maxDeliveryTime": 36,
                "slaString": "36 MINS",
                "lastMileTravel": 1.100000023841858,
                "slugs": {
                    "restaurant": "narmada-group-of-hotels-koramangala-koramangala",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "No. 4, 1st Main Road, 5th Block, Beside Coffee Day, Koramangala, Bangalore 560095",
                "locality": "Koramangala",
                "parentId": 322826,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 3000,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 2000,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 5000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5000",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "LIGHT",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "1.1 kms",
                "hasSurge": false,
                "aggregatedDiscountInfoV3": {
                    "header": "10% OFF",
                    "subHeader": "UPTO ₹40",
                    "discountTag": "",
                    "headerTypeV2": 0
                },
                "sla": {
                    "restaurantId": "537139",
                    "deliveryTime": 36,
                    "minDeliveryTime": 36,
                    "maxDeliveryTime": 36,
                    "lastMileTravel": 1.100000023841858,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "LIGHT",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.3",
                "totalRatings": 1000,
                "new": false
            },
            "subtype": "basic",
            "crouton": {
                "type": "RAIN",
                "metaInfo": {
                    "bgColor": "#282C3F",
                    "icon": "surge_listing_piuzrv",
                    "textColor": "#ffffff",
                    "title": "Bad Weather",
                    "message": "₹20 extra levied on some restaurants"
                }
            }
        },
        "parentWidget": false
    },
    {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "349608",
                "name": "Sharief Bhai",
                "uuid": "118f8f72-2420-47cf-9fd5-8a75c18f05d7",
                "city": "1",
                "area": "Bommanahalli",
                "totalRatingsString": "5000+ ratings",
                "cloudinaryImageId": "cw1nzkykbrqgten7zofx",
                "cuisines": [
                    "Mughlai",
                    "Biryani",
                    "Arabian",
                    "Kebabs",
                    "Beverages",
                    "Desserts"
                ],
                "tags": [],
                "costForTwo": 40000,
                "costForTwoString": "₹400 FOR TWO",
                "deliveryTime": 40,
                "minDeliveryTime": 40,
                "maxDeliveryTime": 40,
                "slaString": "40 MINS",
                "lastMileTravel": 4.699999809265137,
                "slugs": {
                    "restaurant": "sharief-bhai-btm-btm-2",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "Address - # 3, Begur, Kodichikkanahalli Road, Adjacent to Jockey Factory, Bommanahalli, Bangalore - 560068, Land Mark : Next to THE GATE ACADEMY",
                "locality": "Kodichikanahalli Main Road",
                "parentId": 5734,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "ribbon": [
                    {
                        "type": "PROMOTED"
                    }
                ],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 4000,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 2000,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 6000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "6000",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "LIGHT",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=7167014~p=22~eid=00000188-f303-59f3-0eea-d1800053166d~srvts=1687704263155",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "4.6 kms",
                "hasSurge": false,
                "aggregatedDiscountInfoV3": {
                    "header": "15% OFF",
                    "subHeader": "ABOVE ₹1100",
                    "discountTag": "FLAT DEAL",
                    "headerTypeV2": 0
                },
                "sla": {
                    "restaurantId": "349608",
                    "deliveryTime": 40,
                    "minDeliveryTime": 40,
                    "maxDeliveryTime": 40,
                    "lastMileTravel": 4.699999809265137,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "LIGHT",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "3.9",
                "totalRatings": 5000,
                "new": false
            },
            "subtype": "basic",
            "crouton": {
                "type": "RAIN",
                "metaInfo": {
                    "bgColor": "#282C3F",
                    "icon": "surge_listing_piuzrv",
                    "textColor": "#ffffff",
                    "title": "Bad Weather",
                    "message": "₹20 extra levied on some restaurants"
                }
            }
        },
        "parentWidget": false
    },
    {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "63957",
                "name": "Madeena Hotel",
                "uuid": "da15d34a-cf0f-40a6-8600-096309bb578b",
                "city": "1",
                "area": "Koramangala",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "yc0asfa2j9elggstyjg4",
                "cuisines": [
                    "Biryani",
                    "Mughlai",
                    "Indian",
                    "Beverages"
                ],
                "tags": [],
                "costForTwo": 25000,
                "costForTwoString": "₹250 FOR TWO",
                "deliveryTime": 45,
                "minDeliveryTime": 45,
                "maxDeliveryTime": 45,
                "slaString": "45 MINS",
                "lastMileTravel": 1.399999976158142,
                "slugs": {
                    "restaurant": "madeena-hotel-koramangala-koramangala",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "# 20/A, 5th Block Kormangala ,Next To Masjid-E-Mamoor Banglore-95",
                "locality": "5th Block",
                "parentId": 12517,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 3000,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 2000,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 5000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5000",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "LIGHT",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "1.3 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "63957",
                    "deliveryTime": 45,
                    "minDeliveryTime": 45,
                    "maxDeliveryTime": 45,
                    "lastMileTravel": 1.399999976158142,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "LIGHT",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.1",
                "totalRatings": 10000,
                "new": false
            },
            "subtype": "basic",
            "crouton": {
                "type": "RAIN",
                "metaInfo": {
                    "bgColor": "#282C3F",
                    "icon": "surge_listing_piuzrv",
                    "textColor": "#ffffff",
                    "title": "Bad Weather",
                    "message": "₹20 extra levied on some restaurants"
                }
            }
        },
        "parentWidget": false
    },
    {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "25620",
                "name": "KFC",
                "uuid": "19dd099d-636e-41b9-aaa3-1b9006fc8e1a",
                "city": "1",
                "area": "Ejipura",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
                "cuisines": [
                    "Burgers",
                    "Biryani",
                    "American",
                    "Snacks",
                    "Fast Food"
                ],
                "tags": [],
                "costForTwo": 40000,
                "costForTwoString": "₹400 FOR TWO",
                "deliveryTime": 22,
                "minDeliveryTime": 22,
                "maxDeliveryTime": 22,
                "slaString": "22 MINS",
                "lastMileTravel": 0.8999999761581421,
                "slugs": {
                    "restaurant": "kfc-intermediate-ring-road-koramangala",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "Shop No:13,16 & 17, Egipura Village,Intermediate Ring Road, Koramangala, Bangalore - 5600095",
                "locality": "Intermediate Ring Road",
                "parentId": 547,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 3000,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 2000,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 5000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5000",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "LIGHT",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "0.8 kms",
                "hasSurge": false,
                "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80",
                    "discountTag": "",
                    "headerTypeV2": 0
                },
                "sla": {
                    "restaurantId": "25620",
                    "deliveryTime": 22,
                    "minDeliveryTime": 22,
                    "maxDeliveryTime": 22,
                    "lastMileTravel": 0.8999999761581421,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "LIGHT",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.1",
                "totalRatings": 10000,
                "new": false
            },
            "subtype": "basic",
            "crouton": {
                "type": "RAIN",
                "metaInfo": {
                    "bgColor": "#282C3F",
                    "icon": "surge_listing_piuzrv",
                    "textColor": "#ffffff",
                    "title": "Bad Weather",
                    "message": "₹20 extra levied on some restaurants"
                }
            }
        },
        "parentWidget": false
    },
    {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "111667",
                "name": "The Reservoire",
                "uuid": "e389e060-74f5-48f6-b741-93f23e4fef0d",
                "city": "1",
                "area": "Koramangala",
                "totalRatingsString": "500+ ratings",
                "cloudinaryImageId": "aaytv5nhjtsnyvbqmfi3",
                "cuisines": [
                    "Chinese",
                    "North Indian",
                    "Continental",
                    "American",
                    "Desserts",
                    "Italian",
                    "Beverages",
                    "Seafood",
                    "Tandoor"
                ],
                "tags": [],
                "costForTwo": 30000,
                "costForTwoString": "₹300 FOR TWO",
                "deliveryTime": 44,
                "minDeliveryTime": 44,
                "maxDeliveryTime": 44,
                "slaString": "44 MINS",
                "lastMileTravel": 1,
                "slugs": {
                    "restaurant": "the-reservoire-koramangala",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "17th Main Rd, KHB Colony, 5th Block, Koramangala, Bengaluru, Karnataka 560095",
                "locality": "5th Block",
                "parentId": 20977,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "ribbon": [
                    {
                        "type": "PROMOTED"
                    }
                ],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 3000,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 2000,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 5000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5000",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "LIGHT",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=7194826~p=25~eid=00000188-f303-59f3-0eea-d18100531934~srvts=1687704263155",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "1 kms",
                "hasSurge": false,
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50",
                    "discountTag": "",
                    "headerTypeV2": 0
                },
                "sla": {
                    "restaurantId": "111667",
                    "deliveryTime": 44,
                    "minDeliveryTime": 44,
                    "maxDeliveryTime": 44,
                    "lastMileTravel": 1,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "LIGHT",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "4.2",
                "totalRatings": 500,
                "new": false
            },
            "subtype": "basic",
            "crouton": {
                "type": "RAIN",
                "metaInfo": {
                    "bgColor": "#282C3F",
                    "icon": "surge_listing_piuzrv",
                    "textColor": "#ffffff",
                    "title": "Bad Weather",
                    "message": "₹20 extra levied on some restaurants"
                }
            }
        },
        "parentWidget": false
    },
    {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "23678",
                "name": "McDonald's",
                "uuid": "ab6699fa-ffd9-4554-b68b-f111fc9b4cbb",
                "city": "1",
                "area": "Koramangala",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
                "cuisines": [
                    "Burgers",
                    "Beverages",
                    "Cafe",
                    "Desserts"
                ],
                "tags": [],
                "costForTwo": 40000,
                "costForTwoString": "₹400 FOR TWO",
                "deliveryTime": 37,
                "minDeliveryTime": 37,
                "maxDeliveryTime": 37,
                "slaString": "37 MINS",
                "lastMileTravel": 1.2999999523162842,
                "slugs": {
                    "restaurant": "mc-donalds-kormangala-koramangala",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "AKS Plaza, No.10, Industrial Layout, JNC Road, Koramangala, Bengaluru-590095",
                "locality": "5th Block",
                "parentId": 630,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 3000,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 2000,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 5000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5000",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "LIGHT",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "1.2 kms",
                "hasSurge": false,
                "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80",
                    "discountTag": "",
                    "headerTypeV2": 0
                },
                "sla": {
                    "restaurantId": "23678",
                    "deliveryTime": 37,
                    "minDeliveryTime": 37,
                    "maxDeliveryTime": 37,
                    "lastMileTravel": 1.2999999523162842,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "LIGHT",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.3",
                "totalRatings": 10000,
                "new": false
            },
            "subtype": "basic",
            "crouton": {
                "type": "RAIN",
                "metaInfo": {
                    "bgColor": "#282C3F",
                    "icon": "surge_listing_piuzrv",
                    "textColor": "#ffffff",
                    "title": "Bad Weather",
                    "message": "₹20 extra levied on some restaurants"
                }
            }
        },
        "parentWidget": false
    },
    {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "292108",
                "name": "Ultimate Punjabi",
                "uuid": "72142423-221e-43d5-b1e2-e7b0b63a7f9f",
                "city": "1",
                "area": "Btm Layout",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "mdjx2afkcjp9kxbicnn3",
                "cuisines": [
                    "Chinese",
                    "Tandoor",
                    "Desserts",
                    "Beverages",
                    "Indian",
                    "North Indian",
                    "Punjabi"
                ],
                "tags": [],
                "costForTwo": 40000,
                "costForTwoString": "₹400 FOR TWO",
                "deliveryTime": 39,
                "minDeliveryTime": 39,
                "maxDeliveryTime": 39,
                "slaString": "39 MINS",
                "lastMileTravel": 4.699999809265137,
                "slugs": {
                    "restaurant": "ultimate-punjabi-btm-btm",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "Ultimate Punjabi, Bannerghatta Main Road, NS Palya, Stage 2, Bengaluru, Karnataka, India",
                "locality": "2nd Stage",
                "parentId": 21134,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "ribbon": [
                    {
                        "type": "PROMOTED"
                    }
                ],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 4000,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 2000,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 6000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "6000",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "LIGHT",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=7189725~p=28~eid=00000188-f303-59f3-0eea-d18200531c2a~srvts=1687704263155",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "4.6 kms",
                "hasSurge": false,
                "aggregatedDiscountInfoV3": {
                    "header": "₹100 OFF",
                    "subHeader": "ABOVE ₹499",
                    "discountTag": "FLAT DEAL",
                    "headerTypeV2": 0
                },
                "sla": {
                    "restaurantId": "292108",
                    "deliveryTime": 39,
                    "minDeliveryTime": 39,
                    "maxDeliveryTime": 39,
                    "lastMileTravel": 4.699999809265137,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "LIGHT",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "4.1",
                "totalRatings": 10000,
                "new": false
            },
            "subtype": "basic",
            "crouton": {
                "type": "RAIN",
                "metaInfo": {
                    "bgColor": "#282C3F",
                    "icon": "surge_listing_piuzrv",
                    "textColor": "#ffffff",
                    "title": "Bad Weather",
                    "message": "₹20 extra levied on some restaurants"
                }
            }
        },
        "parentWidget": false
    },
    {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "10576",
                "name": "Pizza Hut",
                "uuid": "22a8566d-5cf7-4d7c-95b0-497f78598edf",
                "city": "1",
                "area": "Koramangala",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                "cuisines": [
                    "Pizzas"
                ],
                "tags": [],
                "costForTwo": 35000,
                "costForTwoString": "₹350 FOR TWO",
                "deliveryTime": 44,
                "minDeliveryTime": 44,
                "maxDeliveryTime": 44,
                "slaString": "44 MINS",
                "lastMileTravel": 0.699999988079071,
                "slugs": {
                    "restaurant": "pizza-hut-6th-block-koramangala",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "#478, 80Ft Road, 17th F main, 6th Block, Koramangala Opp Vasan eye Care, Bangalore",
                "locality": "Koramangala",
                "parentId": 721,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 3000,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 2000,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 5000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5000",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "LIGHT",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "0.6 kms",
                "hasSurge": false,
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100",
                    "discountTag": "",
                    "headerTypeV2": 0
                },
                "sla": {
                    "restaurantId": "10576",
                    "deliveryTime": 44,
                    "minDeliveryTime": 44,
                    "maxDeliveryTime": 44,
                    "lastMileTravel": 0.699999988079071,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "LIGHT",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.8",
                "totalRatings": 10000,
                "new": false
            },
            "subtype": "basic",
            "crouton": {
                "type": "RAIN",
                "metaInfo": {
                    "bgColor": "#282C3F",
                    "icon": "surge_listing_piuzrv",
                    "textColor": "#ffffff",
                    "title": "Bad Weather",
                    "message": "₹20 extra levied on some restaurants"
                }
            }
        },
        "parentWidget": false
    },
    {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "59627",
                "name": "La Pino'z Pizza",
                "uuid": "f32f48cd-2630-48d5-88cb-ac5efb2a18fb",
                "city": "1",
                "area": "Koramangala",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "ntjshqsv2k7vxtv7vmib",
                "cuisines": [
                    "Pizzas",
                    "Pastas",
                    "Italian",
                    "Desserts",
                    "Beverages"
                ],
                "tags": [],
                "costForTwo": 25100,
                "costForTwoString": "₹251 FOR TWO",
                "deliveryTime": 36,
                "minDeliveryTime": 36,
                "maxDeliveryTime": 36,
                "slaString": "36 MINS",
                "lastMileTravel": 1.399999976158142,
                "slugs": {
                    "restaurant": "la-pinoz-pizza-koramangala-koramangala",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "Shop No.24,Shankar Plaza,80 feet road koramangala 4 th block,Bengaluru.",
                "locality": "Koramangala",
                "parentId": 4961,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 3000,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 2000,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 5000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5000",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "LIGHT",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "1.3 kms",
                "hasSurge": false,
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100",
                    "discountTag": "",
                    "headerTypeV2": 0
                },
                "sla": {
                    "restaurantId": "59627",
                    "deliveryTime": 36,
                    "minDeliveryTime": 36,
                    "maxDeliveryTime": 36,
                    "lastMileTravel": 1.399999976158142,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "LIGHT",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.1",
                "totalRatings": 10000,
                "new": false
            },
            "subtype": "basic",
            "crouton": {
                "type": "RAIN",
                "metaInfo": {
                    "bgColor": "#282C3F",
                    "icon": "surge_listing_piuzrv",
                    "textColor": "#ffffff",
                    "title": "Bad Weather",
                    "message": "₹20 extra levied on some restaurants"
                }
            }
        },
        "parentWidget": false
    },
    {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "44462",
                "name": "XO Belgian Waffle",
                "uuid": "a61a0815-b0ee-4abb-a257-a78a4fb1d6d0",
                "city": "1",
                "area": "Koramangala",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "hqtrdytdqec0ih3pfy5u",
                "cuisines": [
                    "Desserts"
                ],
                "tags": [],
                "costForTwo": 25000,
                "costForTwoString": "₹250 FOR TWO",
                "deliveryTime": 44,
                "minDeliveryTime": 44,
                "maxDeliveryTime": 44,
                "slaString": "44 MINS",
                "lastMileTravel": 1.399999976158142,
                "slugs": {
                    "restaurant": "xo-belgian-waffle-koramangala-koramangala",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "#105, 1st A Cross, Jyoti Niwas College Road, Kormangala 5th block",
                "locality": "5th Block",
                "parentId": 5186,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "ribbon": [
                    {
                        "type": "PROMOTED"
                    }
                ],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 3000,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 2000,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 5000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5000",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "LIGHT",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=7194747~p=31~eid=00000188-f303-59f3-0eea-d18300531f4e~srvts=1687704263155",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "1.3 kms",
                "hasSurge": false,
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50",
                    "discountTag": "",
                    "headerTypeV2": 0
                },
                "sla": {
                    "restaurantId": "44462",
                    "deliveryTime": 44,
                    "minDeliveryTime": 44,
                    "maxDeliveryTime": 44,
                    "lastMileTravel": 1.399999976158142,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "LIGHT",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "4.3",
                "totalRatings": 10000,
                "new": false
            },
            "subtype": "basic",
            "crouton": {
                "type": "RAIN",
                "metaInfo": {
                    "bgColor": "#282C3F",
                    "icon": "surge_listing_piuzrv",
                    "textColor": "#ffffff",
                    "title": "Bad Weather",
                    "message": "₹20 extra levied on some restaurants"
                }
            }
        },
        "parentWidget": false
    },
    {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "300642",
                "name": "Al-Bek",
                "uuid": "0628c01e-4bb8-42b6-9c89-5a808d535771",
                "city": "1",
                "area": "J P Nagar",
                "totalRatingsString": "5000+ ratings",
                "cloudinaryImageId": "wyt8ymz3qwspvgvsthxr",
                "cuisines": [
                    "Indian",
                    "Chinese"
                ],
                "tags": [],
                "costForTwo": 60000,
                "costForTwoString": "₹600 FOR TWO",
                "deliveryTime": 38,
                "minDeliveryTime": 38,
                "maxDeliveryTime": 38,
                "slaString": "38 MINS",
                "lastMileTravel": 4.699999809265137,
                "slugs": {
                    "restaurant": "al-bek-jp-nagar-jp-nagar-2",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "No.118/47, GR Basement and First Floor , Opp. Jayadeva Hospital , 2nd Main , 3rd Phase , JP Nagar , Bangalore , District - B.B.M.P South, STATE - Karnataka - 560078",
                "locality": "3rd phase",
                "parentId": 9911,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 4000,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 4000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "4000",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "4.6 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "300642",
                    "deliveryTime": 38,
                    "minDeliveryTime": 38,
                    "maxDeliveryTime": 38,
                    "lastMileTravel": 4.699999809265137,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.0",
                "totalRatings": 5000,
                "new": false
            },
            "subtype": "basic"
        },
        "parentWidget": false
    },
    {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "528523",
                "name": "New Ambur Biryani Point",
                "uuid": "df27b0e1-b794-4081-81e5-d1dc4b34fee5",
                "city": "1",
                "area": "Adugodi",
                "totalRatingsString": "500+ ratings",
                "cloudinaryImageId": "2b6b93195cd8e50f9e393692cf91ed7d",
                "cuisines": [
                    "Biryani",
                    "Chinese",
                    "North Indian"
                ],
                "tags": [],
                "costForTwo": 25000,
                "costForTwoString": "₹250 FOR TWO",
                "deliveryTime": 25,
                "minDeliveryTime": 25,
                "maxDeliveryTime": 25,
                "slaString": "25 MINS",
                "lastMileTravel": 2.5,
                "slugs": {
                    "restaurant": "new-ambur-biryani-point-koramangala-koramangala",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "No. 386, Mahalingeshwara layout, oppo adugodi queries,Adugodi, Bengaluru - 560030, Karnataka.",
                "locality": "Mahalingeshwara layout",
                "parentId": 318345,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 3000,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 2000,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 5000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5000",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "LIGHT",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "2.5 kms",
                "hasSurge": false,
                "aggregatedDiscountInfoV3": {
                    "header": "10% OFF",
                    "subHeader": "ABOVE ₹600",
                    "discountTag": "FLAT DEAL",
                    "headerTypeV2": 0
                },
                "sla": {
                    "restaurantId": "528523",
                    "deliveryTime": 25,
                    "minDeliveryTime": 25,
                    "maxDeliveryTime": 25,
                    "lastMileTravel": 2.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "LIGHT",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.1",
                "totalRatings": 500,
                "new": false
            },
            "subtype": "basic",
            "crouton": {
                "type": "RAIN",
                "metaInfo": {
                    "bgColor": "#282C3F",
                    "icon": "surge_listing_piuzrv",
                    "textColor": "#ffffff",
                    "title": "Bad Weather",
                    "message": "₹20 extra levied on some restaurants"
                }
            }
        },
        "parentWidget": false
    },
    {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "527860",
                "name": "AL Khaja Resturent",
                "uuid": "1fe3fda1-8557-4953-8eb3-64b7a9c6e0bf",
                "city": "1",
                "area": "Bommanahalli",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "t4kx6yqfmvc3ivnbnybp",
                "cuisines": [
                    "Chinese",
                    "North Indian",
                    "Arabian",
                    "Ice Cream",
                    "Beverages"
                ],
                "tags": [],
                "costForTwo": 50000,
                "costForTwoString": "₹500 FOR TWO",
                "deliveryTime": 43,
                "minDeliveryTime": 43,
                "maxDeliveryTime": 43,
                "slaString": "43 MINS",
                "lastMileTravel": 4.800000190734863,
                "slugs": {
                    "restaurant": "al-khaja-resturent-hsr-hsr",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "NO 22/23 B MANGAMMANAPALYA MAIN ROAD NEAR SALAPURIA APARTMENT BOMMANAHALLI BANGALORE 560068",
                "locality": "Mangammanapalya Main Road",
                "parentId": 318464,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 4000,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 2000,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 6000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "6000",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "LIGHT",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "4.8 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "527860",
                    "deliveryTime": 43,
                    "minDeliveryTime": 43,
                    "maxDeliveryTime": 43,
                    "lastMileTravel": 4.800000190734863,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "LIGHT",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.1",
                "totalRatings": 1000,
                "new": false
            },
            "subtype": "basic",
            "crouton": {
                "type": "RAIN",
                "metaInfo": {
                    "bgColor": "#282C3F",
                    "icon": "surge_listing_piuzrv",
                    "textColor": "#ffffff",
                    "title": "Bad Weather",
                    "message": "₹20 extra levied on some restaurants"
                }
            }
        },
        "parentWidget": false
    },
    {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "50467",
                "name": "Bakingo",
                "uuid": "862dd21c-f679-431b-bba4-b5f9fd85e933",
                "city": "1",
                "area": "Koramangala",
                "totalRatingsString": "5000+ ratings",
                "cloudinaryImageId": "wle5xrryznnyrdoxlchz",
                "cuisines": [
                    "Bakery",
                    "Desserts",
                    "Beverages",
                    "Snacks"
                ],
                "tags": [],
                "costForTwo": 30000,
                "costForTwoString": "₹300 FOR TWO",
                "deliveryTime": 27,
                "minDeliveryTime": 27,
                "maxDeliveryTime": 27,
                "slaString": "27 MINS",
                "lastMileTravel": 2.0999999046325684,
                "slugs": {
                    "restaurant": "bakingo-koramangala-koramangala",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "No. 2, 1st Floor, 4th Cross Kormangala 1st Block, Jakkasandra Extension Sarjapur Road Bangalore 560034 Karnataka",
                "locality": "1st Block",
                "parentId": 3818,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "chain": [],
                "feeDetails": {
                    "fees": [
                        {
                            "name": "distance",
                            "fee": 3000,
                            "message": ""
                        },
                        {
                            "name": "special",
                            "fee": 2000,
                            "message": ""
                        },
                        {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                        }
                    ],
                    "totalFees": 5000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5000",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "LIGHT",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "2 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "50467",
                    "deliveryTime": 27,
                    "minDeliveryTime": 27,
                    "maxDeliveryTime": 27,
                    "lastMileTravel": 2.0999999046325684,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "LIGHT",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.2",
                "totalRatings": 5000,
                "new": false
            },
            "subtype": "basic",
            "crouton": {
                "type": "RAIN",
                "metaInfo": {
                    "bgColor": "#282C3F",
                    "icon": "surge_listing_piuzrv",
                    "textColor": "#ffffff",
                    "title": "Bad Weather",
                    "message": "₹20 extra levied on some restaurants"
                }
            }
        },
        "parentWidget": false
    }
]

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restuarant-container">
                {
                    resList.map((restaurant,index)=>(
                        <RestuarantCard key={index} resData={restaurant.data}/>
                    ))
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return(
        <div className="root">
        <Header/>
        <Body/>
        </div>
    )
}

var root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)