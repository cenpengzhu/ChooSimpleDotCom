/// <reference path="node_modules/@types/jquery/index.d.ts" />
class ChooSimpleLazyLoad {
    constructor(base_url) {
        this.BASE_URL = "wwww.ChooSimple.com";
        if (base_url != "") {
            this.BASE_URL = base_url;
        }
    }
    sendAjaxRequest(requestType, url, param, requestCallBack) {
        var request = $.ajax({
            type: requestType,
            url: this.BASE_URL + url,
            data: param,
            contentType: 'json'
        });
        request.done(function (res) {
            requestCallBack(res);
        });
        request.fail(function (jqXHR, textStatus) {
            console.error(jqXHR);
            requestCallBack({ err: true, message: "Request failed: " + textStatus });
        });
    }
    loadContent() {
    }
}
class PostData {
    constructor(begin, end) {
        let queryBegin = begin;
        let queryEnd = end;
    }
    toJson() {
        return JSON.stringify(this);
    }
}
class TimelineThingDiv {
    toHtml() {
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
    constructor(base_url) {
        super(base_url);
    }
    loadContent() {
        let postData = new PostData(1, 2);
        this.sendAjaxRequest("POST", "querytimelineitem", JSON.stringify(postData), function (response) {
            console.log(response);
        });
    }
}
window.onscroll = function () {
};
$(document).ready(function () {
    let base_url = window.location.href;
    let myTimeline = new Timeline(base_url);
    document.getElementById("RequestButton").onclick = function () {
        myTimeline.loadContent();
    };
});
