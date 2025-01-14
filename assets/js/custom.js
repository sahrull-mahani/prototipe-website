// Set interval to switch tabs every 5 seconds
// const intervalId = setInterval(function () {
//     const currentTab = $('.nav-link.active')
//     let nextTab = currentTab.parent().next().find('button')

//     // If next tab doesn't exist, go back to the first one
//     if (!nextTab.length) {
//         nextTab = $('#pills-tab .nav-item:first .nav-link')
//     }

//     nextTab.trigger('click')
// }, 5000)

$('input[type="number"]').on('keyup', function () {
  if (this.value < $(this).attr('min')) {
    this.value = ''
  }
})

const formatTemplate = (kota) => {
  return $(
    `<ul class="list-inline">
            <li class="list-inline-item">
                <i class="fa fa-2x fa-building-circle-arrow-right text-secondary"></i>
            </li>
            <li class="list-inline-item">
                <h6 class="fw-bolder text-uppercase">${kota.text}</h6>
                <p class="text-secondary text-capitalize">${kota.region}, ${kota.properti} Properti</p>
            </li>
        </ul>`
  )
}

$('.select2').select2({
  theme: "bootstrap-5",
  containerCssClass: "select2--small",
  dropdownCssClass: "select2--small",
  allowClear: true,
  placeholder: 'Kota, Hotel, atau Landmark',
  templateResult: formatTemplate,
  data: [
    {
      id: 1,
      text: 'Gorontalo',
      region: 'Kota',
      properti: 42
    },
    {
      id: 2,
      text: 'Gorontalo',
      region: 'Kabupaten',
      properti: 33
    },
  ]
})

const campaignsHotel = {
  "isSuccess": true,
  "result": {
    "sections": [
      {
        "sectionName": "Accommodation",
        "cards": [
          {
            "cardId": 2917,
            "cardName": "hfld_newyear_id",
            "priority": 417,
            "cardType": "banner",
            "categories": [
              {
                "categoryId": 30,
                "categoryName": "Uncategorized",
                "categoryDescription": "Uncategorized",
                "priority": 30,
                "parentPriorityId": null
              }
            ],
            "productFunnel": "hotel",
            "content": {
              "imageUrl": "https://cdn6.agoda.net/images/EmailMarketing/contentcard/HFLD_NewYear_ID/hp/web/id-id.png",
              "imageRedirectLink": "https://www.agoda.com/c/NewYear_ID?siteid=1920845",
              "title": null,
              "description": null,
              "buttonText": null,
              "buttonUrl": null,
              "buttonType": null
            },
            "dynamicContent": null
          },
          {
            "cardId": 1723,
            "cardName": "dealspage_banner_1strank",
            "priority": 416,
            "cardType": "banner",
            "categories": [
              {
                "categoryId": 30,
                "categoryName": "Uncategorized",
                "categoryDescription": "Uncategorized",
                "priority": 30,
                "parentPriorityId": null
              }
            ],
            "productFunnel": "hotel",
            "content": {
              "imageUrl": "https://cdn6.agoda.net/images/WebCampaign/dealspagebanner_hp_web/id-id.png",
              "imageRedirectLink": "http://www.agoda.com/deals?cid=1916891",
              "title": null,
              "description": null,
              "buttonText": null,
              "buttonUrl": null,
              "buttonType": null
            },
            "dynamicContent": null
          },
          {
            "cardId": 896,
            "cardName": "pulse_local_campaign_reason to travel_sg",
            "priority": 411,
            "cardType": "banner",
            "categories": [
              {
                "categoryId": 30,
                "categoryName": "Uncategorized",
                "categoryDescription": "Uncategorized",
                "priority": 30,
                "parentPriorityId": null
              }
            ],
            "productFunnel": "hotel",
            "content": {
              "imageUrl": "https://cdn6.agoda.net/images/WebCampaign/20241224_sg_stb/home_banner_web/en-us.png",
              "imageRedirectLink": "http://www.agoda.com/ReasonToTravelSG?cid=1914460",
              "title": null,
              "description": null,
              "buttonText": null,
              "buttonUrl": null,
              "buttonType": null
            },
            "dynamicContent": null
          },
          {
            "cardId": 2868,
            "cardName": "pulse_local campaign_weekday deals_id",
            "priority": 389,
            "cardType": "banner",
            "categories": [
              {
                "categoryId": 30,
                "categoryName": "Uncategorized",
                "categoryDescription": "Uncategorized",
                "priority": 30,
                "parentPriorityId": null
              }
            ],
            "productFunnel": "hotel",
            "content": {
              "imageUrl": "https://cdn6.agoda.net/images/WebCampaign/20241223_id_weekdaydeals/home_banner_web02/id-id.png",
              "imageRedirectLink": "http://www.agoda.com/WeekdayDealsID?cid=1924847",
              "title": null,
              "description": null,
              "buttonText": null,
              "buttonUrl": null,
              "buttonType": null
            },
            "dynamicContent": null
          },
          {
            "cardId": 2726,
            "cardName": "pulse_local campaign_abudhabi_uae",
            "priority": 370,
            "cardType": "banner",
            "categories": [
              {
                "categoryId": 30,
                "categoryName": "Uncategorized",
                "categoryDescription": "Uncategorized",
                "priority": 30,
                "parentPriorityId": null
              }
            ],
            "productFunnel": "hotel",
            "content": {
              "imageUrl": "https://cdn6.agoda.net/images/WebCampaign/20241206_uae_abudhabi/home_banner_web03/id-id.png",
              "imageRedirectLink": "http://www.agoda.com/AbuDhabiUAE?cid=1924832",
              "title": null,
              "description": null,
              "buttonText": null,
              "buttonUrl": null,
              "buttonType": null
            },
            "dynamicContent": null
          },
          {
            "cardId": 462,
            "cardName": "pulse_local campaign_dontbreakthebank_ID",
            "priority": 364,
            "cardType": "banner",
            "categories": [
              {
                "categoryId": 30,
                "categoryName": "Uncategorized",
                "categoryDescription": "Uncategorized",
                "priority": 30,
                "parentPriorityId": null
              }
            ],
            "productFunnel": "hotel",
            "content": {
              "imageUrl": "https://cdn6.agoda.net/images/WebCampaign/pulse_localcampaign_celeb_id/home_banner_web2/id-id.png",
              "imageRedirectLink": "http://www.agoda.com/HappyWalletID?cid=1914404",
              "title": null,
              "description": null,
              "buttonText": null,
              "buttonUrl": null,
              "buttonType": null
            },
            "dynamicContent": null
          },
          {
            "cardId": 2882,
            "cardName": "pulse_global campaign_new year sale",
            "priority": 292,
            "cardType": "banner",
            "categories": [
              {
                "categoryId": 30,
                "categoryName": "Uncategorized",
                "categoryDescription": "Uncategorized",
                "priority": 30,
                "parentPriorityId": null
              }
            ],
            "productFunnel": "hotel",
            "content": {
              "imageUrl": "https://cdn6.agoda.net/images/WebCampaign/20241224_ss_newyearsale/home_banner_web/id-id.png",
              "imageRedirectLink": "http://www.agoda.com/NewYearSaleSS?cid=1924851",
              "title": null,
              "description": null,
              "buttonText": null,
              "buttonUrl": null,
              "buttonType": null
            },
            "dynamicContent": null
          },
          {
            "cardId": 1067,
            "cardName": "pulse_global campaign_midnight madness",
            "priority": 287,
            "cardType": "banner",
            "categories": [
              {
                "categoryId": 30,
                "categoryName": "Uncategorized",
                "categoryDescription": "Uncategorized",
                "priority": 30,
                "parentPriorityId": null
              }
            ],
            "productFunnel": "hotel",
            "content": {
              "imageUrl": "https://cdn6.agoda.net/images/WebCampaign/pulse_globalcampaign_midnightmadness/home_banner_web2/id-id.png",
              "imageRedirectLink": "http://www.agoda.com/MidnightMadnessNoonDash?cid=1914474",
              "title": null,
              "description": null,
              "buttonText": null,
              "buttonUrl": null,
              "buttonType": null
            },
            "dynamicContent": null
          },
          {
            "cardId": 455,
            "cardName": "pulse_global campaign_mid month sale",
            "priority": 276,
            "cardType": "banner",
            "categories": [
              {
                "categoryId": 30,
                "categoryName": "Uncategorized",
                "categoryDescription": "Uncategorized",
                "priority": 30,
                "parentPriorityId": null
              }
            ],
            "productFunnel": "hotel",
            "content": {
              "imageUrl": "https://cdn6.agoda.net/images/WebCampaign/wcMM20230312/home_banner_web3/id-id.png",
              "imageRedirectLink": "http://www.agoda.com/MidMonthSale?cid=1901260",
              "title": null,
              "description": null,
              "buttonText": null,
              "buttonUrl": null,
              "buttonType": null
            },
            "dynamicContent": null
          },
          {
            "cardId": 1495,
            "cardName": "pulse_local_campaign_wonderful indonesia_id",
            "priority": 224,
            "cardType": "banner",
            "categories": [
              {
                "categoryId": 30,
                "categoryName": "Uncategorized",
                "categoryDescription": "Uncategorized",
                "priority": 30,
                "parentPriorityId": null
              }
            ],
            "productFunnel": "hotel",
            "content": {
              "imageUrl": "https://cdn6.agoda.net/images/WebCampaign/pulse_localcampaign_wonderfulindonesia_id/home_banner_web2/id-id.png",
              "imageRedirectLink": "http://www.agoda.com/WonderfulID?cid=1914531",
              "title": null,
              "description": null,
              "buttonText": null,
              "buttonUrl": null,
              "buttonType": null
            },
            "dynamicContent": null
          },
          {
            "cardId": 382,
            "cardName": "pulse_local campaign_brand exclusives_reddoorz_ID",
            "priority": 82,
            "cardType": "banner",
            "categories": [
              {
                "categoryId": 30,
                "categoryName": "Uncategorized",
                "categoryDescription": "Uncategorized",
                "priority": 30,
                "parentPriorityId": null
              }
            ],
            "productFunnel": "hotel",
            "content": {
              "imageUrl": "https://cdn6.agoda.net/images/WebCampaign/wcSP20231005RedDoorzID/home_banner_web2/id-id.png",
              "imageRedirectLink": "http://www.agoda.com/RedDoorzID?cid=1901283",
              "title": null,
              "description": null,
              "buttonText": null,
              "buttonUrl": null,
              "buttonType": null
            },
            "dynamicContent": null
          },
          {
            "cardId": 332,
            "cardName": "m4s_eliteoffers",
            "priority": 19,
            "cardType": "banner",
            "categories": [
              {
                "categoryId": 30,
                "categoryName": "Uncategorized",
                "categoryDescription": "Uncategorized",
                "priority": 30,
                "parentPriorityId": null
              }
            ],
            "productFunnel": "hotel",
            "content": {
              "imageUrl": "https://cdn6.agoda.net/images/WebCampaign/wcM4S20230403Elite/home_banner_web2/id-id.png",
              "imageRedirectLink": "http://www.agoda.com/EliteOffersAsia?cid=1914292",
              "title": null,
              "description": null,
              "buttonText": null,
              "buttonUrl": null,
              "buttonType": null
            },
            "dynamicContent": null
          },
          {
            "cardId": 410,
            "cardName": "pulse_global campaign_nightowlsale_always on",
            "priority": 16,
            "cardType": "banner",
            "categories": [
              {
                "categoryId": 30,
                "categoryName": "Uncategorized",
                "categoryDescription": "Uncategorized",
                "priority": 30,
                "parentPriorityId": null
              }
            ],
            "productFunnel": "hotel",
            "content": {
              "imageUrl": "https://cdn6.agoda.net/images/WebCampaign/wcNO20230101/home_banner_web3/id-id.png",
              "imageRedirectLink": "http://www.agoda.com/NightOwlSale?cid=1901202",
              "title": null,
              "description": null,
              "buttonText": null,
              "buttonUrl": null,
              "buttonType": null
            },
            "dynamicContent": null
          },
          {
            "cardId": 430,
            "cardName": "pulse_global campaign_book early pay less_always on",
            "priority": 15,
            "cardType": "banner",
            "categories": [
              {
                "categoryId": 30,
                "categoryName": "Uncategorized",
                "categoryDescription": "Uncategorized",
                "priority": 30,
                "parentPriorityId": null
              }
            ],
            "productFunnel": "hotel",
            "content": {
              "imageUrl": "https://cdn6.agoda.net/images/WebCampaign/pulse_globalcampaign_bookearlypayless/home_banner_web3/id-id.png",
              "imageRedirectLink": "http://www.agoda.com/BookEarlyPayless?cid=1914396",
              "title": null,
              "description": null,
              "buttonText": null,
              "buttonUrl": null,
              "buttonType": null
            },
            "dynamicContent": null
          },
          {
            "cardId": 426,
            "cardName": "pulse_global campaign_stay longer for less_always on",
            "priority": 14,
            "cardType": "banner",
            "categories": [
              {
                "categoryId": 30,
                "categoryName": "Uncategorized",
                "categoryDescription": "Uncategorized",
                "priority": 30,
                "parentPriorityId": null
              }
            ],
            "productFunnel": "hotel",
            "content": {
              "imageUrl": "https://cdn6.agoda.net/images/WebCampaign/wcSL20231001/home_banner_web2/id-id.png",
              "imageRedirectLink": "http://www.agoda.com/StayLongerforLess?cid=1914395",
              "title": null,
              "description": null,
              "buttonText": null,
              "buttonUrl": null,
              "buttonType": null
            },
            "dynamicContent": null
          }
        ],
        "categories": [
          {
            "categoryId": 30,
            "categoryName": "Uncategorized",
            "categoryDescription": "Uncategorized",
            "priority": 30,
            "parentPriorityId": null
          }
        ]
      }
    ]
  },
  "error": null
}

