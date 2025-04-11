import { createRoot } from "react-dom/client";
import "./App.css";

const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src="src\logo.png" />
  </a>
);

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestrauntList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "43836",
          name: "McDonald's",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/3c85376d-7142-48b7-adb2-363daf24f308_43836.JPG",
          locality: "MG Road",
          areaName: "Ashok Nagar",
          costForTwo: "₹400 for two",
          cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
          avgRating: 4.4,
          parentId: "630",
          avgRatingString: "4.4",
          totalRatingsString: "25K+",
          lastMileTravelString: "1.1 km",
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "953489",
          name: "Wendy's Burgers",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/abe687dd-c957-4a15-86b2-9136210a5d93_953489.JPG",
          locality: "Ashok Nagar",
          areaName: "Ashok Nagar",
          costForTwo: "₹750 for two",
          cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
          avgRating: 4.7,
          parentId: "972",
          avgRatingString: "4.7",
          totalRatingsString: "275",
          lastMileTravelString: "1.6 km",
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "32603",
          name: "Leon's - Burgers & Wings (Leon Grill)",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33b44a22-bc15-4c40-9c2c-ddc68d92a48b_32603.jpg",
          locality: "Indiranagar",
          areaName: "Indiranagar",
          costForTwo: "₹300 for two",
          cuisines: [
            "American",
            "Snacks",
            "Turkish",
            "Portuguese",
            "Continental",
          ],
          avgRating: 4.5,
          parentId: "371281",
          avgRatingString: "4.5",
          totalRatingsString: "58K+",
          promoted: true,
          adTrackingId:
            "cid=27500658~p=5~adgrpid=27500658#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=32603~plpr=COLLECTION~eid=3bfb89ec-af0d-4765-a602-b8fe263b3e13~srvts=1744306213223~collid=83637",
          sla: {
            deliveryTime: 36,
            lastMileTravel: 6.2,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "6.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-11 04:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Burger.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Burger.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.5",
              ratingCount: "4.4K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "27500658",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=32603&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "234701",
          name: "BOSS Burger",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/16/b1ebeee0-3e74-4df7-a7b7-84d4c18bcf14_234701.jpg",
          locality: "Ashok Nagar",
          areaName: "Lavelle Road",
          costForTwo: "₹500 for two",
          cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
          avgRating: 4.5,
          parentId: "8594",
          avgRatingString: "4.5",
          totalRatingsString: "2.3K+",
          sla: {
            deliveryTime: 35,
            lastMileTravel: 0.9,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "0.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-10 23:30:00",
            opened: true,
          },
          badges: {},
          select: true,
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹166 OFF",
            subHeader: "ABOVE ₹549",
            discountTag: "FLAT DEAL",
            headerTypeV2: "HEADER_TYPE_V2_CRICKET_MATCH",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=234701&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "3013",
          name: "Backyard Burgers and Grill",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/12/b2930a05-9228-4552-83a7-39f27bb03650_dbaeafde-623f-4dae-bfd2-b10ca7e9b64c.jpg",
          locality: "Indiranagar",
          areaName: "Indiranagar",
          costForTwo: "₹350 for two",
          cuisines: [
            "Burgers",
            "Snacks",
            "American",
            "Beverages",
            "Desserts",
            "Fast Food",
            "Arabian",
            "Indian",
            "Salads",
            "Korean",
          ],
          avgRating: 4.1,
          parentId: "388154",
          avgRatingString: "4.1",
          totalRatingsString: "1.8K+",
          promoted: true,
          adTrackingId:
            "cid=27119380~p=11~adgrpid=27119380#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=3013~plpr=COLLECTION~eid=fe0342cf-b33a-4f1a-a301-c62738c8e026~srvts=1744306213223~collid=83637",
          sla: {
            deliveryTime: 46,
            lastMileTravel: 8.5,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "8.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-11 03:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹299",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.6",
              ratingCount: "228",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "27119380",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=3013&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "3369",
          name: "Truffles",
          cloudinaryImageId: "umqlmm1ltapmcbbyvxnu",
          locality: "St. Marks Road",
          areaName: "St. Marks Road",
          costForTwo: "₹450 for two",
          cuisines: ["American", "Desserts", "Continental", "Italian"],
          avgRating: 4.6,
          parentId: "218065",
          avgRatingString: "4.6",
          totalRatingsString: "144K+",
          sla: {
            deliveryTime: 33,
            lastMileTravel: 2.7,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "2.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-11 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Burger.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Burger.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.5",
              ratingCount: "20K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=3369&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "855717",
          name: "Burgerama",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/3/3/342fd5bb-8457-496b-8dcf-06765a009faf_33f147cf-d7a9-4935-8940-088547351dd7.jpg",
          locality: "Vasanth Nagar",
          areaName: "R.T. Nagar",
          costForTwo: "₹700 for two",
          cuisines: ["Burger"],
          avgRating: 4.3,
          parentId: "8993",
          avgRatingString: "4.3",
          totalRatingsString: "147",
          promoted: true,
          adTrackingId:
            "cid=27508531~p=12~adgrpid=27508531#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=855717~plpr=COLLECTION~eid=92d7ade9-2fd5-49f4-b122-df7d458839c2~srvts=1744306213223~collid=83637",
          sla: {
            deliveryTime: 36,
            lastMileTravel: 4.9,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "4.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-11 04:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "Gourmet",
                      imageId: "newg.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹166 OFF",
            subHeader: "ABOVE ₹699",
            discountTag: "FLAT DEAL",
            headerTypeV2: "HEADER_TYPE_V2_CRICKET_MATCH",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "27508531",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=855717&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "43836",
          name: "McDonald's",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/3c85376d-7142-48b7-adb2-363daf24f308_43836.JPG",
          locality: "MG Road",
          areaName: "Ashok Nagar",
          costForTwo: "₹400 for two",
          cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
          avgRating: 4.4,
          parentId: "630",
          avgRatingString: "4.4",
          totalRatingsString: "25K+",
          lastMileTravelString: "1.1 km",
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "953489",
          name: "Wendy's Burgers",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/abe687dd-c957-4a15-86b2-9136210a5d93_953489.JPG",
          locality: "Ashok Nagar",
          areaName: "Ashok Nagar",
          costForTwo: "₹750 for two",
          cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
          avgRating: 4.7,
          parentId: "972",
          avgRatingString: "4.7",
          totalRatingsString: "275",
          lastMileTravelString: "1.6 km",
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "32603",
          name: "Leon's - Burgers & Wings (Leon Grill)",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33b44a22-bc15-4c40-9c2c-ddc68d92a48b_32603.jpg",
          locality: "Indiranagar",
          areaName: "Indiranagar",
          costForTwo: "₹300 for two",
          cuisines: [
            "American",
            "Snacks",
            "Turkish",
            "Portuguese",
            "Continental",
          ],
          avgRating: 4.5,
          parentId: "371281",
          avgRatingString: "4.5",
          totalRatingsString: "58K+",
          promoted: true,
          adTrackingId:
            "cid=27500658~p=5~adgrpid=27500658#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=32603~plpr=COLLECTION~eid=3bfb89ec-af0d-4765-a602-b8fe263b3e13~srvts=1744306213223~collid=83637",
          sla: {
            deliveryTime: 36,
            lastMileTravel: 6.2,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "6.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-11 04:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Burger.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Burger.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.5",
              ratingCount: "4.4K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "27500658",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=32603&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "234701",
          name: "BOSS Burger",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/16/b1ebeee0-3e74-4df7-a7b7-84d4c18bcf14_234701.jpg",
          locality: "Ashok Nagar",
          areaName: "Lavelle Road",
          costForTwo: "₹500 for two",
          cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
          avgRating: 4.5,
          parentId: "8594",
          avgRatingString: "4.5",
          totalRatingsString: "2.3K+",
          sla: {
            deliveryTime: 35,
            lastMileTravel: 0.9,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "0.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-10 23:30:00",
            opened: true,
          },
          badges: {},
          select: true,
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹166 OFF",
            subHeader: "ABOVE ₹549",
            discountTag: "FLAT DEAL",
            headerTypeV2: "HEADER_TYPE_V2_CRICKET_MATCH",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=234701&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "3013",
          name: "Backyard Burgers and Grill",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/12/b2930a05-9228-4552-83a7-39f27bb03650_dbaeafde-623f-4dae-bfd2-b10ca7e9b64c.jpg",
          locality: "Indiranagar",
          areaName: "Indiranagar",
          costForTwo: "₹350 for two",
          cuisines: [
            "Burgers",
            "Snacks",
            "American",
            "Beverages",
            "Desserts",
            "Fast Food",
            "Arabian",
            "Indian",
            "Salads",
            "Korean",
          ],
          avgRating: 4.1,
          parentId: "388154",
          avgRatingString: "4.1",
          totalRatingsString: "1.8K+",
          promoted: true,
          adTrackingId:
            "cid=27119380~p=11~adgrpid=27119380#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=3013~plpr=COLLECTION~eid=fe0342cf-b33a-4f1a-a301-c62738c8e026~srvts=1744306213223~collid=83637",
          sla: {
            deliveryTime: 46,
            lastMileTravel: 8.5,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "8.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-11 03:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹299",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.6",
              ratingCount: "228",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "27119380",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=3013&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "3369",
          name: "Truffles",
          cloudinaryImageId: "umqlmm1ltapmcbbyvxnu",
          locality: "St. Marks Road",
          areaName: "St. Marks Road",
          costForTwo: "₹450 for two",
          cuisines: ["American", "Desserts", "Continental", "Italian"],
          avgRating: 4.6,
          parentId: "218065",
          avgRatingString: "4.6",
          totalRatingsString: "144K+",
          sla: {
            deliveryTime: 33,
            lastMileTravel: 2.7,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "2.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-11 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Burger.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Burger.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.5",
              ratingCount: "20K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=3369&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "855717",
          name: "Burgerama",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/3/3/342fd5bb-8457-496b-8dcf-06765a009faf_33f147cf-d7a9-4935-8940-088547351dd7.jpg",
          locality: "Vasanth Nagar",
          areaName: "R.T. Nagar",
          costForTwo: "₹700 for two",
          cuisines: ["Burger"],
          avgRating: 4.3,
          parentId: "8993",
          avgRatingString: "4.3",
          totalRatingsString: "147",
          promoted: true,
          adTrackingId:
            "cid=27508531~p=12~adgrpid=27508531#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=855717~plpr=COLLECTION~eid=92d7ade9-2fd5-49f4-b122-df7d458839c2~srvts=1744306213223~collid=83637",
          sla: {
            deliveryTime: 36,
            lastMileTravel: 4.9,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "4.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-11 04:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "Gourmet",
                      imageId: "newg.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹166 OFF",
            subHeader: "ABOVE ₹699",
            discountTag: "FLAT DEAL",
            headerTypeV2: "HEADER_TYPE_V2_CRICKET_MATCH",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "27508531",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=855717&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "43836",
          name: "McDonald's",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/3c85376d-7142-48b7-adb2-363daf24f308_43836.JPG",
          locality: "MG Road",
          areaName: "Ashok Nagar",
          costForTwo: "₹400 for two",
          cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
          avgRating: 4.4,
          parentId: "630",
          avgRatingString: "4.4",
          totalRatingsString: "25K+",
          lastMileTravelString: "1.1 km",
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "953489",
          name: "Wendy's Burgers",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/abe687dd-c957-4a15-86b2-9136210a5d93_953489.JPG",
          locality: "Ashok Nagar",
          areaName: "Ashok Nagar",
          costForTwo: "₹750 for two",
          cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
          avgRating: 4.7,
          parentId: "972",
          avgRatingString: "4.7",
          totalRatingsString: "275",
          lastMileTravelString: "1.6 km",
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "32603",
          name: "Leon's - Burgers & Wings (Leon Grill)",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33b44a22-bc15-4c40-9c2c-ddc68d92a48b_32603.jpg",
          locality: "Indiranagar",
          areaName: "Indiranagar",
          costForTwo: "₹300 for two",
          cuisines: [
            "American",
            "Snacks",
            "Turkish",
            "Portuguese",
            "Continental",
          ],
          avgRating: 4.5,
          parentId: "371281",
          avgRatingString: "4.5",
          totalRatingsString: "58K+",
          promoted: true,
          adTrackingId:
            "cid=27500658~p=5~adgrpid=27500658#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=32603~plpr=COLLECTION~eid=3bfb89ec-af0d-4765-a602-b8fe263b3e13~srvts=1744306213223~collid=83637",
          sla: {
            deliveryTime: 36,
            lastMileTravel: 6.2,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "6.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-11 04:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Burger.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Burger.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.5",
              ratingCount: "4.4K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "27500658",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=32603&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "234701",
          name: "BOSS Burger",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/16/b1ebeee0-3e74-4df7-a7b7-84d4c18bcf14_234701.jpg",
          locality: "Ashok Nagar",
          areaName: "Lavelle Road",
          costForTwo: "₹500 for two",
          cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
          avgRating: 4.5,
          parentId: "8594",
          avgRatingString: "4.5",
          totalRatingsString: "2.3K+",
          sla: {
            deliveryTime: 35,
            lastMileTravel: 0.9,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "0.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-10 23:30:00",
            opened: true,
          },
          badges: {},
          select: true,
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹166 OFF",
            subHeader: "ABOVE ₹549",
            discountTag: "FLAT DEAL",
            headerTypeV2: "HEADER_TYPE_V2_CRICKET_MATCH",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=234701&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "3013",
          name: "Backyard Burgers and Grill",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/12/b2930a05-9228-4552-83a7-39f27bb03650_dbaeafde-623f-4dae-bfd2-b10ca7e9b64c.jpg",
          locality: "Indiranagar",
          areaName: "Indiranagar",
          costForTwo: "₹350 for two",
          cuisines: [
            "Burgers",
            "Snacks",
            "American",
            "Beverages",
            "Desserts",
            "Fast Food",
            "Arabian",
            "Indian",
            "Salads",
            "Korean",
          ],
          avgRating: 4.1,
          parentId: "388154",
          avgRatingString: "4.1",
          totalRatingsString: "1.8K+",
          promoted: true,
          adTrackingId:
            "cid=27119380~p=11~adgrpid=27119380#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=3013~plpr=COLLECTION~eid=fe0342cf-b33a-4f1a-a301-c62738c8e026~srvts=1744306213223~collid=83637",
          sla: {
            deliveryTime: 46,
            lastMileTravel: 8.5,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "8.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-11 03:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹299",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.6",
              ratingCount: "228",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "27119380",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=3013&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "3369",
          name: "Truffles",
          cloudinaryImageId: "umqlmm1ltapmcbbyvxnu",
          locality: "St. Marks Road",
          areaName: "St. Marks Road",
          costForTwo: "₹450 for two",
          cuisines: ["American", "Desserts", "Continental", "Italian"],
          avgRating: 4.6,
          parentId: "218065",
          avgRatingString: "4.6",
          totalRatingsString: "144K+",
          sla: {
            deliveryTime: 33,
            lastMileTravel: 2.7,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "2.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-11 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Burger.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Burger.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.5",
              ratingCount: "20K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=3369&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "855717",
          name: "Burgerama",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/3/3/342fd5bb-8457-496b-8dcf-06765a009faf_33f147cf-d7a9-4935-8940-088547351dd7.jpg",
          locality: "Vasanth Nagar",
          areaName: "R.T. Nagar",
          costForTwo: "₹700 for two",
          cuisines: ["Burger"],
          avgRating: 4.3,
          parentId: "8993",
          avgRatingString: "4.3",
          totalRatingsString: "147",
          promoted: true,
          adTrackingId:
            "cid=27508531~p=12~adgrpid=27508531#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=855717~plpr=COLLECTION~eid=92d7ade9-2fd5-49f4-b122-df7d458839c2~srvts=1744306213223~collid=83637",
          sla: {
            deliveryTime: 36,
            lastMileTravel: 4.9,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "4.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-11 04:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "Gourmet",
                      imageId: "newg.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹166 OFF",
            subHeader: "ABOVE ₹699",
            discountTag: "FLAT DEAL",
            headerTypeV2: "HEADER_TYPE_V2_CRICKET_MATCH",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "27508531",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=855717&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

//instead of doing hardcording
// const BurgerKing = {
//   Name: "Burger King",
//   Image:
//     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/5cc80528-07c3-4cb7-995f-db3843e8f22e_672074.JPG",
//   Cusines: ["classic", "American"],
//   Rating: 4.3,
// };

const RestrauntCard = (props) => {
  const restaurantInfo = props.restraunt.card.card.info;
  return (
    <div className="card">
      <img
        alt={restaurantInfo.name}
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurantInfo.cloudinaryImageId}`}
      />
      <h2>{restaurantInfo?.name}</h2>
      <h3>{restaurantInfo?.cuisines.join(", ")}</h3>
      <h4>{restaurantInfo?.avgRating} stars</h4>
      <p>{restaurantInfo?.costForTwo}</p>
      <p>
        {restaurantInfo?.areaName}, {restaurantInfo.locality}
      </p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restrauntant-list">
      {
        //using map
        RestrauntList.map((restraunt, index) => {
          return <RestrauntCard key={index} restraunt={restraunt} />;
        })
      }
      {/*
      //one by one
       <RestrauntCard restraunt={RestrauntList[0]} />
      <RestrauntCard restraunt={RestrauntList[1]} />
      <RestrauntCard restraunt={RestrauntList[2]} />
      <RestrauntCard restraunt={RestrauntList[3]} />
      <RestrauntCard restraunt={RestrauntList[4]} />
      <RestrauntCard restraunt={RestrauntList[5]} />
      <RestrauntCard restraunt={RestrauntList[6]} /> */}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h2>Footer goes here </h2>
    </div>
  );
};

export default function AppLayout() {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<AppLayout />);
