import {Fetch} from './Fetch.js'
import {XHRFetch} from './XHRFetch.js'

import { GetHome } from '../Home/GetHome.js';
import { GetHomeLoadMore } from '../Home/GetHomeLoadMore.js';
import { HomeItems } from '../Home/HomeItems.js';

import { GetLauncher } from '../Launcher/GetLauncher.js';
import { GetLauncherLoadMore } from '../Launcher/GetLauncherLoadMore.js';
import { LauncherItems } from '../Launcher/LauncherItems.js';

import { GetItems } from '../Items/GetItems.js';
import { GetItemsLoadMore } from '../Items/GetItemsLoadMore.js';
import { Items } from '../Items/Items.js';

import {GetItem} from '../Item/GetItem.js'


export class SphereClient {


         appKey : string;

        private homePageNumber : number = 1;
        private launcherPageNumber : number = 1;
        private itemsPageNumber : number = 1;




        ////////////for item

        getItem(itemId : string , getItem : GetItem){

            getItem.onLoading()

            new XHRFetch(`https://api.wideflare.com/?action=getItem&appKey=${this.appKey}&itemId=${itemId}` , {
                getData(data) {
                    
                    
                    

                    let code : number = data.response.code;
                    let status : string = data.response.status;

                     if(code == 401){
                         getItem.onNotExist();
                         getItem.onLoadfinished()
                         return;
                       }else if(code == 404){
                          getItem.onNotFound();
                          getItem.onLoadfinished()
                          return;
                       }
                       else if(code == 405){
                          getItem.onNotActive();
                          getItem.onLoadfinished()
                          return;
                       }
                       else if(code == 400){
                          getItem.onBadRequest();
                          getItem.onLoadfinished()
                          return;
                       }else if(code == 406){
                           getItem.onNotAcceptable();
                           getItem.onLoadfinished()
                           return;
                       }
     
     
                       if(status == "under-construction"){
                         getItem.onUnderConstruction();
                         getItem.onLoadfinished()
                          return;
                      }
     
                      let info = data.info;
                      
                      if(data.announcement.status){
                          let announcement = data.announcement;
                          getItem.onAnnouncement(announcement.announcementBody);
                      }
                      
                      if(info.appLocation.status){
                        let  location  = info.appLocation;
                        getItem.onAppLocation(location.location , parseFloat(location.lat) , parseFloat(location.lon) );
                    }

                    if(info.homeCover.length !== 0){
                        getItem.onHomeCover(info.homeCover);
                    }

                        getItem.onResult(info.appName , info.appIcon  , data.itemName , data.extras , atob(data.body) , data.itemCategoryName , data.itemImages  , data.itemImage )
                        getItem.onLoadfinished()
                },
                error(error) {
                    getItem.onError(error)
                    getItem.onLoadfinished()
                },
            })


        }


        ////////////for items

        //loads more items

        getItemsLoadMore(itemCategory: string , getItemsLoadMore: GetItemsLoadMore){

            getItemsLoadMore.onLoading()
            this.itemsPageNumber++;

            new XHRFetch(`https://api.wideflare.com/?action=getItems&appKey=${this.appKey}&page=${this.itemsPageNumber}&categoryId=${itemCategory}` , {
                getData(data) {
                    
                    

                    
                    let code : number = data.response.code;
                    let status : string = data.response.status;

                     if(code == 401){
                         getItemsLoadMore.onNotExist();
                         getItemsLoadMore.onLoadfinished()
                         return;
                       }else if(code == 404){
                          getItemsLoadMore.onNotFound();
                          getItemsLoadMore.onLoadfinished()
                          return;
                       }
                       else if(code == 405){
                          getItemsLoadMore.onNotActive();
                          getItemsLoadMore.onLoadfinished()
                          return;
                       }
                       else if(code == 400){
                          getItemsLoadMore.onBadRequest();
                          getItemsLoadMore.onLoadfinished()
                          return;
                       }else if(code == 406){
                           getItemsLoadMore.onNotAcceptable();
                           getItemsLoadMore.onLoadfinished()
                           return;
                       }
     
     
                       if(status == "under-construction"){
                         getItemsLoadMore.onUnderConstruction();
                         getItemsLoadMore.onLoadfinished()
                          return;
                      }
     
                      let info = data.info;

                      

                    let itemsInThisPage : number = parseInt(info.itemsInThisPage);

                    let totalItemCount : number = parseInt( info.totalItemCount);



                    if(info.nextPage.status) {
                        getItemsLoadMore.onNextPage();
                     }else {
                         getItemsLoadMore.onNoNextPage();
                     }

                     if(itemsInThisPage != 0){
                        let _items = data.items;
                        let items   = [];
    
                         _items.forEach(element => {
                            items.push( new Items(
                                element.itemName,
                                element.itemId,
                                element.extras,
                                element.itemImage
                        )
                        )
                         });
    

                    
                         getItemsLoadMore.onResult(info.totalItemCount  ,  info.itemsInThisPage , info.itemsPerPage  , items);
    
                    }else {
                       getItemsLoadMore.onEmpty();
                    }

                    getItemsLoadMore.onLoadfinished()

                },
                error(error) {
                    getItemsLoadMore.onError(error)
                    getItemsLoadMore.onLoadfinished()
                },
            } )

        }

