import { SphereClient } from "./dist/lib/es6/index.js";
 


let sphereClient = new SphereClient("MjJiYWRlZjViNDJjOTYzOTAzMDNhMDU4OTU5OTk5NDc=");




sphereClient.getItem('6360b6d7895179561908318e' , {
   onResult(appName , appIcon  , cover , itemName ,extras  , body ,itemCategoryName ,itemImages , itemImage){
         console.log('appname'  , appName , 'appIcon' , appIcon  , 'cover' , cover , 'itemName' , itemName , 'extras' , extras , 'body' , body , 'itemcategoryname' , itemCategoryName , 'itemimages' , itemImages , 'itemimage' , itemImage)
   },
   onLoading(){
                  console.log('loading started')
               },
               onLoadfinished(){
                  console.log('loading finished')
               },
     onAnnouncement( announcementBody ){
                  console.log(announcementBody)
               },
     onAppLocation( appLocation  ,  latitude  ,  longitude  ){
                  console.log(appLocation , latitude , longitude)
               },
     onCover(cover){
         console.log('cover' , cover)
     },
     onError(){
                        console.log('error' , 'there is an error')
                     },
                     onUnderConstruction(){
                        console.log('under construction')
                     },
      onNotActive(){
                  console.log('not active')
               },
               onNotExist(){
                  console.log('not exist')
               },
               onNotFound(){
                  console.log('not found')
               },
               onNotAcceptable(){
                  console.log('not acceptable')
               },
               onBadRequest(){
                  console.log('bad request')
               },
               onNoNextPage(){
                  console.log('no next page')
               },
})


// sphereClient.getItemsLoadMore('6350eb271e9e985b4f088b6f' , {

//    onResult(totalItemCount ,  itemsInThisPage ,  itemsPerPage ,  items){
//                   console.log('items' , items)
            
//                },
//                onLoading(){
//                   console.log('loading started')
//                },
//                onLoadfinished(){
//                   console.log('loading finished')
//                },

//                onNextPage(){
//                   console.log('nextpage exists')
//                },
            
//                onEmpty(){
//                   console.log('no items')
//                },
//                onError(){
//                   console.log('error' , 'there is an error')
//                },
//                onUnderConstruction(){
//                   console.log('under construction')
//                },
//                onNotActive(){
//                   console.log('not active')
//                },
//                onNotExist(){
//                   console.log('not exist')
//                },
//                onNotFound(){
//                   console.log('not found')
//                },
//                onNotAcceptable(){
//                   console.log('not acceptable')
//                },
//                onBadRequest(){
//                   console.log('bad request')
//                },
//                onNoNextPage(){
//                   console.log('no next page')
//                },
// })



// sphereClient.getItems('6350eb271e9e985b4f088b6f'  , {

//    onResult( appName ,  appIcon  ,  categoryName, categoryIcon ,   totalItemCount ,  itemsInThisPage ,  itemsPerPage ,  items){
//             console.log('items' , items)
      
//          },
//          onLoading(){
//             console.log('loading started')
//          },
//          onLoadfinished(){
//             console.log('loading finished')
//          },
//          onAnnouncement( announcementBody ){
//             console.log(announcementBody)
//          },
//          onAppLocation( appLocation  ,  latitude  ,  longitude  ){
//             console.log(appLocation , latitude , longitude)
//          },
//          onNextPage(){
//             console.log('nextpage exists')
//          },
//          onCover( cover ){
//             console.log(cover)
//          },
      
//          onEmpty(){
//             console.log('no items')
//          },
//          onError(){
//             console.log('error' , 'there is an error')
//          },
//          onUnderConstruction(){
//             console.log('under construction')
//          },
//          onNotActive(){
//             console.log('not active')
//          },
//          onNotExist(){
//             console.log('not exist')
//          },
//          onNotFound(){
//             console.log('not found')
//          },
//          onNotAcceptable(){
//             console.log('not acceptable')
//          },
//          onBadRequest(){
//             console.log('bad request')
//          },
//          onNoNextPage(){
//             console.log('no next page')
//          },
// })


// sphereClient.getLauncherLoadMore("6351327975bc97ad9204c2ab" , {

//    onResult(totalItemCount ,  itemsInThisPage ,  itemsPerPage ,  items){
//       console.log('items' , items)