campaignsHotel.result.sections[0].cards.map(data => {
  console.log(data)
  $('#promo-hotel').find('.swiper-wrapper').append(`
        <div class="swiper-slide" data-aos="zoom-in" data-aos-delay="100">
            <a href="${data.content.imageRedirectLink}">
              <img src="${data.content.imageUrl}"
                alt="thumbnail Big Brother - Gala - 4 de fevereiro de 2024" class="item" loading="lazy">
            </a>
        </div>
        `)
})

const campaignsFlight = {
  "isSuccess": true,
  "result": {
    "sections": [
      {
        "sectionName": "Flights_And_Activities",
        "cards": [
          {
            "cardId": 2898,
            "cardName": "flights_hyperlocalization_new_year_id",
            "priority": 95,
            "cardType": "banner",
            "categories": [
              {
                "categoryId": 54,
                "categoryName": "Uncategorized",
                "categoryDescription": "Uncategorized",
                "priority": 54,
                "parentPriorityId": null
              }
            ],
            "productFunnel": "flight",
            "content": {
              "imageUrl": "https://cdn6.agoda.net/images/blt2/wcFlightsHyperlocaliazationNewYear/Indonesia/HP/Web/id-id.png",
              "imageRedirectLink": "http://www.agoda.com/flights?cid=1934918",
              "title": null,
              "description": null,
              "buttonText": null,
              "buttonUrl": null,
              "buttonType": null
            },
            "dynamicContent": null
          },
          {
            "cardId": 2911,
            "cardName": "pulse_flightsmkt_citilinksoybeanv1",
            "priority": 93,
            "cardType": "banner",
            "categories": [
              {
                "categoryId": 54,
                "categoryName": "Uncategorized",
                "categoryDescription": "Uncategorized",
                "priority": 54,
                "parentPriorityId": null
              }
            ],
            "productFunnel": "flight",
            "content": {
              "imageUrl": "https://7304094.fs1.hubspotusercontent-na1.net/hubfs/7304094/flight_ops/marketing%20campaigns/Citilink/AgodaSoyBean1/mspa/en-us.png",
              "imageRedirectLink": "http://www.agoda.com/flights",
              "title": null,
              "description": null,
              "buttonText": null,
              "buttonUrl": null,
              "buttonType": null
            },
            "dynamicContent": null
          },
          {
            "cardId": 1430,
            "cardName": "Activities_Global campaign_Evergreen_15%",
            "priority": 88,
            "cardType": "banner",
            "categories": [
              {
                "categoryId": 54,
                "categoryName": "Uncategorized",
                "categoryDescription": "Uncategorized",
                "priority": 54,
                "parentPriorityId": null
              }
            ],
            "productFunnel": "activity",
            "content": {
              "imageUrl": "https://cdn6.agoda.net/images/blt2/wcActivtiesEG-NV-20240514/Web/id-id.png",
              "imageRedirectLink": "http://www.agoda.com/activities?cid=1915785",
              "title": null,
              "description": null,
              "buttonText": null,
              "buttonUrl": null,
              "buttonType": null
            },
            "dynamicContent": null
          },
          {
            "cardId": 868,
            "cardName": "flights_evergreen_5%",
            "priority": 0,
            "cardType": "banner",
            "categories": [
              {
                "categoryId": 54,
                "categoryName": "Uncategorized",
                "categoryDescription": "Uncategorized",
                "priority": 54,
                "parentPriorityId": null
              }
            ],
            "productFunnel": "flight",
            "content": {
              "imageUrl": "https://cdn6.agoda.net/images/blt2/wcFlightsEvergreenRebrand/Desktop/id-id.png",
              "imageRedirectLink": "http://www.agoda.com/flights?cid=1904159",
              "title": null,
              "description": null,
              "buttonText": null,
              "buttonUrl": null,
              "buttonType": null
            },
            "dynamicContent": null
          }
        ],
        "categories": [
          {
            "categoryId": 54,
            "categoryName": "Uncategorized",
            "categoryDescription": "Uncategorized",
            "priority": 54,
            "parentPriorityId": null
          }
        ]
      }
    ]
  },
  "error": null
}