        //loads items belonging to a category
        getItems(itemCategory: string , getItems : GetItems){
                 this.itemsPageNumber = 1;
                getItems.onLoading()
                new XHRFetch(`https://api.wideflare.com/?action=getItems&appKey=${this.appKey}&page=1&categoryId=${itemCategory}` , {
                    getData(data) {
                        

                        
                        let code : number = data.response.code;
                        let status : string = data.response.status;
    
                         if(code == 401){
                             getItems.onNotExist();
                             getItems.onLoadfinished()
                             return;
                           }else if(code == 404){
                              getItems.onNotFound();
                              getItems.onLoadfinished()
                              return;
                           }
                           else if(code == 405){
                              getItems.onNotActive();
                              getItems.onLoadfinished()
                              return;
                           }
                           else if(code == 400){
                              getItems.onBadRequest();
                              getItems.onLoadfinished()
                              return;
                           }else if(code == 406){
                               getItems.onNotAcceptable();
                               getItems.onLoadfinished()
                               return;
                           }
         
         
                           if(status == "under-construction"){
                             getItems.onUnderConstruction();
                             getItems.onLoadfinished()
                              return;
                          }
         
                          let info = data.info;

                          if(info.appLocation.status){
                            let  location  = info.appLocation;
                            getItems.onAppLocation(location.location , parseFloat(location.lat) , parseFloat(location.lon) );
                        }
    
                        let itemsInThisPage : number = parseInt(info.itemsInThisPage);
    
                        let totalItemCount : number = parseInt( info.totalItemCount);
    
                        if(data.announcement.status){
                            let announcement = data.announcement;
                            getItems.onAnnouncement(announcement.announcementBody);
                        }
    
                        if(info.homeCover.length !== 0){
                            getItems.onHomeCover(info.homeCover);
                        }
    
    
                        if(info.nextPage.status) {
                            getItems.onNextPage();
                         }else {
                             getItems.onNoNextPage();
                         }

                         if(itemsInThisPage != 0){
                            let _items = data.items;
                            let items   = [];
        
                             _items.forEach(element => {
                                items.push( new Items(
                                    element.itemName,
                                    element.itemId,
                                    element.extras,
                                    element.itemImage
                            )
                            )
                             });
        

                        
                             getItems.onResult(info.appName ,info.appIcon , info.categoryName , info.categoryThumbnail ,info.totalItemCount  ,  info.itemsInThisPage , info.itemsPerPage  , items);
        
                        }else {
                           getItems.onEmpty(info.appName ,info.appIcon , info.categoryName , info.categoryThumbnail);
                        }
    

                        getItems.onLoadfinished()

                    },
                    error(error) {
                        getItems.onError(error)
                        getItems.onLoadfinished()
                    },
                })
        }



        ////////////for launcher

        //loads more launcher items

