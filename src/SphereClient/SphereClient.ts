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
                    
                    getItem.onLoadfinished()

                    let code : number = data.response.code;
                    let status : string = data.response.status;

                     if(code == 401){
                         getItem.onNotExist();
                         return;
                       }else if(code == 404){
                          getItem.onNotFound();
                          return;
                       }
                       else if(code == 405){
                          getItem.onNotActive();
                          return;
                       }
                       else if(code == 400){
                          getItem.onBadRequest();
                          return;
                       }else if(code == 406){
                           getItem.onNotAcceptable();
                           return;
                       }
     
     
                       if(status == "under-construction"){
                         getItem.onUnderConstruction();
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
                        getItem.onCover(info.homeCover);
                    }



                        getItem.onResult(info.appName , info.appIcon , info.homeCover , data.itemName , data.extras , atob(data.body) , data.itemCategoryName , data.itemImages  , data.itemImage )



                },
                error(error) {
                    getItem.onError()
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
                    
                    getItemsLoadMore.onLoadfinished()

                    let code : number = data.response.code;
                    let status : string = data.response.status;

                     if(code == 401){
                         getItemsLoadMore.onNotExist();
                         return;
                       }else if(code == 404){
                          getItemsLoadMore.onNotFound();
                          return;
                       }
                       else if(code == 405){
                          getItemsLoadMore.onNotActive();
                          return;
                       }
                       else if(code == 400){
                          getItemsLoadMore.onBadRequest();
                          return;
                       }else if(code == 406){
                           getItemsLoadMore.onNotAcceptable();
                           return;
                       }
     
     
                       if(status == "under-construction"){
                         getItemsLoadMore.onUnderConstruction();
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


                },
                error(error) {
                    getItemsLoadMore.onError()
                },
            } )

        }

        //loads items belonging to a category
        getItems(itemCategory: string , getItems : GetItems){
            this.itemsPageNumber = 1;
                getItems.onLoading()
                new XHRFetch(`https://api.wideflare.com/?action=getItems&appKey=${this.appKey}&page=1&categoryId=${itemCategory}` , {
                    getData(data) {
                        getItems.onLoadfinished()

                        let code : number = data.response.code;
                        let status : string = data.response.status;
    
                         if(code == 401){
                             getItems.onNotExist();
                             return;
                           }else if(code == 404){
                              getItems.onNotFound();
                              return;
                           }
                           else if(code == 405){
                              getItems.onNotActive();
                              return;
                           }
                           else if(code == 400){
                              getItems.onBadRequest();
                              return;
                           }else if(code == 406){
                               getItems.onNotAcceptable();
                               return;
                           }
         
         
                           if(status == "under-construction"){
                             getItems.onUnderConstruction();
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
                            getItems.onCover(info.homeCover);
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
        

                        
                             getItems.onResult(info.appName ,info.appIcon , info.categoryName , info.categoryIcon ,info.totalItemCount  ,  info.itemsInThisPage , info.itemsPerPage  , items);
        
                        }else {
                           getItems.onEmpty();
                        }
    


                    },
                    error(error) {
                        getItems.onError()
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
                    getLauncherLoadMore.onLoadfinished()

                    let code : number = data.response.code;
                    let status : string = data.response.status;

                     if(code == 401){
                         getLauncherLoadMore.onNotExist();
                         return;
                       }else if(code == 404){
                          getLauncherLoadMore.onNotFound();
                          return;
                       }
                       else if(code == 405){
                          getLauncherLoadMore.onNotActive();
                          return;
                       }
                       else if(code == 400){
                          getLauncherLoadMore.onBadRequest();
                          return;
                       }else if(code == 406){
                           getLauncherLoadMore.onNotAcceptable();
                           return;
                       }
     
     
                       if(status == "under-construction"){
                         getLauncherLoadMore.onUnderConstruction();
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


                },
                error(error) {
                    getLauncherLoadMore.onError()
                },
            })

        }

        //loads launcher with items

        getLauncher( launcherId : string , getLauncher: GetLauncher){
            this.launcherPageNumber = 1;
            getLauncher.onLoading()

            new XHRFetch(`https://api.wideflare.com/?action=getLauncher&appKey=${this.appKey}&page=1&launcherId=${launcherId}` , {
                getData(data) {
                    getLauncher.onLoadfinished()

                    let code : number = data.response.code;
                    let status : string = data.response.status;

                     if(code == 401){
                         getLauncher.onNotExist();
                         return;
                       }else if(code == 404){
                          getLauncher.onNotFound();
                          return;
                       }
                       else if(code == 405){
                          getLauncher.onNotActive();
                          return;
                       }
                       else if(code == 400){
                          getLauncher.onBadRequest();
                          return;
                       }else if(code == 406){
                           getLauncher.onNotAcceptable();
                           return;
                       }
     
     
                       if(status == "under-construction"){
                         getLauncher.onUnderConstruction();
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
                        getLauncher.onCover(info.launcherCover);
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

                     getLauncher.onResult(info.appName ,info.appIcon , info.launcherName , info.launcherIcon ,info.totalItemCount  ,  info.itemsInThisPage , info.itemsPerPage  , items);

                }else {
                   getLauncher.onEmpty();
                }


                },
                error(error) {
                    getLauncher.onError()
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
                        

                        getHomeLoadMore.onLoadfinished();

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

                    },
                    error(error) {
                        
                    },
                })
         }

         //loads home launcher with items
         getHome(getHome : GetHome){
            this.homePageNumber = 1;
                getHome.onLoading();
            new XHRFetch(`https://api.wideflare.com/?action=getHome&appKey=${this.appKey}&page=1` , { getData(data) {

            getHome.onLoadfinished();

               let code : number = data.response.code;
               let status : string = data.response.status;
                if(code == 401){
                    getHome.onNotExist();
                    return;
                  }else if(code == 404){
                     getHome.onNotFound();
                     return;
                  }
                  else if(code == 405){
                     getHome.onNotActive();
                     return;
                  }
                  else if(code == 400){
                     getHome.onBadRequest();
                     return;
                  }else if(code == 406){
                      getHome.onNotAcceptable();
                      return;
                  }


                  if(status == "under-construction"){
                    getHome.onUnderConstruction();
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
                    getHome.onCover(info.homeCover);
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
                   getHome.onEmpty();
                }
            }
            ,
            error(error){
                getHome.onError();
            }
             }
          );


         }






        constructor(appKey : string){

            this.appKey = appKey;
        }


        
}

// new SphereClient();