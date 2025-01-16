// myIntervalFunction = (running) => {
//   if (running) {
//     // Set interval to switch tabs every 5 seconds
//     const intervalID = setInterval(function () {
//       const currentTab = $('.nav-link.active')
//       let nextTab = currentTab.parent().next().find('button')

//       // If next tab doesn't exist, go back to the first one
//       if (!nextTab.length) {
//         nextTab = $('#pills-tab .nav-item:first .nav-link')
//       }

//       nextTab.trigger('click')
//     }, 5000)
//   }else{

//   }
// }

// myIntervalFunction(true)

// $('#hero .select2').on('select2:open', function (e) {
//   // alert('focus')
//   myIntervalFunction(false)
// })
// $('#hero').find('input').on('focus', function () {
//   // alert('focus')
//   myIntervalFunction(false)
// }).on('focusout', function () {
//   myIntervalFunction(true)
// })

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

$('.select2.hotel').attr('data-placeholder', $('.select2.hotel').attr('placeholder'))
$('.select2.airports#from').attr('data-placeholder', $('.select2.airports#from').attr('placeholder'))
$('.select2.airports#to').attr('data-placeholder', $('.select2.airports#to').attr('placeholder'))
$('.select2').select2({
  theme: "bootstrap-5",
  containerCssClass: "select2--small",
  dropdownCssClass: "select2--small",
  allowClear: true,
  // placeholder: 'Kota, Hotel, atau Landmark',
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

new Swiper('.promo .swiper', {
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

$('.navmenu a').on('click', function (e) {
  e.preventDefault()
  $('html, body').animate({
    scrollTop: $($(this).attr('href'))
  }, 'ease-in')
})

// Scrollspy
$(window).scroll(function () {
  const scrollPosition = $(this).scrollTop()
  $('nav a').each(function () {
    const currentLink = $(this)
    const refElement = $(currentLink.attr('href'))
    if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
      $('nav a').removeClass('active')
      currentLink.addClass('active')
    } else {
      currentLink.removeClass('active')
    }
  })
})

$('input.dates').daterangepicker({
  opens: 'left',
  startDate: moment().add(2, 'days'),
  endDate: moment().add(3, 'days'),
  minDate: moment().format('DD MM YYYY'),
  alwaysShowCalendars: true,
  ranges: {
    'Hari ini': [moment(), moment().add(1, 'days')],
    // 'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Minggu ini': [moment(), moment().add(6, 'days')],
    '30 hari': [moment(), moment().add(29, 'days')],
    // 'This Month': [moment().startOf('month'), moment().endOf('month')],
    // 'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  },
  locale: {
    format: 'DD MMM Y',
    separator: " ➡️ ",
    applyLabel: "Terapkan",
    cancelLabel: "Batal",
    fromLabel: "Dari",
    toLabel: "Sampai",
    customRangeLabel: "Menyesuaikan",
  }
}, function (start, end, label) {
  console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'))
})

$('input.date').daterangepicker({
  singleDatePicker: true,
  opens: 'left',
  startDate: moment().add(2, 'days'),
  minDate: moment().format('DD MM YYYY'),
  locale: {
    format: 'DD MMM Y',
    applyLabel: "Terapkan",
    cancelLabel: "Batal",
    fromLabel: "Dari",
    toLabel: "Sampai",
    customRangeLabel: "Menyesuaikan",
  }
}, function (start, end, label) {
  console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'))
})

$('.input-number').find('.plus').on('click', function () {
  const id = $(this).parent().attr('id')
  const input = $(`input[data-number="${id}"]`).val()
  $(this).next().attr('role', 'button')
  $(`input[data-number="${id}"]`).val(!input ? 1 : parseInt(input) + 1)
})
$('.input-number').find('.minus').on('click', function () {
  const id = $(this).parent().attr('id')
  const input = $(`input[data-number="${id}"]`).val()
  const value = parseInt(input)
  $(`input[data-number="${id}"]`).val(value == 1 ? 1 : value - 1)
})


new Swiper('.hotels .swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // dynamicBullets: true,
    // type: "progressbar",
  },

  slidesPerView: 3,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

const GTLOhotels = {
  "results": [
    {
      "hotelId": 16541155,
      "hotelName": "Aston Gorontalo Hotel & Villas",
      "starRating": 4.0,
      "reviewScore": 9.0,
      "reviewCount": 118,
      "currency": "USD",
      "dailyRate": 42.68,
      "crossedOutRate": 0,
      "discountPercentage": 0.0,
      "imageURL": "http://q-xx.bstatic.com/xdata/images/hotel/840x460/269243475.jpg?k=cd838a289e3871341fce28d01791f3b710940c6c4c8f4ec00a72e1f5a40d807a&o=",
      "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1935603&hid=16541155&currency=USD&checkin=2025-01-20&checkout=2025-01-21&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
      "includeBreakfast": true,
      "freeWifi": false,
      "latitude": 0.5440700054168701,
      "longitude": 123.0506820678711
    },
    {
      "hotelId": 42110121,
      "hotelName": "Yulia Hotel Managed by HIG",
      "starRating": 3.0,
      "reviewScore": 9.2,
      "reviewCount": 189,
      "currency": "USD",
      "dailyRate": 28.23,
      "crossedOutRate": 36.81,
      "discountPercentage": 20.0,
      "imageURL": "http://pix8.agoda.net/hotelImages/42110121/-1/69cea0c339b7b042b182a4b5696e4b29.jpg?ce=0&s=800x600",
      "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1935603&hid=42110121&currency=USD&checkin=2025-01-20&checkout=2025-01-21&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
      "includeBreakfast": true,
      "freeWifi": true,
      "latitude": 0.5341647863388062,
      "longitude": 123.06031799316406
    },
    {
      "hotelId": 50608949,
      "hotelName": "FOX Hotel Gorontalo",
      "starRating": 4.0,
      "reviewScore": 8.7,
      "reviewCount": 75,
      "currency": "USD",
      "dailyRate": 30.37,
      "crossedOutRate": 0,
      "discountPercentage": 0.0,
      "imageURL": "http://pix8.agoda.net/hotelImages/50608949/0/01168d39a80fd4c40cffeefca487c05d.jpg?ce=0&s=800x600",
      "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1935603&hid=50608949&currency=USD&checkin=2025-01-20&checkout=2025-01-21&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
      "includeBreakfast": true,
      "freeWifi": true,
      "latitude": 0.5378188,
      "longitude": 123.062645
    },
    {
      "hotelId": 8262760,
      "hotelName": "RedDoorz near TVRI Gorontalo",
      "starRating": 2.0,
      "reviewScore": 8.0,
      "reviewCount": 169,
      "currency": "USD",
      "dailyRate": 6.35,
      "crossedOutRate": 30.63,
      "discountPercentage": 0.0,
      "imageURL": "http://pix8.agoda.net/hotelImages/8262760/-1/a5714db5c5074c91c81c11bc6360c182.jpg?ca=13&ce=1&s=800x600",
      "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1935603&hid=8262760&currency=USD&checkin=2025-01-20&checkout=2025-01-21&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
      "includeBreakfast": false,
      "freeWifi": true,
      "latitude": 0.5601135481481468,
      "longitude": 123.04841770683265
    },
    {
      "hotelId": 264270,
      "hotelName": "Grand Q Hotel Gorontalo",
      "starRating": 4.0,
      "reviewScore": 8.3,
      "reviewCount": 194,
      "currency": "USD",
      "dailyRate": 35.18,
      "crossedOutRate": 0,
      "discountPercentage": 0.0,
      "imageURL": "http://pix8.agoda.net/hotelImages/264270/-1/23c8755af000c9f9459864bba4f75567.jpg?ce=0&s=800x600",
      "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1935603&hid=264270&currency=USD&checkin=2025-01-20&checkout=2025-01-21&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
      "includeBreakfast": true,
      "freeWifi": true,
      "latitude": 0.533472936077578,
      "longitude": 123.060092926025
    },
    {
      "hotelId": 640472,
      "hotelName": "Amaris Hotel Gorontalo",
      "starRating": 2.0,
      "reviewScore": 8.2,
      "reviewCount": 238,
      "currency": "USD",
      "dailyRate": 25.87,
      "crossedOutRate": 36.75,
      "discountPercentage": 0.0,
      "imageURL": "http://pix8.agoda.net/hotelImages/640472/-1/9555598912e2b84080f948af68bc6104.png?ca=21&ce=0&s=800x600",
      "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1935603&hid=640472&currency=USD&checkin=2025-01-20&checkout=2025-01-21&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
      "includeBreakfast": true,
      "freeWifi": true,
      "latitude": 0.53662,
      "longitude": 123.06322
    },
    {
      "hotelId": 45461910,
      "hotelName": "Wisma 88",
      "starRating": 0.0,
      "reviewScore": 7.7,
      "reviewCount": 49,
      "currency": "USD",
      "dailyRate": 9.91,
      "crossedOutRate": 0,
      "discountPercentage": 0.0,
      "imageURL": "http://pix8.agoda.net/hotelImages/45461910/-1/6b5b71079c0062aa699a06ff081403fd.jpg?ce=0&s=800x600",
      "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1935603&hid=45461910&currency=USD&checkin=2025-01-20&checkout=2025-01-21&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
      "includeBreakfast": true,
      "freeWifi": false,
      "latitude": 0.552196823746981,
      "longitude": 123.06412
    },
    {
      "hotelId": 9758035,
      "hotelName": "RedDoorz Syariah near Universitas Negeri Gorontalo 2",
      "starRating": 2.0,
      "reviewScore": 7.7,
      "reviewCount": 91,
      "currency": "USD",
      "dailyRate": 9.94,
      "crossedOutRate": 30.63,
      "discountPercentage": 0.0,
      "imageURL": "http://pix8.agoda.net/hotelImages/9758035/-1/e38fd06a460edbc330fd58c8fcc87b02.jpg?ca=9&ce=1&s=800x600",
      "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1935603&hid=9758035&currency=USD&checkin=2025-01-20&checkout=2025-01-21&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
      "includeBreakfast": false,
      "freeWifi": true,
      "latitude": 0.5506597357921679,
      "longitude": 123.06389200204467
    },
    {
      "hotelId": 7695647,
      "hotelName": "Harry & Mimin Homestay",
      "starRating": 0.0,
      "reviewScore": 8.8,
      "reviewCount": 23,
      "currency": "USD",
      "dailyRate": 15.01,
      "crossedOutRate": 0,
      "discountPercentage": 0.0,
      "imageURL": "http://q-xx.bstatic.com/xdata/images/hotel/840x460/373141185.jpg?k=2185124c82eb65fa230d283911323185d28948897a2cfd81fc3a067312aa7807&o=",
      "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1935603&hid=7695647&currency=USD&checkin=2025-01-20&checkout=2025-01-21&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
      "includeBreakfast": true,
      "freeWifi": true,
      "latitude": 0.5312399864196777,
      "longitude": 123.05518341064453
    },
    {
      "hotelId": 489846,
      "hotelName": "Sumber Ria Hotel",
      "starRating": 2.0,
      "reviewScore": 8.7,
      "reviewCount": 105,
      "currency": "USD",
      "dailyRate": 11.12,
      "crossedOutRate": 14.09,
      "discountPercentage": 0.0,
      "imageURL": "http://pix8.agoda.net/hotelImages/489846/-1/e4af2d4609d4878feffdbeaa4ef3750a.jpg?ce=0&s=800x600",
      "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1935603&hid=489846&currency=USD&checkin=2025-01-20&checkout=2025-01-21&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
      "includeBreakfast": true,
      "freeWifi": true,
      "latitude": 0.543627321720123,
      "longitude": 123.059585571289
    },
    {
      "hotelId": 8262696,
      "hotelName": "RedDoorz Plus Syariah @ Pentadio Gorontalo",
      "starRating": 3.0,
      "reviewScore": 7.2,
      "reviewCount": 55,
      "currency": "USD",
      "dailyRate": 7.81,
      "crossedOutRate": 33.63,
      "discountPercentage": 0.0,
      "imageURL": "http://pix8.agoda.net/hotelImages/8262696/-1/36558fbb3c5e87335d3c2b3a72fa5ca2.jpg?ca=9&ce=1&s=800x600",
      "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1935603&hid=8262696&currency=USD&checkin=2025-01-20&checkout=2025-01-21&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
      "includeBreakfast": false,
      "freeWifi": true,
      "latitude": 0.6190157715143733,
      "longitude": 123.01277782100976
    },
    {
      "hotelId": 4897976,
      "hotelName": "The Garden Hotel",
      "starRating": 0.0,
      "reviewScore": 7.8,
      "reviewCount": 161,
      "currency": "USD",
      "dailyRate": 26.35,
      "crossedOutRate": 0,
      "discountPercentage": 0.0,
      "imageURL": "http://pix8.agoda.net/hotelImages/4897976/-1/5e368957cf02d6707dae934b8d9d3c6a.jpg?ce=0&s=800x600",
      "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1935603&hid=4897976&currency=USD&checkin=2025-01-20&checkout=2025-01-21&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
      "includeBreakfast": true,
      "freeWifi": true,
      "latitude": 0.535875,
      "longitude": 123.06401099999994
    },
    {
      "hotelId": 50042676,
      "hotelName": "Maherza Syariah Homestay Gorontalo RedPartner",
      "starRating": 2.0,
      "reviewScore": 7.9,
      "reviewCount": 18,
      "currency": "USD",
      "dailyRate": 11.86,
      "crossedOutRate": 0,
      "discountPercentage": 0.0,
      "imageURL": "http://pix8.agoda.net/hotelImages/50042676/-1/29d136bdd3bf39c2c0e14f1eb2d51ef4.jpg?ce=0&s=800x600",
      "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1935603&hid=50042676&currency=USD&checkin=2025-01-20&checkout=2025-01-21&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
      "includeBreakfast": false,
      "freeWifi": true,
      "latitude": 0.5503027,
      "longitude": 123.06365
    },
    {
      "hotelId": 335375,
      "hotelName": "Eljie Hotel",
      "starRating": 1.0,
      "reviewScore": 7.1,
      "reviewCount": 119,
      "currency": "USD",
      "dailyRate": 17.23,
      "crossedOutRate": 0,
      "discountPercentage": 0.0,
      "imageURL": "http://pix8.agoda.net/hotelImages/335375/-1/9d56f1d81b8c935d9dd0f1599b40d55f.jpg?ca=9&ce=1&s=800x600",
      "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1935603&hid=335375&currency=USD&checkin=2025-01-20&checkout=2025-01-21&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
      "includeBreakfast": true,
      "freeWifi": true,
      "latitude": 0.5538488052448097,
      "longitude": 123.05268466472626
    },
    {
      "hotelId": 47850609,
      "hotelName": "Pondok Wisata Botu Barani",
      "starRating": 0.0,
      "reviewScore": 4.2,
      "reviewCount": 2,
      "currency": "USD",
      "dailyRate": 35.08,
      "crossedOutRate": 0,
      "discountPercentage": 0.0,
      "imageURL": "http://q-xx.bstatic.com/xdata/images/hotel/840x460/510053166.jpg?k=46eed7c4371b8603752c57da7e5f95be4add4798bf95a2a70a29c394950da97e&o=",
      "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1935603&hid=47850609&currency=USD&checkin=2025-01-20&checkout=2025-01-21&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
      "includeBreakfast": true,
      "freeWifi": true,
      "latitude": 0.4746699929237366,
      "longitude": 123.10106658935547
    },
    {
      "hotelId": 19932463,
      "hotelName": "The One Hotel Gorontalo Mitra RedDoorz",
      "starRating": 2.0,
      "reviewScore": 6.6,
      "reviewCount": 14,
      "currency": "USD",
      "dailyRate": 15.34,
      "crossedOutRate": 25.34,
      "discountPercentage": 0.0,
      "imageURL": "http://pix8.agoda.net/hotelImages/19932463/0/5b5e067c5c27c1d6466c5293cd4af102.jpg?ce=0&s=800x600",
      "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1935603&hid=19932463&currency=USD&checkin=2025-01-20&checkout=2025-01-21&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
      "includeBreakfast": false,
      "freeWifi": true,
      "latitude": 0.5746667,
      "longitude": 123.059363
    },
    {
      "hotelId": 55207176,
      "hotelName": "Pondok Wisata Hiu Paus Botubarani gorontalo",
      "starRating": 0.0,
      "reviewScore": 7.3,
      "reviewCount": 3,
      "currency": "USD",
      "dailyRate": 25.26,
      "crossedOutRate": 0,
      "discountPercentage": 0.0,
      "imageURL": "http://q-xx.bstatic.com/xdata/images/hotel/840x460/547936113.jpg?k=4567e17b1871d43cce063e6ae1ab9547930c87effd269b6d95446d6c1b0e807e&o=",
      "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1935603&hid=55207176&currency=USD&checkin=2025-01-20&checkout=2025-01-21&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
      "includeBreakfast": true,
      "freeWifi": false,
      "latitude": 0.4763199985027313,
      "longitude": 123.10053253173828
    },
    {
      "hotelId": 7698962,
      "hotelName": "Sunset Homestay by Harry & Mimin",
      "starRating": 0.0,
      "reviewScore": 8.6,
      "reviewCount": 6,
      "currency": "USD",
      "dailyRate": 19.43,
      "crossedOutRate": 0,
      "discountPercentage": 0.0,
      "imageURL": "http://q-xx.bstatic.com/xdata/images/hotel/840x460/276256324.jpg?k=9e09760458c0fd9db54d498c5e1c17bdb4b9382b644e60798b3a6891fb606db7&o=",
      "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1935603&hid=7698962&currency=USD&checkin=2025-01-20&checkout=2025-01-21&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
      "includeBreakfast": true,
      "freeWifi": true,
      "latitude": 0.6113700270652771,
      "longitude": 123.01483917236328
    },
    {
      "hotelId": 59305878,
      "hotelName": "Ipoeng Rest Bed & Breakfast",
      "starRating": 0.0,
      "reviewScore": 10.0,
      "reviewCount": 1,
      "currency": "USD",
      "dailyRate": 13.92,
      "crossedOutRate": 0,
      "discountPercentage": 0.0,
      "imageURL": "http://q-xx.bstatic.com/xdata/images/hotel/840x460/578567224.jpg?k=1f52f30bea1a6fff58cd488e4dc64c0d72b7c529eb54097fb6fabf34a6f4a215&o=",
      "landingURL": "https://www.agoda.com/partners/partnersearch.aspx?cid=1935603&hid=59305878&currency=USD&checkin=2025-01-20&checkout=2025-01-21&NumberofAdults=2&NumberofChildren=0&Rooms=1&pcs=6",
      "includeBreakfast": true,
      "freeWifi": false,
      "latitude": 0.5012199878692627,
      "longitude": 123.06743621826172
    }
  ]
}

let elemHotel = ''
GTLOhotels.results.map(hotel => {
  elemHotel += `<div class="swiper-slide">
      <div class="card">
        <div class="wrapper">
          <img src="${hotel.imageURL}" class="card-img-top" alt="...">
          <span>${hotel.reviewScore.toFixed(1)}</span>
        </div>
        <div class="card-body">
          <h5 class="card-title">${hotel.hotelName}</h5>
          <p class="card-text">
          <div class=""><div class="d-flex" id="theStars">`

  for (let i = 1; i <= hotel.starRating * 2; i++) {
    elemHotel += i % 2 != 0 ? `<div style="width: .5rem !important; overflow-x: clip;">
                    <i class="bi bi-star-fill starIcon text-warning"></i>
                  </div>` : `<div style="width: .5rem !important; overflow-x: clip;">
                              <i class="bi bi-star-fill starIcon text-warning" style="margin-left:-.5rem"></i>
                            </div>`
  }
  for (let i = 1; i <= 10 - (hotel.starRating * 2); i++) {
    elemHotel += i % 2 != 0 ? `<div style="width: .5rem !important; overflow-x: clip;">
                    <i class="bi bi-star-fill starIcon text-dark"></i>
                  </div>` : `<div style="width: .5rem !important; overflow-x: clip;">
                              <i class="bi bi-star-fill starIcon text-dark" style="margin-left:-.5rem"></i>
                            </div>`
  }
  elemHotel += `
          </div>
          </div>
            <small>Per malam sebelum pajak</small>
            <h6>IDR 192.230</h6>
          </p>
        </div>
      </div>
    </div>
    `
})
$('#data-hotels').find('.swiper-wrapper').append(elemHotel)