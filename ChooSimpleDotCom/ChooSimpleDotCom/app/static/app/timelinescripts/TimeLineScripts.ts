/// <reference path="node_modules/@types/jquery/index.d.ts" />

class ChooSimpleLazyLoad{
    BASE_URL :string = "wwww.ChooSimple.com"
    isNeedLoad :boolean;

    constructor(base_url:string){
        if (base_url != "") {
            this.BASE_URL = base_url;
        }
    }

    sendAjaxRequest(requestType:string,url:string,param:string,requestCallBack :Function){
        var request = $.ajax({
             type: requestType,
             url: this.BASE_URL + url,
             data: param,
             contentType: 'json'
        });

        request.done(function(res) {
             requestCallBack(res);
        });

        request.fail(function(jqXHR, textStatus) {
            console.error(jqXHR);
            requestCallBack({ err: true, message: "Request failed: " + textStatus });
        });
        
    }
    

    loadContent(){

    }
}

class PostData {
    queryBegin :number;
    queryEnd   :number;
    constructor(begin:number,end:number){
       this.queryBegin = begin;
       this.queryEnd = end;
    }  
    
    toJson() {
       let str:string =  `{"queryBegin":${this.queryBegin},"queryEnd":${this.queryEnd}}`;
       return JSON.parse(str);
    }
}

class TimelineThingDiv {
    id    :number;
    title :string;
    description :string;
    contentSource :string;
    uploadDate :any;
    status     :number;

    toHtml(){
        //状态为1,代表正常。
        if (this.status == 1) {
            //一个timelinething的划分
            return '<div id="${id}" onclick="window.open(${contentSource})"><h2 class="timelinething-title">${title}</h2><p  class="timelinething-description">${description}</p><time class="timelinething-datetime">${uploadDate}</time></div>';
        }
        else {
            return "";
        }
    }
}

class Timeline extends ChooSimpleLazyLoad {
    constructor(base_url:string){
        super(base_url);
    }
    
    loadContent(){
        let postData:PostData = new PostData(1,2);
        this.sendAjaxRequest("POST","querytimelineitem",postData.toJson(),function(response) {
            console.log(response);
        });
    }    

}

window.onscroll = function () { 
    
}

$(document).ready(function(){  
    let base_url:string = window.location.href;
    let myTimeline:Timeline = new Timeline(base_url);
	document.getElementById("RequestButton").onclick = function(){
        myTimeline.loadContent();
    }
 }); 