campaignsFlight.result.sections[0].cards.map(({ content }) => {
  $('#promo-penerbangan').find('.swiper-wrapper').append(`
        <div class="swiper-slide" data-aos="zoom-in" data-aos-delay="100">
            <a href="${content.imageRedirectLink}">
              <img src="${content.imageUrl}"
                alt="thumbnail Big Brother - Gala - 4 de fevereiro de 2024" class="item" loading="lazy">
            </a>
        </div>
        `)
})

const swiper = new Swiper('.promo .swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // initialSlide: 1,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // slidesPerView: 3,
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  // Breakpoints
  breakpoints: {
    // ketika lebar layar <= 425px
    425: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // ketika lebar layar <= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // ketika lebar layar <= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
    // ketika lebar layar <= 1024px
    1024: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true
  },
})

const pad = (str, max) => {
  str = str.toString()
  return str.length < max ? pad("0" + str, max) : str
}

const domesticDestinations = {
  "destinationsHeader": "Destinasi terpopuler",
  "topDestinations": [],
  "topDomesticDestinations": [
    {
      "activityCityUrl": "/activities/city/indonesia/jakarta",
      "cityId": 8691,
      "countryId": 192,
      "cityName": "Jakarta",
      "cityNameEnglish": "Jakarta",
      "cityUrl": "/id-id/city/jakarta-id.html",
      "imageUrls": {
        "w396h298": "https://pix6.agoda.net/geo/city/8691/1_8691_02.jpg?ca=6&ce=1&s=396x298&ar=4x3",
        "w328h328": "https://pix6.agoda.net/geo/city/8691/1_8691_02.jpg?ca=6&ce=1&s=328x328&ar=1x1",
        "w345h345": "https://pix6.agoda.net/geo/city/8691/1_8691_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
        "w694h298": "https://pix6.agoda.net/geo/city/8691/1_8691_02.jpg?ca=6&ce=1&s=694x298&ar=21x9",
        "w200h200": "https://pix6.agoda.net/geo/city/8691/1_8691_02.jpg?ca=6&ce=1&s=200x200",
        "w390h168": "https://pix6.agoda.net/geo/city/8691/1_8691_02.jpg?ca=6&ce=1&s=390x168&ar=21x9",
        "w762h328": "https://pix6.agoda.net/geo/city/8691/1_8691_02.jpg?ca=6&ce=1&s=762x328&ar=21x9",
        "w100h100": "https://pix6.agoda.net/geo/city/8691/1_8691_02.jpg?ca=6&ce=1&s=100x100"
      },
      "countryName": "Indonesia",
      "countryNameEnglish": "Indonesia",
      "noOfHotels": 14249,
      "formattedNoOfHotels": "14,249",
      "searchUrl": "",
      "propertyText": "hotel"
    },
    {
      "activityCityUrl": "/activities/city/indonesia/bandung",
      "cityId": 18943,
      "countryId": 192,
      "cityName": "Bandung",
      "cityNameEnglish": "Bandung",
      "cityUrl": "/id-id/city/bandung-id.html",
      "imageUrls": {
        "w396h298": "https://pix6.agoda.net/geo/city/18943/1_18943_02.jpg?ca=6&ce=1&s=396x298&ar=4x3",
        "w328h328": "https://pix6.agoda.net/geo/city/18943/1_18943_02.jpg?ca=6&ce=1&s=328x328&ar=1x1",
        "w345h345": "https://pix6.agoda.net/geo/city/18943/1_18943_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
        "w694h298": "https://pix6.agoda.net/geo/city/18943/1_18943_02.jpg?ca=6&ce=1&s=694x298&ar=21x9",
        "w200h200": "https://pix6.agoda.net/geo/city/18943/1_18943_02.jpg?ca=6&ce=1&s=200x200",
        "w390h168": "https://pix6.agoda.net/geo/city/18943/1_18943_02.jpg?ca=6&ce=1&s=390x168&ar=21x9",
        "w762h328": "https://pix6.agoda.net/geo/city/18943/1_18943_02.jpg?ca=6&ce=1&s=762x328&ar=21x9",
        "w100h100": "https://pix6.agoda.net/geo/city/18943/1_18943_02.jpg?ca=6&ce=1&s=100x100"
      },
      "countryName": "Indonesia",
      "countryNameEnglish": "Indonesia",
      "noOfHotels": 7196,
      "formattedNoOfHotels": "7,196",
      "searchUrl": "",
      "propertyText": "hotel"
    },
    {
      "activityCityUrl": "/activities/city/indonesia/yogyakarta",
      "cityId": 14018,
      "countryId": 192,
      "cityName": "Yogyakarta",
      "cityNameEnglish": "Yogyakarta",
      "cityUrl": "/id-id/city/yogyakarta-id.html",
      "imageUrls": {
        "w396h298": "https://pix6.agoda.net/geo/city/14018/0e41c2ef571279dcbcb490c185ac70d4.jpg?ce=0&s=396x298&ar=4x3",
        "w328h328": "https://pix6.agoda.net/geo/city/14018/0e41c2ef571279dcbcb490c185ac70d4.jpg?ce=0&s=328x328&ar=1x1",
        "w345h345": "https://pix6.agoda.net/geo/city/14018/0e41c2ef571279dcbcb490c185ac70d4.jpg?ce=0&s=345x345&ar=1x1",
        "w694h298": "https://pix6.agoda.net/geo/city/14018/0e41c2ef571279dcbcb490c185ac70d4.jpg?ce=0&s=694x298&ar=21x9",
        "w200h200": "https://pix6.agoda.net/geo/city/14018/0e41c2ef571279dcbcb490c185ac70d4.jpg?ce=0&s=200x200",
        "w390h168": "https://pix6.agoda.net/geo/city/14018/0e41c2ef571279dcbcb490c185ac70d4.jpg?ce=0&s=390x168&ar=21x9",
        "w762h328": "https://pix6.agoda.net/geo/city/14018/0e41c2ef571279dcbcb490c185ac70d4.jpg?ce=0&s=762x328&ar=21x9",
        "w100h100": "https://pix6.agoda.net/geo/city/14018/0e41c2ef571279dcbcb490c185ac70d4.jpg?ce=0&s=100x100"
      },
      "countryName": "Indonesia",
      "countryNameEnglish": "Indonesia",
      "noOfHotels": 5503,
      "formattedNoOfHotels": "5,503",
      "searchUrl": "",
      "propertyText": "hotel"
    },
    {
      "activityCityUrl": "/activities/city/indonesia/surabaya",
      "cityId": 10779,
      "countryId": 192,
      "cityName": "Surabaya",
      "cityNameEnglish": "Surabaya",
      "cityUrl": "/id-id/city/surabaya-id.html",
      "imageUrls": {
        "w396h298": "https://pix6.agoda.net/geo/city/10779/1_10779_02.jpg?ca=6&ce=1&s=396x298&ar=4x3",
        "w328h328": "https://pix6.agoda.net/geo/city/10779/1_10779_02.jpg?ca=6&ce=1&s=328x328&ar=1x1",
        "w345h345": "https://pix6.agoda.net/geo/city/10779/1_10779_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
        "w694h298": "https://pix6.agoda.net/geo/city/10779/1_10779_02.jpg?ca=6&ce=1&s=694x298&ar=21x9",
        "w200h200": "https://pix6.agoda.net/geo/city/10779/1_10779_02.jpg?ca=6&ce=1&s=200x200",
        "w390h168": "https://pix6.agoda.net/geo/city/10779/1_10779_02.jpg?ca=6&ce=1&s=390x168&ar=21x9",
        "w762h328": "https://pix6.agoda.net/geo/city/10779/1_10779_02.jpg?ca=6&ce=1&s=762x328&ar=21x9",
        "w100h100": "https://pix6.agoda.net/geo/city/10779/1_10779_02.jpg?ca=6&ce=1&s=100x100"
      },
      "countryName": "Indonesia",
      "countryNameEnglish": "Indonesia",
      "noOfHotels": 3145,
      "formattedNoOfHotels": "3,145",
      "searchUrl": "",
      "propertyText": "hotel"
    },
    {
      "activityCityUrl": "/activities/city/indonesia/bali",
      "cityId": 17193,
      "countryId": 192,
      "cityName": "Bali",
      "cityNameEnglish": "Bali",
      "cityUrl": "/id-id/city/bali-id.html",
      "imageUrls": {
        "w396h298": "https://pix6.agoda.net/geo/city/17193/1_17193_02.jpg?ca=6&ce=1&s=396x298&ar=4x3",
        "w328h328": "https://pix6.agoda.net/geo/city/17193/1_17193_02.jpg?ca=6&ce=1&s=328x328&ar=1x1",
        "w345h345": "https://pix6.agoda.net/geo/city/17193/1_17193_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
        "w694h298": "https://pix6.agoda.net/geo/city/17193/1_17193_02.jpg?ca=6&ce=1&s=694x298&ar=21x9",
        "w200h200": "https://pix6.agoda.net/geo/city/17193/1_17193_02.jpg?ca=6&ce=1&s=200x200",
        "w390h168": "https://pix6.agoda.net/geo/city/17193/1_17193_02.jpg?ca=6&ce=1&s=390x168&ar=21x9",
        "w762h328": "https://pix6.agoda.net/geo/city/17193/1_17193_02.jpg?ca=6&ce=1&s=762x328&ar=21x9",
        "w100h100": "https://pix6.agoda.net/geo/city/17193/1_17193_02.jpg?ca=6&ce=1&s=100x100"
      },
      "countryName": "Indonesia",
      "countryNameEnglish": "Indonesia",
      "noOfHotels": 32908,
      "formattedNoOfHotels": "32,908",
      "searchUrl": "",
      "propertyText": "hotel"
    },
    {
      "activityCityUrl": "/activities/city/indonesia/tangerang",
      "cityId": 102488,
      "countryId": 192,
      "cityName": "Tangerang",
      "cityNameEnglish": "Tangerang",
      "cityUrl": "/id-id/city/tangerang-id.html",
      "imageUrls": {
        "w396h298": "https://pix6.agoda.net/geo/city/102488/1_102488_02.jpg?ca=6&ce=1&s=396x298&ar=4x3",
        "w328h328": "https://pix6.agoda.net/geo/city/102488/1_102488_02.jpg?ca=6&ce=1&s=328x328&ar=1x1",
        "w345h345": "https://pix6.agoda.net/geo/city/102488/1_102488_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
        "w694h298": "https://pix6.agoda.net/geo/city/102488/1_102488_02.jpg?ca=6&ce=1&s=694x298&ar=21x9",
        "w200h200": "https://pix6.agoda.net/geo/city/102488/1_102488_02.jpg?ca=6&ce=1&s=200x200",
        "w390h168": "https://pix6.agoda.net/geo/city/102488/1_102488_02.jpg?ca=6&ce=1&s=390x168&ar=21x9",
        "w762h328": "https://pix6.agoda.net/geo/city/102488/1_102488_02.jpg?ca=6&ce=1&s=762x328&ar=21x9",
        "w100h100": "https://pix6.agoda.net/geo/city/102488/1_102488_02.jpg?ca=6&ce=1&s=100x100"
      },
      "countryName": "Indonesia",
      "countryNameEnglish": "Indonesia",
      "noOfHotels": 6293,
      "formattedNoOfHotels": "6,293",
      "searchUrl": "",
      "propertyText": "hotel"
    },
    {
      "activityCityUrl": "/activities/city/indonesia/malang",
      "cityId": 5414,
      "countryId": 192,
      "cityName": "Malang",
      "cityNameEnglish": "Malang",
      "cityUrl": "/id-id/city/malang-id.html",
      "imageUrls": {
        "w396h298": "https://pix6.agoda.net/geo/city/5414/1_5414_02.jpg?ca=6&ce=1&s=396x298&ar=4x3",
        "w328h328": "https://pix6.agoda.net/geo/city/5414/1_5414_02.jpg?ca=6&ce=1&s=328x328&ar=1x1",
        "w345h345": "https://pix6.agoda.net/geo/city/5414/1_5414_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
        "w694h298": "https://pix6.agoda.net/geo/city/5414/1_5414_02.jpg?ca=6&ce=1&s=694x298&ar=21x9",
        "w200h200": "https://pix6.agoda.net/geo/city/5414/1_5414_02.jpg?ca=6&ce=1&s=200x200",
        "w390h168": "https://pix6.agoda.net/geo/city/5414/1_5414_02.jpg?ca=6&ce=1&s=390x168&ar=21x9",
        "w762h328": "https://pix6.agoda.net/geo/city/5414/1_5414_02.jpg?ca=6&ce=1&s=762x328&ar=21x9",
        "w100h100": "https://pix6.agoda.net/geo/city/5414/1_5414_02.jpg?ca=6&ce=1&s=100x100"
      },
      "countryName": "Indonesia",
      "countryNameEnglish": "Indonesia",
      "noOfHotels": 3374,
      "formattedNoOfHotels": "3,374",
      "searchUrl": "",
      "propertyText": "hotel"
    },
    {
      "activityCityUrl": "/activities/city/indonesia/medan",
      "cityId": 21284,
      "countryId": 192,
      "cityName": "Medan",
      "cityNameEnglish": "Medan",
      "cityUrl": "/id-id/city/medan-id.html",
      "imageUrls": {
        "w396h298": "https://pix6.agoda.net/geo/city/21284/1_21284_02.jpg?ca=6&ce=1&s=396x298&ar=4x3",
        "w328h328": "https://pix6.agoda.net/geo/city/21284/1_21284_02.jpg?ca=6&ce=1&s=328x328&ar=1x1",
        "w345h345": "https://pix6.agoda.net/geo/city/21284/1_21284_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
        "w694h298": "https://pix6.agoda.net/geo/city/21284/1_21284_02.jpg?ca=6&ce=1&s=694x298&ar=21x9",
        "w200h200": "https://pix6.agoda.net/geo/city/21284/1_21284_02.jpg?ca=6&ce=1&s=200x200",
        "w390h168": "https://pix6.agoda.net/geo/city/21284/1_21284_02.jpg?ca=6&ce=1&s=390x168&ar=21x9",
        "w762h328": "https://pix6.agoda.net/geo/city/21284/1_21284_02.jpg?ca=6&ce=1&s=762x328&ar=21x9",
        "w100h100": "https://pix6.agoda.net/geo/city/21284/1_21284_02.jpg?ca=6&ce=1&s=100x100"
      },
      "countryName": "Indonesia",
      "countryNameEnglish": "Indonesia",
      "noOfHotels": 1147,
      "formattedNoOfHotels": "1,147",
      "searchUrl": "",
      "propertyText": "hotel"
    },
    {
      "activityCityUrl": "/activities/city/indonesia/semarang",
      "cityId": 19359,
      "countryId": 192,
      "cityName": "Semarang",
      "cityNameEnglish": "Semarang",
      "cityUrl": "/id-id/city/semarang-id.html",
      "imageUrls": {
        "w396h298": "https://pix6.agoda.net/geo/city/19359/1_19359_02.jpg?ca=6&ce=1&s=396x298&ar=4x3",
        "w328h328": "https://pix6.agoda.net/geo/city/19359/1_19359_02.jpg?ca=6&ce=1&s=328x328&ar=1x1",
        "w345h345": "https://pix6.agoda.net/geo/city/19359/1_19359_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
        "w694h298": "https://pix6.agoda.net/geo/city/19359/1_19359_02.jpg?ca=6&ce=1&s=694x298&ar=21x9",
        "w200h200": "https://pix6.agoda.net/geo/city/19359/1_19359_02.jpg?ca=6&ce=1&s=200x200",
        "w390h168": "https://pix6.agoda.net/geo/city/19359/1_19359_02.jpg?ca=6&ce=1&s=390x168&ar=21x9",
        "w762h328": "https://pix6.agoda.net/geo/city/19359/1_19359_02.jpg?ca=6&ce=1&s=762x328&ar=21x9",
        "w100h100": "https://pix6.agoda.net/geo/city/19359/1_19359_02.jpg?ca=6&ce=1&s=100x100"
      },
      "countryName": "Indonesia",
      "countryNameEnglish": "Indonesia",
      "noOfHotels": 1178,
      "formattedNoOfHotels": "1,178",
      "searchUrl": "",
      "propertyText": "hotel"
    },
    {
      "activityCityUrl": "/activities/city/indonesia/bogor",
      "cityId": 21740,
      "countryId": 192,
      "cityName": "Bogor",
      "cityNameEnglish": "Bogor",
      "cityUrl": "/id-id/city/bogor-id.html",
      "imageUrls": {
        "w396h298": "https://pix6.agoda.net/geo/city/21740/1_21740_02.jpg?ca=6&ce=1&s=396x298&ar=4x3",
        "w328h328": "https://pix6.agoda.net/geo/city/21740/1_21740_02.jpg?ca=6&ce=1&s=328x328&ar=1x1",
        "w345h345": "https://pix6.agoda.net/geo/city/21740/1_21740_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
        "w694h298": "https://pix6.agoda.net/geo/city/21740/1_21740_02.jpg?ca=6&ce=1&s=694x298&ar=21x9",
        "w200h200": "https://pix6.agoda.net/geo/city/21740/1_21740_02.jpg?ca=6&ce=1&s=200x200",
        "w390h168": "https://pix6.agoda.net/geo/city/21740/1_21740_02.jpg?ca=6&ce=1&s=390x168&ar=21x9",
        "w762h328": "https://pix6.agoda.net/geo/city/21740/1_21740_02.jpg?ca=6&ce=1&s=762x328&ar=21x9",
        "w100h100": "https://pix6.agoda.net/geo/city/21740/1_21740_02.jpg?ca=6&ce=1&s=100x100"
      },
      "countryName": "Indonesia",
      "countryNameEnglish": "Indonesia",
      "noOfHotels": 1324,
      "formattedNoOfHotels": "1,324",
      "searchUrl": "",
      "propertyText": "hotel"
    },
    {
      "activityCityUrl": "/activities/city/indonesia/surakarta",
      "cityId": 2961,
      "countryId": 192,
      "cityName": "Surakarta",
      "cityNameEnglish": "Surakarta",
      "cityUrl": "/id-id/city/surakarta-id.html",
      "imageUrls": {
        "w396h298": "https://pix6.agoda.net/geo/city/2961/1_2961_02.jpg?ca=6&ce=1&s=396x298&ar=4x3",
        "w328h328": "https://pix6.agoda.net/geo/city/2961/1_2961_02.jpg?ca=6&ce=1&s=328x328&ar=1x1",
        "w345h345": "https://pix6.agoda.net/geo/city/2961/1_2961_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
        "w694h298": "https://pix6.agoda.net/geo/city/2961/1_2961_02.jpg?ca=6&ce=1&s=694x298&ar=21x9",
        "w200h200": "https://pix6.agoda.net/geo/city/2961/1_2961_02.jpg?ca=6&ce=1&s=200x200",
        "w390h168": "https://pix6.agoda.net/geo/city/2961/1_2961_02.jpg?ca=6&ce=1&s=390x168&ar=21x9",
        "w762h328": "https://pix6.agoda.net/geo/city/2961/1_2961_02.jpg?ca=6&ce=1&s=762x328&ar=21x9",
        "w100h100": "https://pix6.agoda.net/geo/city/2961/1_2961_02.jpg?ca=6&ce=1&s=100x100"
      },
      "countryName": "Indonesia",
      "countryNameEnglish": "Indonesia",
      "noOfHotels": 534,
      "formattedNoOfHotels": "534",
      "searchUrl": "",
      "propertyText": "hotel"
    },
    {
      "activityCityUrl": "/activities/city/indonesia/puncak",
      "cityId": 512948,
      "countryId": 192,
      "cityName": "Puncak",
      "cityNameEnglish": "Puncak",
      "cityUrl": "/id-id/city/puncak-id.html",
      "imageUrls": {
        "w396h298": "https://pix6.agoda.net/geo/city/512948/1_512948_02.jpg?ca=6&ce=1&s=396x298&ar=4x3",
        "w328h328": "https://pix6.agoda.net/geo/city/512948/1_512948_02.jpg?ca=6&ce=1&s=328x328&ar=1x1",
        "w345h345": "https://pix6.agoda.net/geo/city/512948/1_512948_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
        "w694h298": "https://pix6.agoda.net/geo/city/512948/1_512948_02.jpg?ca=6&ce=1&s=694x298&ar=21x9",
        "w200h200": "https://pix6.agoda.net/geo/city/512948/1_512948_02.jpg?ca=6&ce=1&s=200x200",
        "w390h168": "https://pix6.agoda.net/geo/city/512948/1_512948_02.jpg?ca=6&ce=1&s=390x168&ar=21x9",
        "w762h328": "https://pix6.agoda.net/geo/city/512948/1_512948_02.jpg?ca=6&ce=1&s=762x328&ar=21x9",
        "w100h100": "https://pix6.agoda.net/geo/city/512948/1_512948_02.jpg?ca=6&ce=1&s=100x100"
      },
      "countryName": "Indonesia",
      "countryNameEnglish": "Indonesia",
      "noOfHotels": 2126,
      "formattedNoOfHotels": "2,126",
      "searchUrl": "",
      "propertyText": "hotel"
    }
  ],
  "domesticCountry": {
    "languageId": 26,
    "countryId": 192,
    "countryName": "Indonesia",
    "countryNameIn": "di Indonesia",
    "topDomesticCityFallback": "Top destinations in Indonesia",
    "topInternationalCityFallback": "Popular destinations outside Indonesia"
  }
}