        getLauncherLoadMore(launcherId: string , getLauncherLoadMore: GetLauncherLoadMore){

                getLauncherLoadMore.onLoading() 
                this.launcherPageNumber++;

            new XHRFetch(`https://api.wideflare.com/?action=getLauncher&appKey=${this.appKey}&page=${this.launcherPageNumber}&launcherId=${launcherId}` , {
                getData(data) {
                    

                    
                    let code : number = data.response.code;
                    let status : string = data.response.status;

                     if(code == 401){
                         getLauncherLoadMore.onNotExist();
                         getLauncherLoadMore.onLoadfinished()
                         return;
                       }else if(code == 404){
                          getLauncherLoadMore.onNotFound();
                          getLauncherLoadMore.onLoadfinished()
                          return;
                       }
                       else if(code == 405){
                          getLauncherLoadMore.onNotActive();
                          getLauncherLoadMore.onLoadfinished()
                          return;
                       }
                       else if(code == 400){
                          getLauncherLoadMore.onBadRequest();
                          getLauncherLoadMore.onLoadfinished()
                          return;
                       }else if(code == 406){
                           getLauncherLoadMore.onNotAcceptable();
                           getLauncherLoadMore.onLoadfinished()
                           return;
                       }
     
     
                       if(status == "under-construction"){
                         getLauncherLoadMore.onUnderConstruction();
                         getLauncherLoadMore.onLoadfinished()
                          return;
                      }
     
                      let info = data.info;

                   
                    let itemsInThisPage : number = parseInt(info.itemsInThisPage);

                    let totalItemCount : number = parseInt( info.totalItemCount);


                    if(info.nextPage.status) {
                        getLauncherLoadMore.onNextPage();
                     }else {
                         getLauncherLoadMore.onNoNextPage();
                     }




                if(itemsInThisPage != 0){
                    let _items = data.items;
                    let items   = [];

                     _items.forEach(element => {
                        items.push( new LauncherItems(
                            element.itemName,
                            element.actionType,
                            element.action,
                            element.thumbnail
                    )
                    )
                     });

                     getLauncherLoadMore.onResult(info.totalItemCount  ,  info.itemsInThisPage , info.itemsPerPage  , items);

                }else {
                   getLauncherLoadMore.onEmpty();
                }

                getLauncherLoadMore.onLoadfinished()
                },
                error(error) {
                    getLauncherLoadMore.onError(error)
                    getLauncherLoadMore.onLoadfinished()
                },
            })

        }

        //loads launcher with items

        getLauncher( launcherId : string , getLauncher: GetLauncher){
            this.launcherPageNumber = 1;
            getLauncher.onLoading()

            new XHRFetch(`https://api.wideflare.com/?action=getLauncher&appKey=${this.appKey}&page=1&launcherId=${launcherId}` , {
                getData(data) {

                    
                    let code : number = data.response.code;
                    let status : string = data.response.status;

                     if(code == 401){
                         getLauncher.onNotExist();
                                             getLauncher.onLoadfinished()

                         return;
                       }else if(code == 404){
                          getLauncher.onNotFound();
                                              getLauncher.onLoadfinished()

                          return;
                       }
                       else if(code == 405){
                          getLauncher.onNotActive();
                                              getLauncher.onLoadfinished()

                          return;
                       }
                       else if(code == 400){
                          getLauncher.onBadRequest();
                                              getLauncher.onLoadfinished()

                          return;
                       }else if(code == 406){
                           getLauncher.onNotAcceptable();
                                               getLauncher.onLoadfinished()

                           return;
                       }
     
     
                       if(status == "under-construction"){
                         getLauncher.onUnderConstruction();
                                             getLauncher.onLoadfinished()

                          return;
                      }
     
                      let info = data.info;

                      if(info.appLocation.status){
                        let  location  = info.appLocation;
                        getLauncher.onAppLocation(location.location , parseFloat(location.lat) , parseFloat(location.lon) );
                    }

                    let itemsInThisPage : number = parseInt(info.itemsInThisPage);

                    let totalItemCount : number = parseInt( info.totalItemCount);

                    if(data.announcement.status){
                        let announcement = data.announcement;
                        getLauncher.onAnnouncement(announcement.announcementBody);
                    }

                    if(info.launcherCover.length !== 0){
                        getLauncher.onLauncherCover(info.launcherCover);
                    }


                    if(info.nextPage.status) {
                        getLauncher.onNextPage();
                     }else {
                         getLauncher.onNoNextPage();
                     }




                if(itemsInThisPage != 0){
                    let _items = data.items;
                    let items   = [];

                     _items.forEach(element => {
                        items.push( new LauncherItems(
                            element.itemName,
                            element.actionType,
                            element.action,
                            element.thumbnail
                    )
                    )
                     });

                     getLauncher.onResult(info.appName ,info.appIcon , info.launcherName , info.launcherThumbnail ,info.totalItemCount  ,  info.itemsInThisPage , info.itemsPerPage  , items);

                }else {
                   getLauncher.onEmpty(info.appName ,info.appIcon , info.launcherName , info.launcherThumbnail);
                }
                getLauncher.onLoadfinished()


                },
                error(error) {
                    getLauncher.onError(error)
                    getLauncher.onLoadfinished()

                },
            })

        }

         ////////////for home

         //loads more home launcher items

