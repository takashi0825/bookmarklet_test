function save_file() {
    Array.prototype.forEach.call(
        document.getElementsByClassName('TextWithTruncation__TheButton-sc-1wolf3g-0'), function(elem){elem.click()}
    );
    Array.prototype.forEach.call(
        document.getElementsByClassName('ProfileItems__Container-sc-1gso5r4-0'), function(elem) {elem.click()}
    );
    str_url = location.href;
    var sspage=(new XMLSerializer).serializeToString(document),
    blob=new Blob([sspage], {type:"text/plain"}),
    url=window.URL,
    bloburl=url.createObjectURL(blob),
    a=document.createElement("a");
    a.download=str_url+'.html';
    a.href=bloburl;
    a.click();
}
// var target_frame = document.getElementsByClassName("UserProfile__Container-sc-100fi4a-0");
// target_frame[0].style.backgroundColor = "#ff0000";
var checked_url = [
    "https://admin.wantedly.com/scouts/users/h/MTY2OTU0OTgw",
    "https://admin.wantedly.com/scouts/users/h/MTU5NjI2NjAw"
];
if (checked_url.includes(location.href)) {
    alert("確認済み");
} else {
    save_file();
}