domesticDestinations.topDomesticDestinations.map(data => {
  $('#data-domestic-destinations .carousel-slider').find('.swiper-wrapper').append(`
        <div class="swiper-slide" data-background="${data.imageUrls.w762h328}" style="background-image: url(${data.imageUrls.w762h328})">
            <div class="inner">
                <h2>${data.cityName}</h2>
                <a href="${'https://www.agoda.com' + data.cityUrl}">${data.formattedNoOfHotels} ${data.propertyText}</a>
            </div>
        </div>
        `)
})
$('#data-domestic-destinations').find('.slide-progress span').next().next().text(pad(domesticDestinations.topDomesticDestinations.length, 2))

// SLIDER
new Swiper('.carousel-slider', {
  spaceBetween: 0,
  slidesPerView: 3,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  loop: true,
  breakpoints: {
    1024: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 1
    },
    320: {
      slidesPerView: 1
    }
  }
})

const searchCity = {
  "data": {
    "citySearch": {
      "highlyRatedAgodaHomes": [
        {
          "propertyId": 47889810,
          "propertyResultType": "HighlyRatedAgodaHomesProperty",
          "pricing": {
            "isAvailable": true,
            "isReady": true,
            "offers": [
              {
                "roomOffers": [
                  {
                    "room": {
                      "pricing": [
                        {
                          "currency": "IDR",
                          "price": {
                            "perNight": {
                              "exclusive": {
                                "crossedOutPrice": 750000.0,
                                "display": 465862.0
                              },
                              "inclusive": {
                                "crossedOutPrice": 750000.0,
                                "display": 563692.0
                              }
                            },
                            "perRoomPerNight": {
                              "exclusive": {
                                "crossedOutPrice": 750000.0,
                                "display": 465862.0
                              },
                              "inclusive": {
                                "crossedOutPrice": 750000.0,
                                "display": 563692.0
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          },
          "content": {
            "reviews": {
              "contentReview": [
                {
                  "isDefault": true,
                  "providerId": 332,
                  "cumulative": {
                    "reviewCount": 138,
                    "score": 9.3
                  }
                }
              ],
              "cumulative": {
                "reviewCount": 138,
                "score": 9.3
              }
            },
            "images": {
              "hotelImages": [
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/47889810/0/1fa96b57e06b05f35edc5ec0bbb47570.jpg?ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/47889810/0/e078ab8f4078aa8a0165e42340d137dc.jpg?ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/47889810/0/f9ab6706fcc4bbef0c38d8da8f03e219.jpg?ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/47889810/0/6c42bc5b5927be8f71e88208da43d928.jpg?ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/47889810/897111442/e30e642fabafec1e1bbec85474cc5507.jpg?ce=0"
                    }
                  ]
                }
              ]
            },
            "informationSummary": {
              "propertyType": "NonHotel",
              "hasHostExperience": true,
              "displayName": "Bungalo 600 m² dengan 1 kamar tidur dan 1 kamar mandi pribadi di Sudirman (W Home Reserva Setiabudi)",
              "rating": 4.5,
              "propertyLinks": {
                "propertyPage": "/w-home-reserva-setiabudi/hotel/jakarta-id.html"
              },
              "address": {
                "country": {
                  "id": 192
                },
                "area": {
                  "name": "Kuningan"
                },
                "city": {
                  "name": "Jakarta"
                }
              }
            }
          }
        },
        {
          "propertyId": 19889600,
          "propertyResultType": "HighlyRatedAgodaHomesProperty",
          "pricing": {
            "isAvailable": true,
            "isReady": true,
            "offers": [
              {
                "roomOffers": [
                  {
                    "room": {
                      "pricing": [
                        {
                          "currency": "IDR",
                          "price": {
                            "perNight": {
                              "exclusive": {
                                "crossedOutPrice": 361152.0,
                                "display": 154331.0
                              },
                              "inclusive": {
                                "crossedOutPrice": 433382.0,
                                "display": 186740.0
                              }
                            },
                            "perRoomPerNight": {
                              "exclusive": {
                                "crossedOutPrice": 361152.0,
                                "display": 154331.0
                              },
                              "inclusive": {
                                "crossedOutPrice": 433382.0,
                                "display": 186740.0
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          },
          "content": {
            "reviews": {
              "contentReview": [
                {
                  "isDefault": true,
                  "providerId": 332,
                  "cumulative": {
                    "reviewCount": 1156,
                    "score": 9.2
                  }
                },
                {
                  "isDefault": false,
                  "providerId": 3038,
                  "cumulative": {
                    "reviewCount": 103,
                    "score": 8.7
                  }
                },
                {
                  "isDefault": false,
                  "providerId": 29100,
                  "cumulative": {
                    "reviewCount": 111,
                    "score": 9.4
                  }
                }
              ],
              "cumulative": {
                "reviewCount": 1370,
                "score": 9.1
              }
            },
            "images": {
              "hotelImages": [
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/19889600/-1/ab928ccd174ea4ae169997ddb634da1d.jpg?ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/19889600/-1/07228ea468e7cc50b0d5bf51212540b9.jpg?ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/19889600/-1/7d3ddb1900db2e85e80fd837b728c64f.jpg?ca=28&ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/19889600/-1/9428e66757842057131779df6cb8822f.jpg?ca=28&ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/19889600/-1/e81b9cb996f130a93812a8af83d8d3cf.jpg?ca=28&ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/19889600/-1/f96d07cc46378e7f45e82435b1676999.jpg?ca=16&ce=1"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//q-xx.bstatic.com/xdata/images/hotel/max500/348803319.jpg?k=93f79388b8f74609481a94578c36641b76bcc758d459110bdf6ccad2e3d7d2ea&o="
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/19889600/-1/86182c1b80abae72cfd2c7eec2477f2f.jpg?ca=28&ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/19889600/-1/a2dcd221ec4201b2e73530e163d1582c.jpg?ca=28&ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/19889600/284775451/ed40e0cc16da8265349bc238779cffe6.jpg?ce=0"
                    }
                  ]
                }
              ]
            },
            "informationSummary": {
              "propertyType": "NonHotel",
              "hasHostExperience": true,
              "displayName": "Bobopod Juanda, Jakarta",
              "rating": 3.0,
              "propertyLinks": {
                "propertyPage": "/bobobox-pods-juanda-jakarta/hotel/jakarta-id.html"
              },
              "address": {
                "country": {
                  "id": 192
                },
                "area": {
                  "name": "Pasar Baru"
                },
                "city": {
                  "name": "Jakarta"
                }
              }
            }
          }
        },
        {
          "propertyId": 19889598,
          "propertyResultType": "HighlyRatedAgodaHomesProperty",
          "pricing": {
            "isAvailable": true,
            "isReady": true,
            "offers": [
              {
                "roomOffers": [
                  {
                    "room": {
                      "pricing": [
                        {
                          "currency": "IDR",
                          "price": {
                            "perNight": {
                              "exclusive": {
                                "crossedOutPrice": 145197.0,
                                "display": 129144.0
                              },
                              "inclusive": {
                                "crossedOutPrice": 175688.0,
                                "display": 156264.0
                              }
                            },
                            "perRoomPerNight": {
                              "exclusive": {
                                "crossedOutPrice": 145197.0,
                                "display": 129144.0
                              },
                              "inclusive": {
                                "crossedOutPrice": 175688.0,
                                "display": 156264.0
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          },
          "content": {
            "reviews": {
              "contentReview": [
                {
                  "isDefault": true,
                  "providerId": 332,
                  "cumulative": {
                    "reviewCount": 639,
                    "score": 9.2
                  }
                },
                {
                  "isDefault": false,
                  "providerId": 3038,
                  "cumulative": {
                    "reviewCount": 40,
                    "score": 8.8
                  }
                },
                {
                  "isDefault": false,
                  "providerId": 29100,
                  "cumulative": {
                    "reviewCount": 62,
                    "score": 9.2
                  }
                }
              ],
              "cumulative": {
                "reviewCount": 741,
                "score": 9.1
              }
            },
            "images": {
              "hotelImages": [
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/19889598/-1/a6d434019cd37367fef9eeb6b45ea250.jpg?ca=16&ce=1"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/19889598/-1/07228ea468e7cc50b0d5bf51212540b9.jpg?ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/19889598/-1/3b5dc53814e9331b0f63b351c7ca0211.jpg?ca=16&ce=1"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//q-xx.bstatic.com/xdata/images/hotel/max500/348801840.jpg?k=52048682a6a18de0aecf68d0af3af7f64106a3b14b80b051372f2595106edccb&o="
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/19889598/-1/436f87069d055b060472f168cb0f0cca.jpg?ca=16&ce=1"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/19889598/-1/776dc0f7ca31438250000bd85d919d33.jpg?ca=28&ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/19889598/-1/b83198fb7361b0ab5c0cc05458ba0eb6.jpg?ca=16&ce=1"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/19889598/-1/f440465dee2e976e81c4be10240acf30.jpg?ca=28&ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/19889598/-1/5a289d430952b2f33c9f2d844f9c5661.jpg?ca=16&ce=1"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/19889598/-1/ed40e0cc16da8265349bc238779cffe6.jpg?ce=0"
                    }
                  ]
                }
              ]
            },
            "informationSummary": {
              "propertyType": "NonHotel",
              "hasHostExperience": true,
              "displayName": "Bobopod Tanah Abang, Jakarta",
              "rating": 3.0,
              "propertyLinks": {
                "propertyPage": "/bobobox-pods-tanah-abang/hotel/jakarta-id.html"
              },
              "address": {
                "country": {
                  "id": 192
                },
                "area": {
                  "name": "Monas"
                },
                "city": {
                  "name": "Jakarta"
                }
              }
            }
          }
        },
        {
          "propertyId": 31429647,
          "propertyResultType": "HighlyRatedAgodaHomesProperty",
          "pricing": {
            "isAvailable": true,
            "isReady": true,
            "offers": [
              {
                "roomOffers": [
                  {
                    "room": {
                      "pricing": [
                        {
                          "currency": "IDR",
                          "price": {
                            "perNight": {
                              "exclusive": {
                                "crossedOutPrice": 990368.0,
                                "display": 349587.0
                              },
                              "inclusive": {
                                "crossedOutPrice": 1188441.0,
                                "display": 423000.0
                              }
                            },
                            "perRoomPerNight": {
                              "exclusive": {
                                "crossedOutPrice": 990368.0,
                                "display": 349587.0
                              },
                              "inclusive": {
                                "crossedOutPrice": 1188441.0,
                                "display": 423000.0
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          },
          "content": {
            "reviews": {
              "contentReview": [
                {
                  "isDefault": true,
                  "providerId": 332,
                  "cumulative": {
                    "reviewCount": 1268,
                    "score": 9.0
                  }
                },
                {
                  "isDefault": false,
                  "providerId": 29100,
                  "cumulative": {
                    "reviewCount": 2,
                    "score": 9.2
                  }
                }
              ],
              "cumulative": {
                "reviewCount": 1270,
                "score": 9.0
              }
            },
            "images": {
              "hotelImages": [
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/31429647/-1/2908841d23b9e0a3c1260b026e032a66.jpg?ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/31429647/513388047/d9d05ef60567791d4e4384a6722edab5.jpg?ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/31429647/-1/61b5ea112af7b04af8e87eb9ccec2026.jpg?ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/31429647/-1/7db4a5f42102d6130df7d16035aac43d.jpg?ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/property/31429647/0/ed3b963d8370a6ba7a6915715a152e56.jpeg"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/31429647/-1/5b537d45dd2338cd17dc655b5656fb05.jpg?ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/31429647/-1/c683ffeb4e6b66528c3d817a97635bbc.jpg?ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/31429647/-1/9afbc203628e1821b222784949477dbd.jpg?ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/31429647/-1/353b4080573b06cbdf56a42df087af24.jpg?ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/31429647/513388047/5a197c4087c5dab9ca955c7a37b2486d.jpg?ce=0"
                    }
                  ]
                }
              ]
            },
            "informationSummary": {
              "propertyType": "NonHotel",
              "hasHostExperience": true,
              "displayName": "Andara Home Setiabudi",
              "rating": 3.0,
              "propertyLinks": {
                "propertyPage": "/andara-home-setiabudi/hotel/jakarta-id.html"
              },
              "address": {
                "country": {
                  "id": 192
                },
                "area": {
                  "name": "Kuningan"
                },
                "city": {
                  "name": "Jakarta"
                }
              }
            }
          }
        },
        {
          "propertyId": 31439208,
          "propertyResultType": "HighlyRatedAgodaHomesProperty",
          "pricing": {
            "isAvailable": true,
            "isReady": true,
            "offers": [
              {
                "roomOffers": [
                  {
                    "room": {
                      "pricing": [
                        {
                          "currency": "IDR",
                          "price": {
                            "perNight": {
                              "exclusive": {
                                "crossedOutPrice": 630835.0,
                                "display": 267236.0
                              },
                              "inclusive": {
                                "crossedOutPrice": 757002.0,
                                "display": 295054.0
                              }
                            },
                            "perRoomPerNight": {
                              "exclusive": {
                                "crossedOutPrice": 630835.0,
                                "display": 267236.0
                              },
                              "inclusive": {
                                "crossedOutPrice": 757002.0,
                                "display": 295054.0
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          },
          "content": {
            "reviews": {
              "contentReview": [
                {
                  "isDefault": true,
                  "providerId": 332,
                  "cumulative": {
                    "reviewCount": 3219,
                    "score": 8.8
                  }
                },
                {
                  "isDefault": false,
                  "providerId": 3038,
                  "cumulative": {
                    "reviewCount": 49,
                    "score": 7.8
                  }
                },
                {
                  "isDefault": false,
                  "providerId": 29100,
                  "cumulative": {
                    "reviewCount": 44,
                    "score": 8.8
                  }
                }
              ],
              "cumulative": {
                "reviewCount": 3312,
                "score": 8.7
              }
            },
            "images": {
              "hotelImages": [
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/31439208/0/f20a472ef0fb218a5e95bb199c46d2a8.jpg?ca=29&ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/31439208/0/e0993d044fb3c16f19cdaf6aac469ae0.jpg?ca=28&ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/31439208/0/05383ff7f6e172e058a807a8ce271324.jpg?ca=28&ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/31439208/0/6f5518769a747fdb440e0f14ab3241d7.jpg?ca=29&ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/31439208/0/a517c844895979f7918c3a56f6756d18.jpg?ca=28&ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/31439208/0/037f376358ecacfc3502fdee2a86027d.jpg?ca=29&ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//q-xx.bstatic.com/xdata/images/hotel/max500/350788375.jpg?k=40f33ba6a9f9651df0acde5bb7798b1f912c104316fc11a98a47970c5e9fad71&o="
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/31439208/0/e2c0e1e8743171770bc4e53ca9aa7654.jpg?ca=29&ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/31439208/0/a83cf252cb94e39a91f2740e97addf3a.jpg?ca=29&ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/31439208/0/83a9155f73504c6e1f5be97e2ea1fdba.jpg?ca=28&ce=0"
                    }
                  ]
                }
              ]
            },
            "informationSummary": {
              "propertyType": "SingleRoom",
              "hasHostExperience": true,
              "displayName": "Apartemen 50 m² dengan 1 kamar tidur dan 1 kamar mandi pribadi di Menteng (Dparagon Menteng Jakarta)",
              "rating": 3.5,
              "propertyLinks": {
                "propertyPage": "/dparagon-menteng-jakarta/hotel/jakarta-id.html"
              },
              "address": {
                "country": {
                  "id": 192
                },
                "area": {
                  "name": "Menteng"
                },
                "city": {
                  "name": "Jakarta"
                }
              }
            }
          }
        },
        {
          "propertyId": 29271137,
          "propertyResultType": "HighlyRatedAgodaHomesProperty",
          "pricing": {
            "isAvailable": true,
            "isReady": true,
            "offers": [
              {
                "roomOffers": [
                  {
                    "room": {
                      "pricing": [
                        {
                          "currency": "IDR",
                          "price": {
                            "perNight": {
                              "exclusive": {
                                "crossedOutPrice": 313565.0,
                                "display": 269468.0
                              },
                              "inclusive": {
                                "crossedOutPrice": 379413.0,
                                "display": 326056.0
                              }
                            },
                            "perRoomPerNight": {
                              "exclusive": {
                                "crossedOutPrice": 313565.0,
                                "display": 269468.0
                              },
                              "inclusive": {
                                "crossedOutPrice": 379413.0,
                                "display": 326056.0
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          },
          "content": {
            "reviews": {
              "contentReview": [
                {
                  "isDefault": true,
                  "providerId": 332,
                  "cumulative": {
                    "reviewCount": 576,
                    "score": 8.9
                  }
                },
                {
                  "isDefault": false,
                  "providerId": 3038,
                  "cumulative": {
                    "reviewCount": 22,
                    "score": 8.1
                  }
                },
                {
                  "isDefault": false,
                  "providerId": 29100,
                  "cumulative": {
                    "reviewCount": 46,
                    "score": 8.8
                  }
                }
              ],
              "cumulative": {
                "reviewCount": 644,
                "score": 8.8
              }
            },
            "images": {
              "hotelImages": [
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/29271137/-1/039cc41445de6c98df7528a3b3ef63af.jpg?ca=25&ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//q-xx.bstatic.com/xdata/images/hotel/max500/205274852.jpg?k=8f6e796c3e4864e8f61194fa638aa8ed0779d0059b9401ecac96eb14004dbb70&o="
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//q-xx.bstatic.com/xdata/images/hotel/max500/205264586.jpg?k=5df995b4874d5d2d8b0a7f94615b771e2d06ff1950230c8693d60a4684916c2d&o="
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/29271137/-1/45ca6a21455efc080324ae39397c577c.jpg?ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//q-xx.bstatic.com/xdata/images/hotel/max500/205735577.jpg?k=1d147f5a7d4f5a59ef5459c9c7bf703ff8a6e4a762862e183d249c7dabded60d&o="
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//q-xx.bstatic.com/xdata/images/hotel/max500/205264556.jpg?k=54f61f5c588ab27a83743db6e43bdbc230e0c10448a32b8ba3b042d29c030c43&o="
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//q-xx.bstatic.com/xdata/images/hotel/max500/205264559.jpg?k=693dc54a9f91a564b3091bcd7e12666bcf19a864720146efec0d5e52b29a0ddb&o="
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//q-xx.bstatic.com/xdata/images/hotel/max500/205264574.jpg?k=8d8de1e1474653ec8abeefac580234f5d3ad162a9944e0e8351b2b1654d31ead&o="
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//q-xx.bstatic.com/xdata/images/hotel/max500/205274860.jpg?k=56cea468bb98824301c3547390c8b8dbd9f98336cf5986370b9c30077f1a55b1&o="
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/property/34467038/0/825378e46513d15750aa4975211f0078.jpg?ce=0"
                    }
                  ]
                }
              ]
            },
            "informationSummary": {
              "propertyType": "NonHotel",
              "hasHostExperience": true,
              "displayName": "All Nite & Day Residence Kebon Jeruk Jakarta",
              "rating": 4.0,
              "propertyLinks": {
                "propertyPage": "/all-nite-day-kebon-jeruk-h16073350/hotel/jakarta-id.html"
              },
              "address": {
                "country": {
                  "id": 192
                },
                "area": {
                  "name": "Kebon Jeruk"
                },
                "city": {
                  "name": "Jakarta"
                }
              }
            }
          }
        },
        {
          "propertyId": 9823912,
          "propertyResultType": "HighlyRatedAgodaHomesProperty",
          "pricing": {
            "isAvailable": true,
            "isReady": true,
            "offers": [
              {
                "roomOffers": [
                  {
                    "room": {
                      "pricing": [
                        {
                          "currency": "IDR",
                          "price": {
                            "perNight": {
                              "exclusive": {
                                "crossedOutPrice": 1000000.0,
                                "display": 648032.0
                              },
                              "inclusive": {
                                "crossedOutPrice": 1000000.0,
                                "display": 784119.0
                              }
                            },
                            "perRoomPerNight": {
                              "exclusive": {
                                "crossedOutPrice": 1000000.0,
                                "display": 648032.0
                              },
                              "inclusive": {
                                "crossedOutPrice": 1000000.0,
                                "display": 784119.0
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          },
          "content": {
            "reviews": {
              "contentReview": [
                {
                  "isDefault": true,
                  "providerId": 332,
                  "cumulative": {
                    "reviewCount": 1834,
                    "score": 8.6
                  }
                },
                {
                  "isDefault": false,
                  "providerId": 3038,
                  "cumulative": {
                    "reviewCount": 249,
                    "score": 7.9
                  }
                },
                {
                  "isDefault": false,
                  "providerId": 29100,
                  "cumulative": {
                    "reviewCount": 8,
                    "score": 7.8
                  }
                }
              ],
              "cumulative": {
                "reviewCount": 2091,
                "score": 8.5
              }
            },
            "images": {
              "hotelImages": [
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/9823912/-1/11eb8101ac8321d7cd130c90bf024d04.jpg?ca=16&ce=1"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/9823912/-1/6908e82eb4c077c8579912018d758da2.jpg?ca=20&ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/property/33345706/0/65cf5dc94dfda52b867defedddbc56ea.jpg?ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//q-xx.bstatic.com/xdata/images/hotel/max500/382305415.jpg?k=1b2f2031243a1d266af438448a62999d5b1f8d8579b386f2c1f15751a6560a8d&o="
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/9823912/-1/21e8788732de9a43bbb340f59db47819.jpg?ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/9823912/-1/07e17a300ab8203c5b28fae5c0addaba.jpg?ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//q-xx.bstatic.com/xdata/images/hotel/max500/282426788.jpg?k=9b05878bd5484d40d3759b5558b0bec89b08da6bdccb8d817d67b76375ca0c80&o="
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//q-xx.bstatic.com/xdata/images/hotel/max500/382305417.jpg?k=aa568f3e79999af86b6ebe1cc19be1fc49745bde052e2e7686c5222a54fa52f0&o="
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/property/33345706/0/4fc49f41ed0a7711e979685174a37bb3.jpg?ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/property/33345706/0/1e4f4f4784b0a3bf37f95aeda22cb8a1.jpg?ce=0"
                    }
                  ]
                }
              ]
            },
            "informationSummary": {
              "propertyType": "NonHotel",
              "hasHostExperience": true,
              "displayName": "Menteng Park Exclusive Emerald",
              "rating": 5.0,
              "propertyLinks": {
                "propertyPage": "/menteng-park-exclusive-emerald/hotel/jakarta-id.html"
              },
              "address": {
                "country": {
                  "id": 192
                },
                "area": {
                  "name": "Menteng"
                },
                "city": {
                  "name": "Jakarta"
                }
              }
            }
          }
        },
        {
          "propertyId": 648691,
          "propertyResultType": "HighlyRatedAgodaHomesProperty",
          "pricing": {
            "isAvailable": true,
            "isReady": true,
            "offers": [
              {
                "roomOffers": [
                  {
                    "room": {
                      "pricing": [
                        {
                          "currency": "IDR",
                          "price": {
                            "perNight": {
                              "exclusive": {
                                "crossedOutPrice": 676390.0,
                                "display": 293184.0
                              },
                              "inclusive": {
                                "crossedOutPrice": 676390.0,
                                "display": 354753.0
                              }
                            },
                            "perRoomPerNight": {
                              "exclusive": {
                                "crossedOutPrice": 676390.0,
                                "display": 293184.0
                              },
                              "inclusive": {
                                "crossedOutPrice": 676390.0,
                                "display": 354753.0
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          },
          "content": {
            "reviews": {
              "contentReview": [
                {
                  "isDefault": true,
                  "providerId": 332,
                  "cumulative": {
                    "reviewCount": 3774,
                    "score": 8.5
                  }
                },
                {
                  "isDefault": false,
                  "providerId": 3038,
                  "cumulative": {
                    "reviewCount": 8,
                    "score": 6.5
                  }
                },
                {
                  "isDefault": false,
                  "providerId": 29100,
                  "cumulative": {
                    "reviewCount": 69,
                    "score": 7.8
                  }
                }
              ],
              "cumulative": {
                "reviewCount": 3851,
                "score": 8.4
              }
            },
            "images": {
              "hotelImages": [
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/648691/-1/6745a772692621a3178550796cf440fe.jpg?ca=25&ce=0"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/648/648691/648691_14061310280019826516.jpg?ca=2&ce=1"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//q-xx.bstatic.com/xdata/images/hotel/max500/186198173.jpg?k=9399e570acc654f93f9f53a243e4849d7d34a02b9bed078ef1ba6edf37e515d8&o="
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//q-xx.bstatic.com/xdata/images/hotel/max500/186198267.jpg?k=97a2a4330bdb7270085735aa73630af142f3b94868515b34c05378d699f5767b&o="
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//q-xx.bstatic.com/xdata/images/hotel/max500/186198575.jpg?k=8a0d7ad8466487eb10cdfd827cfccc4aba0d47bcccf8e44a973b4ef46bfd0d56&o="
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//q-xx.bstatic.com/xdata/images/hotel/max500/33033285.jpg?k=28f8640e3942f49a6b587bd7010c8c43532f5c1f476a8bf911b4f39f91bfa3f6&o="
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//q-xx.bstatic.com/xdata/images/hotel/max500/33033286.jpg?k=acaba3bf954cff5efa0af9c945a83e1e4f64c04ec1d13db90a5d1eb4a33dc686&o="
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//q-xx.bstatic.com/xdata/images/hotel/max500/186196228.jpg?k=618091031627bbf67a0ed6009224d040f0d2de3c3cffb9f8c5240b6a234100dc&o="
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//pix8.agoda.net/hotelImages/648/648691/648691_17052209090053132599.jpg?ca=6&ce=1"
                    }
                  ]
                },
                {
                  "urls": [
                    {
                      "value": "//q-xx.bstatic.com/xdata/images/hotel/max500/3539929.jpg?k=bb8d866401b6a04a8a08c39a4b6d0546bd4d34913f433053d1142ba91a5fe195&o="
                    }
                  ]
                }
              ]
            },
            "informationSummary": {
              "propertyType": "NonHotel",
              "hasHostExperience": true,
              "displayName": "The Gloria Suites Grogol, Jakarta",
              "rating": 5.0,
              "propertyLinks": {
                "propertyPage": "/the-gloria-suites-grogol-jakarta/hotel/jakarta-id.html"
              },
              "address": {
                "country": {
                  "id": 192
                },
                "area": {
                  "name": "Grogol"
                },
                "city": {
                  "name": "Jakarta"
                }
              }
            }
          }
        }
      ]
    }
  }
}