         getHomeLoadMore(getHomeLoadMore : GetHomeLoadMore){
                getHomeLoadMore.onLoading();
                this.homePageNumber++;
                new XHRFetch(`https://api.wideflare.com/?action=getHome&appKey=${this.appKey}&page=${this.homePageNumber}` , {
                    getData(data) {
                        
                            

                        let code : number = data.response.code;
                        let status : string = data.response.status;
                         if(code == 401){
                             getHomeLoadMore.onNotExist();
                             return;
                           }else if(code == 404){
                              getHomeLoadMore.onNotFound();
                              return;
                           }
                           else if(code == 405){
                              getHomeLoadMore.onNotActive();
                              return;
                           }
                           else if(code == 400){
                              getHomeLoadMore.onBadRequest();
                              return;
                           }else if(code == 406){
                               getHomeLoadMore.onNotAcceptable();
                               return;
                           }
         
         
                           if(status == "under-construction"){
                             getHomeLoadMore.onUnderConstruction();
                             getHomeLoadMore.onLoadfinished();

                              return;
                          }
         
                          let info = data.info;
         
                         
         
                           let itemsInThisPage : number = parseInt(info.itemsInThisPage);
         
                           let totalItemCount : number = parseInt( info.totalItemCount);
         
         
                         if(info.nextPage.status) {
                            getHomeLoadMore.onNextPage();
                         }else {
                             getHomeLoadMore.onNoNextPage();
                         }
         
         
                         if(itemsInThisPage != 0){
                             let _items = data.items;
                             let items   = [];
         
                              _items.forEach(element => {
                                 items.push( new HomeItems(
                                     element.itemName,
                                     element.actionType,
                                     element.action,
                                     element.thumbnail
                             )
                             )
                              });

         
                             getHomeLoadMore.onResult(info.totalItemCount  ,  info.itemsInThisPage , info.itemsPerPage  , items);
         
                         }else {
                            getHomeLoadMore.onEmpty();
                         }
                         getHomeLoadMore.onLoadfinished();

                    },
                    error(error) {
                        getHomeLoadMore.onError(error)
                        getHomeLoadMore.onLoadfinished();
                    },
                })
         }

         //loads home launcher with items
         getHome(getHome : GetHome){
            this.homePageNumber = 1;
                getHome.onLoading();
            new XHRFetch(`https://api.wideflare.com/?action=getHome&appKey=${this.appKey}&page=1` , { getData(data) {

            
            

               let code : number = data.response.code;
               let status : string = data.response.status;
                if(code == 401){
                    getHome.onNotExist();
                    getHome.onLoadfinished();
                    return;
                  }else if(code == 404){
                     getHome.onNotFound();
                     getHome.onLoadfinished();
                     return;
                  }
                  else if(code == 405){
                     getHome.onNotActive();
                     getHome.onLoadfinished();
                     return;
                  }
                  else if(code == 400){
                     getHome.onBadRequest();
                     getHome.onLoadfinished();
                     return;
                  }else if(code == 406){
                      getHome.onNotAcceptable();
                      getHome.onLoadfinished();
                      return;
                  }


                  if(status == "under-construction"){
                    getHome.onUnderConstruction();
                    getHome.onLoadfinished();
                     return;
                 }

                 let info = data.info;

                 if(info.appLocation.status){
                    let  location  = info.appLocation;
                    getHome.onAppLocation(location.location , parseFloat(location.lat) , parseFloat(location.lon) );
                }

                  let itemsInThisPage : number = parseInt(info.itemsInThisPage);

                  let totalItemCount : number = parseInt( info.totalItemCount);

                  if(data.popup.status){
                    let popup = data.popup;
                    getHome.onPopup(popup.popupTitle  , popup.popupMessage);
                }
                
                if(data.message.status){
                    let message = data.message;
                    getHome.onMessage(message.messageTitle , message.messageBody);
                }
                
                if(data.announcement.status){
                    let announcement = data.announcement;
                    getHome.onAnnouncement(announcement.announcementBody);
                }

                if(info.homeCover.length !== 0){
                    getHome.onHomeCover(info.homeCover);
                }

                if(info.nextPage.status) {
                   getHome.onNextPage();
                }else {
                    getHome.onNoNextPage();
                }


                if(itemsInThisPage != 0){
                    let _items = data.items;
                    let items   = [];

                     _items.forEach(element => {
                        items.push( new HomeItems(
                            element.itemName,
                            element.actionType,
                            element.action,
                            element.thumbnail
                    )
                    )
                     });

                    getHome.onResult(info.appName ,info.appIcon ,info.totalItemCount  ,  info.itemsInThisPage , info.itemsPerPage  , items);
                }else {
                   getHome.onEmpty(info.appName , info.appIcon);
                }

                getHome.onLoadfinished();
            }
            ,
            error(error){
                getHome.onError(error);
                getHome.onLoadfinished();
            }
             }
          );


         }






        constructor(appKey : string){

            this.appKey = appKey;
        }


        
}

// new SphereClient();