//    },
//    onLoading(){
//       console.log('loading started')
//    },
//    onLoadfinished(){
//       console.log('loading finished')
//    },
//    onNextPage(){
//       console.log('nextpage exists')
//    },
//    onEmpty(){
//       console.log('no items')
//    },
//    onError(){
//       console.log('error' , 'there is an error')
//    },
//    onUnderConstruction(){
//       console.log('under construction')
//    },
//    onNotActive(){
//       console.log('not active')
//    },
//    onNotExist(){
//       console.log('not exist')
//    },
//    onNotFound(){
//       console.log('not found')
//    },
//    onNotAcceptable(){
//       console.log('not acceptable')
//    },
//    onBadRequest(){
//       console.log('bad request')
//    },
//    onNoNextPage(){
//       console.log('no next page')
//    },
// })


// sphereClient.getLauncher("6351327975bc97ad9204c2ab" , {
//    onResult( appName ,  appIcon  ,  launcherName, launcherIcon ,   totalItemCount ,  itemsInThisPage ,  itemsPerPage ,  items){
//       console.log('items' , items)

//    },
//    onLoading(){
//       console.log('loading started')
//    },
//    onLoadfinished(){
//       console.log('loading finished')
//    },
//    onAnnouncement( announcementBody ){
//       console.log(announcementBody)
//    },
//    onAppLocation( appLocation  ,  latitude  ,  longitude  ){
//       console.log(appLocation , latitude , longitude)
//    },
//    onNextPage(){
//       console.log('nextpage exists')
//    },
//    onCover( cover ){
//       console.log(cover)
//    },

//    onEmpty(){
//       console.log('no items')
//    },
//    onError(){
//       console.log('error' , 'there is an error')
//    },
//    onUnderConstruction(){
//       console.log('under construction')
//    },
//    onNotActive(){
//       console.log('not active')
//    },
//    onNotExist(){
//       console.log('not exist')
//    },
//    onNotFound(){
//       console.log('not found')
//    },
//    onNotAcceptable(){
//       console.log('not acceptable')
//    },
//    onBadRequest(){
//       console.log('bad request')
//    },
//    onNoNextPage(){
//       console.log('no next page')
//    },
// })


// sphereClient.getHomeLoadMore({
//    onResult(  totalItemCount  ,  itemsInThisPage  ,  itemsPerPage  ,   items ){
//               console.log('items' , items)
//           },
//            onLoading(){
//               console.log('loading started')
//            },
//            onLoadfinished(){
//               console.log('loading finished')
//            },
//            onNextPage(){
//               console.log('nextpage exists')
//            },
//            onEmpty(){
//               console.log('no items')
//            },
//            onError(){
//               console.log('error' , 'there is an error')
//            },
//            onUnderConstruction(){
//               console.log('under construction')
//            },
//            onNotActive(){
//               console.log('not active')
//            },
//            onNotExist(){
//               console.log('not exist')
//            },
//            onNotFound(){
//               console.log('not found')
//            },
//            onNotAcceptable(){
//               console.log('not acceptable')
//            },
//            onBadRequest(){
//               console.log('bad request')
//            },
//            onNoNextPage(){
//               console.log('no next page')
//            },
// })


// sphereClient.getHome( {
//             onResult( appName  ,  appIcon  ,  totalItemCount  ,  itemsInThisPage  ,  itemsPerPage  ,   items ){
//                console.log('items' , items)
//             },
//             onLoading(){
//                console.log('loading started')
//             },
//             onLoadfinished(){
//                console.log('loading finished')
//             },
//             onPopup( popupTitle  ,  popupMessage ){
//                console.log(popupTitle , popupMessage)
//             },
//             onAnnouncement( announcementBody ){
//                console.log(announcementBody)
//             },
//             onMessage( messageTitle  ,  messageBody ){
//                console.log(messageTitle , messageBody)
//             },
//             onAppLocation( appLocation  ,  latitude  ,  longitude  ){
//                console.log(appLocation , latitude , longitude)
//             },
//             onNextPage(){
//                console.log('nextpage exists')
//             },
//             onCover( cover ){
//                console.log(cover)
//             },
//             onEmpty(){
//                console.log('no items')
//             },
//             onError(){
//                console.log('error' , 'there is an error')
//             },
//             onUnderConstruction(){
//                console.log('under construction')
//             },
//             onNotActive(){
//                console.log('not active')
//             },
//             onNotExist(){
//                console.log('not exist')
//             },
//             onNotFound(){
//                console.log('not found')
//             },
//             onNotAcceptable(){
//                console.log('not acceptable')
//             },
//             onBadRequest(){
//                console.log('bad request')
//             },
//             onNoNextPage(){
//                console.log('no next page')
//             },
//          }

// )
